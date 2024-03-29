use ic_cdk::api::call::CallResult;
use candid::Principal;
use ic_cdk::{update, query};
use ic_kit::candid::{candid_method, export_service};

    
type GreetResult = String;

#[update]
#[candid_method(update)]
async fn make_inter_canister_call(name:String)-> CallResult<(GreetResult,)>{
    let result: CallResult<(GreetResult,)> = ic_cdk::call(Principal::from_text("dxfxs-weaaa-aaaaa-qaapa-cai").unwrap(), "greet", (name,)).await;
    result
}

#[query(name = "__get_candid_interface_tmp_hack")]
fn export_candid() -> String {
    export_service!();
    __export_service()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn save_candid() {
        use std::env;
        use std::fs::write;
        use std::path::PathBuf;

        let dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR").unwrap());

        // Directly use dir for the current directory
        let file_path = dir.join("admin_backend.did");
        write(file_path, export_candid()).expect("Write failed.");
    }
}
