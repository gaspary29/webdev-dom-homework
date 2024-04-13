import { commentators } from "./main.js";
import { renderComents } from "./renderComments.js";
import { replyComment } from "./replyComment.js";
//import { commentators } from "./main.js";
//import { renderComents } from "./renderComments.js";
//import { replyComment } from "./replyComment.js";

export const initEventListernes = () => {
  const LikeComents = document.querySelectorAll('.like-button');

  for (const LikeComent of LikeComents) {
    const index = LikeComent.dataset.index;
    const counter = LikeComent.dataset.like;
    LikeComent.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      if (commentators[index].isLiked === false) {
        const result = commentators[index].likes + 1;
        commentators[index].likes = result;
        commentators[index].isLiked = true;
      }
      else if (commentators[index].isLiked === true) {
        const result = commentators[index].likes - 1;
        commentators[index].likes = result;
        commentators[index].isLiked = false;
      };
      renderComents();
      replyComment();
    });
  }
};

