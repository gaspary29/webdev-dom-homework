import { renderComents } from "./renderComments.js";
import { getComments as getCommentsAPI } from "./API.js";
import { renderLogin } from "./renderLoginRegistration.js";


export let user = JSON.parse(localStorage.getItem("user"));
export const setUser = (newUser) => {
    user = newUser;
};

export let appElement = document.getElementById("app")
  export let buttonComent = document.getElementById('add-button');
  export let ListComent = document.getElementById('list');
  export let inputName = document.getElementById('input-name');
 export let TextComent = document.getElementById('text-coment');
 export let addForm = document.getElementById('add-form')
  let loaderElement = document.getElementById("loading");

  loaderElement.innerHTML = "Подождите пожалуйста, комментарии загружаются...";
  export function getComment() {
   getCommentsAPI().then((response) => {
        const appComment = response.comments.map((comment) => {
          return {
            name: comment.author.name,
            date: new Date(comment.date).toLocaleTimeString('sm', {
              day: '2-digit',
              month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'
            }),
            comment: comment.text,
            likes: comment.likes,
            isLiked: false,
            isEdited: false,
          };
        })
        commentators = appComment
        renderComents();
      }).then(() => {
   //     buttonComent.disabled = false;
        loaderElement.textContent = "";
      }).catch(() => {
        alert("кажется, что что то пошло ни так, попробуй позже");
      });
    };
  getComment();

  // получить из хранилища данных
  export let commentators = [];
  /// Удалить error при вводе


