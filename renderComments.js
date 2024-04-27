import { commentators, appElement, user } from "./main.js";
import {  initAddCommentListener } from "./initAddCommentListener.js";
import { initLikeListener } from "./initLikeListener.js";
import { initReplyCommentListener } from "./initReplyCommentListener.js";
import { token } from "./API.js";
import { renderLogin } from "./renderLoginRegistration.js";
//format(new Date(comment.date),"yyyy-MM-dd hh.mm.ss"),
export const renderComents = () => {

  const comentHTML = commentators.map((commentator, index) => {
    return `<li class="comment">
        <div class="comment-header">
          <div>${commentator.name}</div>
          <div>${commentator.date}</div>
        </div>
        <div data-text="${commentator.comment}" class="comment-body">
          <div class="comment-text">
            ${commentator.comment}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${commentator.likes}</span>
            <button data-like="${commentator.likes}" data-index="${index}" class="like-button 
            ${commentators[index].isLiked ? '-active-like' : ''}"></button>
          </div>
        </div>
      </li>`;
  }).join("");

  const formHtml = (user) => {
    if (!token) {
      return btnLogin
    } else {
      return `
      <div class="add-form" id="add-form">
      <input id="input-name" type="text" value="${(localStorage.getItem("name"))}"  class="add-form-name"  disabled/>
      <textarea id="text-coment" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
        rows="4"></textarea>
      <div class="add-form-row">
        <button id="add-button" class="add-form-button">Написать</button>
      </div>
    </div> `};
  }
  const btnLogin = `
  <p class="auth">  Чтобы добавить комментарий, <u>авторизуйтесь</u> </p>
  `


const appHtml = `
  <div class="container">
    <ul id="list" class="comments">${comentHTML}</ul>
    ${formHtml(user)}
  </div>
    `;
  appElement.innerHTML = appHtml;

  initLikeListener();
  initReplyCommentListener();
  autorization();
  function autorization() {
    if (token) return
    const authBtn = document.querySelector(".auth")
    authBtn.addEventListener('click', () => {
      renderLogin();
    })
  }
  initAddCommentListener ();
};

  

  