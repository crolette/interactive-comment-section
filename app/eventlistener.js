import { fetchOneCommentId } from "./fetch.js";
import {
  updateVoteMinus,
  updateVotePlus,
  createNewObjectComment,
  addAnswer,
  comments,
  removeCommentFromCommentslist,
  updateDatasEditedComment,
} from "./main.js";
import {
  closeModale,
  editComment,
  popModale,
  updateComment,
} from "./modale.js";

// TODO Refactoriser cette fonction en 2 sous fonctions
function addEventListenerOnVotes(comment) {
  let minus = comment.querySelector("[data-votes-minus]");
  // console.log(minus.dataset.votesMinus);
  minus.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.dataset.votesMinus;
    updateVoteMinus(id);
  });

  let plus = comment.querySelector("[data-votes-plus]");
  plus.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.dataset.votesPlus;
    updateVotePlus(id);
  });
}

function addEventListenerOnReplies() {
  let repliesButtons = document.querySelectorAll(".reaction__btn--reply");
  repliesButtons.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}

function addEventListenerReply() {
  let formReply = document.querySelector("#form-comment");

  formReply.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answer = e.target[0].value;
    const answerTime = Date.now();
    let formDiv = document.getElementById("form-answer");
    const newComment = await createNewObjectComment(answer, answerTime);
    addAnswer(newComment, formDiv);
  });
}

function addEventListenerOnDeleteButton(element) {
  element.addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault();
    const id = e.target.parentNode.id;
    let commentToDelete = document.querySelector(`[data-commment-id="${id}"]`);
    console.log("eventlistener");
    popModale(commentToDelete, id);
  });
}

function addEventListenerModale(modale, commentToDelete, id) {
  let cancelButton = modale.querySelector("#noDelete");
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeModale(modale);
  });

  let deleteButton = modale.querySelector("#delete");
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeCommentFromCommentslist(id);
    commentToDelete.remove();
    closeModale(modale);
  });
}

function addEventListenerOnEditButton(element) {
  element.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = e.target.parentNode.id;
    let commentContent = await fetchOneCommentId(id);
    let commentToEdit = document.querySelector(`[data-commment-id="${id}"]`);

    editComment(commentToEdit, commentContent, id);
  });
}

function addEventListenerEditAnswer(divComment, id) {
  const replyButton = document.querySelector("#form-comment-reply");

  replyButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const editedComment = e.target[0].value;
    updateDatasEditedComment(editedComment, id);
    updateComment(divComment, editedComment);
  });
}

export {
  addEventListenerModale,
  addEventListenerOnVotes,
  addEventListenerOnReplies,
  addEventListenerReply,
  addEventListenerOnDeleteButton,
  addEventListenerOnEditButton,
  addEventListenerEditAnswer,
};
