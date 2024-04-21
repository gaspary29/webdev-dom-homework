const host = 'https://wedev-api.sky.pro/api/v2/belyaev/comments'
const userUrl = "https://wedev-api.sky.pro/api/user/login";
const userUrlReg = "https://wedev-api.sky.pro/api/user";
//const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"

export let token;
export const setToken = (newToken) => {
    token = newToken;
}

export function getComments () { 
    return fetch(host, {method:"GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  }).then ((response) =>{
        if (response.status === 500) { 
            throw new Error("Извините, сервер упал, попробуйте позже") 
        }
        if (response.status === 401) { 
          throw new Error("Нет авторизации")}
        return response.json()
    })
}

export function postComment (name, text) {   
    return fetch(host, {
    method: "POST",
    body: JSON.stringify({
      name,
      text,
    }),
    headers: {
      Authorization:`Bearer ${token}`,
    },
  }).then((response)=>{  
  if (response.status === 400) 
    {
    throw new Error ("Поля ввода имени и текста комментария должны содержать не менее 3 символов в каждом");
  }
  
  if (response.status === 500) 
  { 
    throw new Error("Извините, сервер упал, попробуйте позже");
  }
  return response.json();
  }
  )
}

// ---------- Отправляем POST-запрос на сервер, чтобы зарегистрировать нового пользователя ---
export function register({ login, name, password }) {
  return fetch(userUrlReg, {
      method: "POST",
      body: JSON.stringify({
          login,
          name,
          password,
      }),
  }).then((response) => {
      if (response.status === 201) {
          console.log("регистрация прошла успешно");
          return response.json();
      }
      if (response.status === 400) {
          return Promise.reject("пользователь с таким логином уже существует");
      }
      if (response.status === 500) {
          return Promise.reject("ошибка сервера");
      }
      return Promise.reject("сервер упал");
  })
      .catch((error) => {
          alert(error);
          console.warn(error);
      })
};


// ---------- Отправляем POST-запрос на сервер, чтобы авторизовать пользователя
export function login(login, password) {
  const loginInputElement = document.getElementById('login-input')
  const passwordInputElement = document.getElementById('password-input')
  return fetch(userUrl, {
      method: "POST",
      body: JSON.stringify({
          login: loginInputElement.value,
          password: passwordInputElement.value,
      })
  })
  .then((response) => {
      if (response.status === 201) {
          console.log("вот страница с комментариями и формой");
          return response.json();
      }
      if (response.status === 400) {
          return Promise.reject("вы ввели не верный логин или пароль");
      }
      if (response.status === 500) {
          return Promise.reject("ошибка сервера");
      }
      return Promise.reject("сервер упал");
  })
  .catch((error) => {
      alert(error);
      console.warn(error);
  })
};
