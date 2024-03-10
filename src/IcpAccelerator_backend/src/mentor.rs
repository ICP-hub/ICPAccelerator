use candid::{CandidType, Principal};
use ic_cdk::api::call;
use ic_cdk::api::{caller, management_canister::main::raw_rand};
use ic_cdk_macros::{query, update};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
extern crate serde_cbor;
use crate::admin::send_approval_request;
use crate::trie::EXPERTISE_TRIE;
use crate::user_module::UserInformation;
use std::cell::RefCell;
#[derive(Serialize, Deserialize, Clone, Debug, CandidType, Default)]
pub struct MentorProfile {
    pub preferred_icp_hub: Option<String>,
    pub user_data: UserInformation,
    pub existing_icp_mentor: bool,
    pub exisitng_icp_project_porfolio: Option<String>,
    pub icop_hub_or_spoke: bool,
    pub category_of_mentoring_service: String,
    pub social_link: String,
    pub multichain: Option<String>,
    pub years_of_mentoring: String,
    pub website: String,
    pub area_of_expertise: String,
    pub reason_for_joining: String,
}
impl MentorProfile {
    pub fn validate(&self) -> Result<(), String> {
        if let Some(ref preferred_icp_hub) = self.preferred_icp_hub {
            if preferred_icp_hub.trim().is_empty() {
                return Err("Field cannot be empty".into());
            }
        }

        if let Some(ref exisitng_icp_project_porfolio) = self.exisitng_icp_project_porfolio {
            if exisitng_icp_project_porfolio.trim().is_empty() {
                return Err("Field cannot be empty".into());
            }
        }
        if let Some(ref multichain) = self.multichain {
            if multichain.trim().is_empty() {
                return Err("Field cannot be empty".into());
            }
        }

        Ok(())
    }
}

pub type MentorRegistry = HashMap<Principal, MentorInternal>;

#[derive(Serialize, Deserialize, Clone, Debug, CandidType, Default)]
pub struct MentorInternal {
    pub profile: MentorProfile,
    pub uid: String,
    pub active: bool,
    pub approve: bool,
    pub decline: bool,
}

thread_local! {
    pub static MENTOR_REGISTRY: RefCell<MentorRegistry> = RefCell::new(MentorRegistry::new());
    pub static MENTOR_AWAITS_RESPONSE: RefCell<MentorRegistry> = RefCell::new(MentorRegistry::new());
    pub static DECLINED_MENTOR_REQUESTS: RefCell<MentorRegistry> = RefCell::new(MentorRegistry::new());
}

pub async fn register_mentor(profile: MentorProfile) -> String {
    let caller = caller();

    DECLINED_MENTOR_REQUESTS.with(|d_mentors| {
        let exits = d_mentors.borrow().contains_key(&caller);
        if exits {
            panic!("You had got your request declined earlier");
        }
    });

    // let already_registered = MENTOR_REGISTRY.with(|registry| registry.borrow().contains_key(&caller));

    // if already_registered {

    //     ic_cdk::println!("This Principal is already registered");
    //     return "This Principal is already registered.".to_string()}

    match profile.validate() {
        Ok(_) => {
            let random_bytes = raw_rand().await.expect("Failed to generate random bytes").0;

            let uid = format!("{:x}", Sha256::digest(&random_bytes));

            let profile_for_pushing = profile.clone();

            let mentor_internal = MentorInternal {
                profile: profile_for_pushing,
                uid: uid.clone(),
                active: true,
                approve: false,
                decline: false,
            };

            MENTOR_AWAITS_RESPONSE.with(
                |awaiters: &RefCell<HashMap<Principal, MentorInternal>>| {
                    let mut await_ers: std::cell::RefMut<'_, HashMap<Principal, MentorInternal>> =
                        awaiters.borrow_mut();
                    await_ers.insert(caller, mentor_internal);
                },
            );

            let res = send_approval_request().await;

            format!("{}", res)
        }
        Err(e) => {
            format!("Validation error: {}", e)
        }
    }

    // MENTOR_REGISTRY.with(|registry| {
    //     registry.borrow_mut().insert(caller, mentor_internal);
    // });

    // if let Some(expertise) = profile.areas_of_expertise {
    //     let keyword = crate::trie::expertise_to_str(&expertise);
    //     EXPERTISE_TRIE.with(|trie| {
    //         trie.borrow_mut().insert(&keyword, caller);
    //     });
    // }
}

pub fn get_mentor() -> Option<MentorProfile> {
    let caller = caller();
    MENTOR_REGISTRY.with(|registry| {
        registry
            .borrow()
            .get(&caller)
            .map(|mentor_internal| mentor_internal.profile.clone())
    })
}

pub fn update_mentor(updated_profile: MentorProfile) -> String {
    let caller = caller();
    let result = MENTOR_REGISTRY.with(|registry| {
        let mut registry = registry.borrow_mut();
        if let Some(mentor_internal) = registry.get_mut(&caller) {
            mentor_internal.profile.preferred_icp_hub = updated_profile
                .preferred_icp_hub
                .or(mentor_internal.profile.preferred_icp_hub.clone());

            mentor_internal.profile.multichain = updated_profile
                .multichain
                .or(mentor_internal.profile.multichain.clone());
            mentor_internal.profile.exisitng_icp_project_porfolio = updated_profile
                .exisitng_icp_project_porfolio
                .or(mentor_internal
                    .profile
                    .exisitng_icp_project_porfolio
                    .clone());

            mentor_internal.profile.area_of_expertise = updated_profile.area_of_expertise;
            mentor_internal.profile.category_of_mentoring_service =
                updated_profile.category_of_mentoring_service;

            mentor_internal.profile.existing_icp_mentor = updated_profile.existing_icp_mentor;
            mentor_internal.profile.icop_hub_or_spoke = updated_profile.icop_hub_or_spoke;
            mentor_internal.profile.social_link = updated_profile.social_link;
            mentor_internal.profile.website = updated_profile.website;
            mentor_internal.profile.years_of_mentoring = updated_profile.years_of_mentoring;
            mentor_internal.profile.reason_for_joining = updated_profile.reason_for_joining;
            mentor_internal.profile.user_data = updated_profile.user_data;

            "Mentor profile updated successfully.".to_string()
        } else {
            "Mentor profile not found.".to_string()
        }
    });
    result
}

pub fn delete_mentor() -> String {
    let caller = caller();
    let removed = MENTOR_REGISTRY.with(|registry| registry.borrow_mut().remove(&caller).is_some());

    if removed {
        "Mentor profile deleted successfully.".to_string()
    } else {
        "Mentor profile not found.".to_string()
    }
}

pub fn get_all_mentors() -> Vec<MentorProfile> {
    MENTOR_REGISTRY.with(|registry| {
        registry
            .borrow()
            .values()
            .map(|mentor_internal| mentor_internal.profile.clone())
            .collect()
    })
}

pub fn make_active_inactive(p_id: Principal) -> String {
    MENTOR_REGISTRY.with(|m_container| {
        let mut tutor_hashmap = m_container.borrow_mut();
        if let Some(mentor_internal) = tutor_hashmap.get_mut(&p_id) {
            if mentor_internal.active {
                let active = false;
                mentor_internal.active = active;

                //ic_cdk::println!("mentor profile check status {:?}", mentor_internal);
                return "made inactive".to_string();
            } else {
                let active = true;
                mentor_internal.active = active;
                //ic_cdk::println!("mentor profile check status {:?}", mentor_internal);
                return "made active".to_string();
            }
        } else {
            "profile seems not to be existed".to_string()
        }
    })
}

pub fn find_mentors_by_expertise(expertise_keyword: &str) -> Vec<MentorProfile> {
    let keyword = expertise_keyword;
    let mentor_principals = EXPERTISE_TRIE.with(|trie| trie.borrow().search(keyword));

    let mut mentor_profiles = Vec::new();
    MENTOR_REGISTRY.with(|registry| {
        let registry = registry.borrow();
        for principal in mentor_principals {
            if let Some(mentor_internal) = registry.get(&principal) {
                mentor_profiles.push(mentor_internal.profile.clone());
            }
        }
    });

    mentor_profiles
}
