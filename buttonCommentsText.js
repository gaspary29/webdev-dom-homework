import { addForm } from "./main.js";
import { initAddCommentListener } from "./initAddCommentListener.js";


export function helpComent(inputNamevalue="",TextComentvalue="") {
  addForm.innerHTML = `<input id="input-name" type="text" value="${inputNamevalue}" class="add-form-name" placeholder="Введите ваше имя" />
      <textarea id="text-coment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4">${TextComentvalue}</textarea>
      <div class="add-form-row">
        <button id="add-button" class="add-form-button">Написать</button>
      </div>`;
  initAddCommentListener();
}
