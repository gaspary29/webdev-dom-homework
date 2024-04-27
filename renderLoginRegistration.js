import { login, setToken, token, register } from "./API.js"
import { getComment, setUser} from "./main.js"


export const renderLogin = () => {
    const appElement = document.getElementById("app");
    const loginHtml = `
    <div class="container">
    <div id="log-form" class="add-form">
      <h3>Форма входа</h3>
      <input type="text" id="login-input" class="form-name" placeholder="Введите логин" />
      <input type="password" id="password-input" class="form-password" placeholder="Введите пароль" />
      <div class="add-form-row">
        <button id="log-button" class="log-form-button">Войти</button>
      </div>
      <a id="reg-button" class="log"  href="#">Зарегистрироваться</a>
    </div>
  </div>
    `;

    appElement.innerHTML = loginHtml;

    const buttonElement = document.getElementById('log-button')
    const loginInputElement = document.getElementById('login-input')
    const passwordInputElement = document.getElementById('password-input')

    buttonElement.addEventListener('click', () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            localStorage.setItem("token", responseData.user.token);
            localStorage.setItem("user", JSON.stringify(responseData.user.name));

            setToken(responseData.user.token);
            setUser(responseData.user.name);
        }).then(() => {
            getComment();
        }).catch((error) => {
            console.warn(error);
        })
    })

    const regButtonElement = document.getElementById("reg-button");
    regButtonElement.addEventListener("click", () => {
        renderEntry();
    });
};

export const renderEntry = () => {
    const appElement = document.getElementById("app");
    const loginHtml = `
    <div class="container">
        <div id="log-form" class="add-form">
          <h3>Форма регистрации</h3>
          <input type="text" id="name-input" class="form-name-name" placeholder="Введите имя" />
          <input type="text" id="login-input" class="form-name-login" placeholder="Введите логин" />
          <input type="password" id="password-input" class="form-password" placeholder="Введите пароль" />
          <div class="add-form-row">
            <button id="reg-button" class="log-form-button">Зарегистрироваться</button>
          </div>
          <a id="log-button" class="log" href="#">Войти</a>
        </div>
      </div>
        `;
    appElement.innerHTML = loginHtml;



    const regButtonElement = document.getElementById("reg-button");
    const loginInputElement = document.getElementById('login-input')
    const passwordInputElement = document.getElementById('password-input')
    const nameInputElement = document.getElementById("name-input");

    regButtonElement.addEventListener("click", () => {
        localStorage.setItem('name', nameInputElement.value)
        if (!loginInputElement.value || !passwordInputElement.value || !nameInputElement.value) {
            alert("Проверьте заполнены ли поля");
            return
        }
        register({
            name: nameInputElement.value,
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            localStorage.setItem("token", responseData.user.token);
            localStorage.setItem("user", JSON.stringify(responseData.user.name));

            setToken(responseData.user.token);
            setUser(responseData.user.name);
        }).then(() => {
            getComment();
        }).catch((error) => {
            console.warn(error);
        })
    });

    const logButtonElement = document.getElementById("log-button");
    logButtonElement.addEventListener("click", () => {
        renderLogin();
    });
};
