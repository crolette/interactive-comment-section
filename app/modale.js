import { commentCard } from "./dom.js";
import {
  addEventListenerEditAnswer,
  addEventListenerModale,
} from "./eventlistener.js";

function popModale(commentToDelete, id) {
  const noDel = document.getElementById("noDelete");
  if (noDel == null) {
    let modale = document.createElement("div");
    modale.classList.add("modale__container");
    modale.innerHTML = commentCard.htmlModale();
    let main = document.getElementById("main-section");
    main.prepend(modale);
    addEventListenerModale(modale, commentToDelete, id);
  }
}

function closeModale() {
  let modale = document.getElementsByClassName("modale__container");
  console.log(modale);
  modale[0].remove();
}

function editComment(commentToEdit, commentContent, id) {
  let content = commentContent[0].content;
  let divComment = commentToEdit.querySelector(".card__comment");

  let divCommentEdit = document.createElement("div");
  divCommentEdit.innerHTML = commentCard.htmlEditComment(content);
  let divCommentParagraph = divComment.firstElementChild;
  divCommentParagraph.replaceWith(divCommentEdit);
  addEventListenerEditAnswer(divComment, id);
}

function updateComment(divComment, content) {
  console.log(divComment);
  console.log(content);
  let divCommentParagraph = divComment.firstElementChild;
  let paragraphContent = document.createElement("p");
  paragraphContent.innerText = content;
  divCommentParagraph.replaceWith(paragraphContent);
}

export { popModale, closeModale, editComment, updateComment };
