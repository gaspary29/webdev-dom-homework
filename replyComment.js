import { commentators } from "./main.js";
//import { commentators } from "./main.js";

//мои мутки с ответом на коментарий
export const replyComment = () => {
  const TextComent = document.getElementById('text-coment');
  const reponseComment = document.querySelectorAll('.comment');
  reponseComment.forEach((el, index) => {
    el.addEventListener('click', () => {

      TextComent.value = `${commentators[index].comment}\n${commentators[index].name}`;
    });
  });
};
