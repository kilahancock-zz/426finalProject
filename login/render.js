export const renderSite = function() {
    const $root = $('#root');
    renderLogin();
    $root.on("click", "#fuck", handleCreateButton);
    $root.on("click", "#leggo", handleLoginButton);
}
export async function renderLogin() {
    const $root = $('#root');

    let login = `
        <div class="container">
            <div class="row">
                <h1 class="title">Hot or Not? UNC Computer Science Edition</h1><br>
                <h4 align="center">Swipe left or right on a class, or comment about your experience!</h4>
            </div>
        </div>

                <div class="container" id="create">
                            <h4>Create Account!</h4>
                            <form class="create" autocomplete="on">
                            First name: <input id="firstName" type="text"> <br>  
                            Username: <input id="newUser" type="text"><br>
                            Password: <input id="newPass" type="password"><br>
                            GPA: <input type="text"id="gpa"><br><br>
                            <button type="button" id="fuck">Create Account!</button>
                            </form>
                </div>

                <div class="container" id="login">
                    <h4>Sign in to begin!</h4>
                    <form class="login" autocomplete="on">
                        Username: <input id="user" type="text"><br><br>
                        Password: <input id="pass" type="password"><br><br>
                        <button type="button" id="leggo">Let's go!</button>
                    </form>
                </div>`;
   
 $root.append(login);
}

export async function handleCreateButton(event) {
    let $firstname = document.getElementById("firstName").value;
    let $username = document.getElementById("newUser").value;
    let $password = document.getElementById("newPass").value;
    let $gpa = document.getElementById("gpa").value;
    const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/account/create',
        data: {
            "name": $username,
            "pass": $password,
            "data": {
                "firstname": $firstname, 
                "gpa": $gpa
            },
          },
      });
}
export async function handleLoginButton(event) {
    let $username = document.getElementById("user").value;
    let $password = document.getElementById("pass").value;
    try {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:3000/account/login',
        data: {
            "name": $username,
            "pass": $password,
            },
      });
    } catch (error) {
        alert(response.resp);
    } 
   window.location.href = '../app';
}
$(function () {
    renderSite(); 
    }); 