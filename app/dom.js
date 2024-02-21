// * dom.js = stylise le DOM

// Create votes div
const commentCard = {
  htmlCommentCard(comment) {
    return `<div class="comment__card comment" data-commment-id="${comment.id}">
          <div class="card__votes">
            <svg>
              <use href="./images/icons.svg#plus"></use>
            </svg>
            <p class="votes__score">
              ${comment.score}
            </p>
            <svg>
              <use href="./images/icons.svg#minus"></use>
            </svg>
          </div>
        <div class="card__user">
          <img src="${comment.user.image.webp}" alt="">
          <p class="user__name">
            ${comment.user.username} <span class="user__you">
              you
            </span>
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
            <div class="reaction__btn reaction__btn--delete reaction__btn--disable">
                <svg>
                <use href="./images/icons.svg#delete">
                </svg>
              <p>Delete</p>
            </div>
            <div class="reaction__btn reaction__btn--edit reaction__btn--disable ">
                <svg>
                <use href="./images/icons.svg#edit">
                </svg>
              <p>Edit</p>
            </div>
          </div>
      </div>`;
  },
};

export { commentCard };
