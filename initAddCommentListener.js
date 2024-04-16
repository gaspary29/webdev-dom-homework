import { buttonComent, inputName, TextComent, addForm, getComment } from "./main.js";

import { helpComent } from "./buttonCommentsText.js";
import { postComment } from "./API.js";



export const initAddCommentListener = () => {
 const buttonComent = document.getElementById('add-button');
 const inputName = document.getElementById('input-name');
 const TextComent = document.getElementById('text-coment');
   let addForm = document.getElementById('add-form')
  if (!document.getElementById('add-button')) return;
  buttonComent.addEventListener("click", () => {
    inputName.classList.remove("error");
    if (inputName.value.trim() === "") { inputName.classList.add("error"); return; }
    if (TextComent.value.trim() === "") { TextComent.classList.add("error"); return; }
    buttonComent.disabled = true;
    addForm.innerHTML = "Подождите пожалуйста, комментарии загружаются...";
postComment(inputName.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
TextComent.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'))
.then((response) => {
 helpComent();
        if (buttonComent)
          buttonComent.disabled = false;
        getComment();
    }
    ).catch((error) => {
      if (error.message === "Поля ввода имени и текста комментария должны содержать не менее 3 символов в каждом") 
      {
        if (buttonComent)
        buttonComent.disabled = false;
        helpComent(inputName.value,TextComent.value);
        alert('Поля ввода имени и текста комментария должны содержать не менее 3 символов в каждом');
    };
    if (error.message === "Извините, сервер упал, попробуйте позже") 
    { if (buttonComent)
      buttonComent.disabled = false;
      helpComent(inputName.value,TextComent.value);
      alert('Извините, сервер упал, попробуйте позже');
  };  
  if (error.message === 'Failed to fetch') {   
    helpComent(inputName.value,TextComent.value);
    if (buttonComent)
      buttonComent.disabled = false;
    alert("Кажется что-то пошло не так, попробуйте позже");
};
  
    });
    //TODO отправлять в систему сбора ошибок
    //console.warn(error);
  });
};
