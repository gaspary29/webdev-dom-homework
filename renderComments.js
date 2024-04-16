import { commentators, ListComent } from "./main.js";
import {  initAddCommentListener } from "./initAddCommentListener.js";
import { initLikeListener } from "./initLikeListener.js";
import { initReplyCommentListener } from "./initReplyCommentListener.js";


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

  ListComent.innerHTML = comentHTML;
  initLikeListener();
  initAddCommentListener();
  initReplyCommentListener();

};
