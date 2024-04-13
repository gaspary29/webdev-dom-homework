import { commentators, ListComent } from "./main.js";
import { buttonComm } from "./buttonComments.js";
import { initEventListernes } from "./initEventListernes.js";
//import { commentators, ListComent, buttonComm } from "./main.js";
//import { initEventListernes } from "./initEventListernes.js";
//


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
  initEventListernes();
  buttonComm();

};
