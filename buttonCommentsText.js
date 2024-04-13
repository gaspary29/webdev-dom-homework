import { addForm, inputName, TextComent, buttonComent } from "./main.js";
import { buttonComm } from "./buttonComments.js";
//import { addForm, inputName, TextComent, buttonComent, buttonComm } from "./main.js";


export function helpComent() {
  addForm.innerHTML = `<input id="input-name" type="text" value="${inputName.value}" class="add-form-name" placeholder="Введите ваше имя" />
      <textarea id="text-coment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4">${TextComent.value}</textarea>
      <div class="add-form-row">
        <button id="add-button" class="add-form-button">Написать</button>
      </div>`;
  buttonComm();
}
