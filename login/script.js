//create new account 
// ---- add more parameters depending on what other informtion we ask the user to provide
async function createAccount (username, password) {
    try {
        let newAcc = await  axios ({
            method: 'post',
            url: "http://localhost:3000/account/create",
            name: username,
            pass: password,
        });
        console.log(newAcc.data);
    } catch (error) {
        console.log("error creating account");
    }
};
