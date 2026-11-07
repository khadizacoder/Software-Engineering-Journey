// * Type Assertion
const someStatus = "pending";
const showStatus = (ststus) => {
    console.log("Your current application ststus is ", ststus);
};
// showStatus(someStatus)
// showStatus("pending")
showStatus(someStatus);
const config = {
    port: 5500,
};
const currPort = config.port; // null or undifiend hower kono chance na thakle "!" deay override kora jai
// OR
const currentPort = config.port;
//* constant assertion
// readonly hoay gacha bayre thake change kora jabe na
const configuaration = {
    port: 5000,
    prefix: "/api/v1"
};
export {};
