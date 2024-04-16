import { commentators } from "./main.js";

export const initReplyCommentListener = () => {
  const TextComent = document.getElementById('text-coment');
  const reponseComment = document.querySelectorAll('.comment');
  reponseComment.forEach((el, index) => {
    el.addEventListener('click', () => {

      TextComent.value = `${commentators[index].comment}\n${commentators[index].name}`;
    });
  });
};
