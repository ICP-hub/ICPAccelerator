use candid::{CandidType, Principal};
use ic_cdk::api::caller;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::cell::RefCell;
use ic_cdk::api::management_canister::main::raw_rand;
use sha2::{Digest, Sha256};
use ic_cdk_macros::{query, update};

#[derive(CandidType, Serialize, Deserialize, Clone, Debug, Default)]
pub struct UserInformation{
    pub full_name: String,
    pub profile_picture: Vec<u8>,
    pub email: String,
    pub country: String,
    pub telegram_id: String,
    pub bio: String,
    pub area_of_intrest: String, 
    pub twitter_id: String,
    pub role: String,
    pub is_active: bool,
}

#[derive(CandidType, Serialize, Deserialize, Clone, Debug, Default)]
pub struct UserInfoInternal{
    pub uid : String,
    pub params: UserInformation,
}

pub type UserInfoStorage = HashMap<Principal, UserInfoInternal>;

thread_local! {
    pub static USER_STORAGE: RefCell<UserInfoStorage> = RefCell::new(UserInfoStorage::new());
}

#[update]
pub async fn register_user_role(info: UserInformation)->std::string::String{
    let caller = caller();
    let uuids = raw_rand().await.unwrap().0;
    let uid = format!("{:x}", Sha256::digest(&uuids));
    let new_id = uid.clone().to_string();
    
    let user_info_internal = UserInfoInternal {
        uid: new_id.clone(),
        params: info,
    };
    USER_STORAGE.with(|storage| {
        let mut storage = storage.borrow_mut();
        if storage.contains_key(&caller) {
            format!("User with this Principal ID already exists");
        } else {
            storage.insert(caller, user_info_internal);
        }
    });
    format!("User registered successfully with ID: {}", new_id)
}

#[query]
pub fn get_user_info() -> Result<UserInformation, &'static str>  {
    let caller = caller();
    USER_STORAGE.with(|registry| {
        registry
            .borrow()
            .get(&caller)
            .map(|user_internal| user_internal.params.clone())
            .ok_or("You have to Register Yourself First.")
    })
}

#[query]
pub fn list_all_users() -> Vec<UserInformation> {
    USER_STORAGE.with(|storage| 
        storage
            .borrow()
            .values()
            .map(|user_internal| user_internal.params.clone()) 
            .collect() 
    )
}

#[update]
pub fn delete_user()->std::string::String {
    let caller = caller();
    USER_STORAGE.with(|storage| {
        let mut storage = storage.borrow_mut();
        if let Some(founder) = storage.get_mut(&caller) {
            founder.params.is_active = false; 
            format!("User deactivated for caller: {:?}", caller.to_string())
        } else {
            format!("User is not Registered For This Principal: {:?}", caller.to_string())
        }
    })
}

