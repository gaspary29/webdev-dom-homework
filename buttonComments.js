import { buttonComent, inputName, TextComent, addForm, getComment } from "./main.js";

import { helpComent } from "./buttonCommentsText.js";
import { postTodo } from "./API.js";


export const buttonComm = () => {
 const buttonComent = document.getElementById('add-button');
 const inputName = document.getElementById('input-name');
 const TextComent = document.getElementById('text-coment');
 const addForm = document.getElementById('add-form')
  if (!document.getElementById('add-button')) return;
  buttonComent.addEventListener("click", () => {
    inputName.classList.remove("error");
    if (inputName.value.trim() === "") { inputName.classList.add("error"); return; }
    if (TextComent.value.trim() === "") { TextComent.classList.add("error"); return; }
    buttonComent.disabled = true;
    addForm.innerHTML = "Подождите пожалуйста, комментарии загружаются...";
    return fetch('https://wedev-api.sky.pro/api/v1/belyaev/comments', {
      method: "POST",
      body: JSON.stringify({
        name: inputName.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        text: TextComent.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        forceError: false,
      }),
    }).then((response) => {
      if (response.status === 400) {
        if (buttonComent)
          buttonComent.disabled = false;
        helpComent();
        alert("Поля ввода имени и текста комментария должны содержать не менее 3 символов в каждом");
        return;

      }
      if (response.status === 500) {
        if (buttonComent)
          buttonComent.disabled = false;
        helpComent();
        alert("Извините, сервер упал, попробуйте позже");
        return;

      }
      {
        addForm.innerHTML = `<input id="input-name" type="text" value="" class="add-form-name" placeholder="Введите ваше имя" />
      <textarea id="text-coment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4"></textarea>
      <div class="add-form-row">
        <button id="add-button" class="add-form-button">Написать</button>
      </div>`;
        if (buttonComent)
          buttonComent.disabled = false;
        getComment();
      };
    }
    ).catch((error) => {
      helpComent();
      buttonComent = document.getElementById('add-button');
      if (buttonComent)
        buttonComent.disabled = false;
      alert("кажется, что что то пошло ни так, попробуй позже");
    });
    //TODO отправлять в систему сбора ошибок
    //console.warn(error);
  });
};
