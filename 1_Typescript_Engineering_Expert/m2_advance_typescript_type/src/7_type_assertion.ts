// * Type Assertion

// * "as" syntsx

// type Status = "pending" | "approved" | "rejected" | string; // string dawa jabe na
type Status = "pending" | "approved" | "rejected"
const someStatus : string = "pending";

const showStatus = (ststus : Status) => {
    console.log("Your current application ststus is ", ststus)
}
// showStatus(someStatus)
// showStatus("pending")
showStatus(someStatus as Status)


// * non-null assertion

interface Config {
    port ? : number;
}

const config : Config = {
    port : 5500,
}

const currPort : number = config.port!; // null or undifiend hower kono chance na thakle "!" deay override kora jai
// OR
const currentPort : number = config.port as number;


//* constant assertion

// readonly hoay gacha bayre thake change kora jabe na
const configuaration = {
    port : 5000,
    prefix : "/api/v1"
} as const;

