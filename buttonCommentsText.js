import { addForm } from "./main.js";
import { initAddCommentListener } from "./initAddCommentListener.js";


export function helpComent(inputNamevalue="",TextComentvalue="") {
  let addForm = document.getElementById('add-form')
  addForm.innerHTML = `<input id="input-name" type="text" value="${(localStorage.getItem("name"))}"  class="add-form-name"  disabled/>
      <textarea id="text-coment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4">${TextComentvalue}</textarea>
      <div class="add-form-row">
        <button id="add-button" class="add-form-button">Написать</button>
      </div>`;
  initAddCommentListener();
}
