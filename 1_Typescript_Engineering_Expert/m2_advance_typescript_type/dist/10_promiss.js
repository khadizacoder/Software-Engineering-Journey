const fetchUser = async () => {
    try {
        const res = await fetch("api/v1/some");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Faild fetch user data ${data.massage}`);
        }
        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("Something went wrong");
        }
    }
};
const userData = fetchUser();
if (userData) {
    console.log(userData.name);
}
export {};
