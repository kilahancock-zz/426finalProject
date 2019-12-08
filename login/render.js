export const renderSite = function() {
    const $root = $('#root');
    renderLogin();
    $root.on("click", "#createAcc", handleCreateButton);
    $root.on("click", "#log", handleLoginButton);
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

                <div class="column">
                <div class="login" id="create">
                            <h1>Create Account!</h1>
                            <form class="create" autocomplete="on">
                            First name: <input id="firstName" type="text"> <br>  
                            Username: <input id="newUser" type="text"><br>
                            Password: <input id="newPass" type="password"><br>
                            GPA: <input id="gpa"type="text"><br><br>
                            <p class="submit"><input type="submit" name="commit" value="Create Account" id="createAcc"></p>
                            </form>
                </div>
                </div>

                <div class="column">
                <div class="login">
                <h1>Login to Web App</h1>
                    <form autocomplete="on">
                    Username: <input id="user" type="text"><br>
                    Password: <input id="pass" type="password"><br>
                    <p class="submit"><input type="button" value="Login" id="log"></p>
              </div>
              
              <div class="login-help">
                <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
              </div>
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