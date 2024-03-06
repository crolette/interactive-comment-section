// * dom.js = stylise le DOM

// Create votes div
const commentCard = {
  htmlCommentCard(comment) {
    return `<div class="card__votes">
            <svg>
              <use href="./images/icons.svg#plus" data-votes-plus="${comment.id}"></use>
            </svg>
            <p class="votes__score">
              ${comment.score}
            </p>
            <svg>
              <use href="./images/icons.svg#minus" data-votes-minus="${comment.id}"></use>
            </svg>
          </div>
        <div class="card__user">
          <img src="${comment.user.image.webp}" alt="">
          <p class="user__name">
            ${comment.user.username}
          </p>
          <p class="user__date">
            ${comment.createdAt}
          </p>
        </div>
        <div class="card__comment">
          <p>
            ${comment.content}
          </p>
        </div>
          <div class="card__reaction">
            <div class="reaction__btn reaction__btn--reply">
              <svg>
              <use href="./images/icons.svg#reply">
              </svg>
              <p>Reply</p>
            </div>
            <div class="reaction__btn reaction__btn--delete reaction__btn--disable" id="${comment.id}">
                <svg>
                <use href="./images/icons.svg#delete">
                </svg>
              <p>Delete</p>
            </div>
            <div class="reaction__btn reaction__btn--edit reaction__btn--disable" id="${comment.id}">
                <svg>
                <use href="./images/icons.svg#edit">
                </svg>
              <p>Edit</p>
            </div>
          </div>`;
  },
  htmlReplySection(currentUser) {
    return `
    <!-- ADD A NEW COMMENT -->
        <div class="answer__picture">
          <img src="${currentUser.image.webp}" alt="${currentUser.username} picture">
        </div>
        <div class="answer__textarea">
          <form action="" id="form-comment">

            <textarea name="comment-answer" id="comment-answer" rows="3" placeholder="Add a comment..."></textarea>
          </form>
        </div>
        <div class="answer__button">
          <input type="submit" value="SEND" form="form-comment">
        </div>
      `;
  },
  htmlModale() {
    return `<div class="modale__content">
          <h2>Delete Comment</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            suscipit saepe quam voluptas rerum necessitatibus numquam,
            distinctio reiciendis fugiat facilis.
          </p>
          <div class="modale__buttons">
            <button class="" id="noDelete">
              NO, CANCEL
            </button>
            <button class="modale__buttons--delete" id="delete">
              YES, DELETE
            </button>
          </div>
        </div>`;
  },
  htmlEditComment(content) {
    return `
              <div class="comment__edit">
            <div class="answer__textarea">
             <form action="" id="form-comment-reply">
              <textarea name="comment-reply" id="comment-reply" rows="3" placeholder="Edit your answer...">${content}</textarea>
             </form>
            </div>
            <div class="answer__button">
              <input type="submit" value="REPLY" form="form-comment-reply">
            </div>
          </div>`;
  },
};

export { commentCard };
