// * main.js = work on DOM

import {
  addNewComment,
  getComments,
  fetchCurrentUser,
  setDatasToStorage,
} from "./fetch.js";
import { commentCard } from "./dom.js";
import {
  addEventListenerOnReplies,
  addEventListenerReply,
  addEventListenerOnVotes,
  addEventListenerOnDeleteButton,
  addEventListenerOnEditButton,
} from "./eventlistener.js";
let comments = "";
let currentUser;
let body = document.getElementsByTagName("body");
let mainElement = document.createElement("main");
mainElement.classList.add("comments");
mainElement.setAttribute("id", "main-section");

// Create comments list
document.addEventListener("DOMContentLoaded", async (e) => {
  comments = await getComments();
  currentUser = await fetchCurrentUser();
  displayComments(comments);
});

function displayComments(comments) {
  for (const comment of comments) {
    let newComment = createCommentDiv(comment);
    addEventListenerOnVotes(newComment);
    if (currentUser.username == comment.user.username) {
      newComment = addYouTag(newComment);
      enableReactionButtons(newComment);
    }
    mainElement.append(newComment);
  }
  body[0].prepend(mainElement);
  addReplySection();
  addEventListenerOnReplies();
}

// To ad in the displayComments if currentUser = user__name
function addYouTag(newComment) {
  let currentUserDiv = newComment.querySelector(".user__name");
  const spanYou = createYouTagSpan();
  newComment.insertAdjacentElement("beforeend", spanYou);
  currentUserDiv.append(spanYou);
  return newComment;
}

function createYouTagSpan() {
  const spanYou = document.createElement("span");
  spanYou.classList.add("user__you");
  spanYou.innerText = "you";
  return spanYou;
}

// Clear the main before display again the comments
function clearMain() {
  console.log("clearmain");
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
}

// toggle class reactions "delete" - "edit" buttons if user == currentUser
function enableReactionButtons(newComment) {
  let reactions = newComment.querySelectorAll(".reaction__btn");
  reactions.forEach((elem) => {
    elem.classList.toggle("reaction__btn--disable");
    if (elem.classList.contains("reaction__btn--delete"))
      addEventListenerOnDeleteButton(elem);
    if (elem.classList.contains("reaction__btn--edit"))
      addEventListenerOnEditButton(elem);
  });
}

async function addReplySection() {
  let replySection = document.createElement("div");
  replySection.classList.add("comment__card", "answer");
  replySection.id = "form-answer";
  replySection.innerHTML = commentCard.htmlReplySection(currentUser);
  mainElement.append(replySection);
  addEventListenerReply();
}

// function qui crée un nouvel objet de commentaire qu'il faudra insérer dans le JSON
// TODO : Time il faut encore le modifier

function createDateComment(answerTime) {
  let pastDate = new Date("August 19, 1975 23:15:30");
  let today = new Date();
  let difference = today - pastDate;
}

createDateComment(new Date());

async function createNewObjectComment(content, time) {
  let id = getHighestId(comments) + 1;

  const user = currentUser;

  let newComment = {
    id,
    content,
    createdAt: time,
    score: 0,
    user,
    replies: [],
  };

  return newComment;
}

function createCommentDiv(comment) {
  let newComment = document.createElement("div");
  newComment.classList.add("comment__card", "comment");
  newComment.setAttribute(`data-commment-id`, comment.id);
  newComment.innerHTML = commentCard.htmlCommentCard(comment);

  return newComment;
}

async function addAnswer(newComment, formDiv) {
  let answerDiv = createCommentDiv(newComment);
  addYouTag(answerDiv);
  addEventListenerOnVotes(answerDiv);
  addEventListenerOnDeleteButton(answerDiv);
  enableReactionButtons(answerDiv);
  formDiv.before(answerDiv);
  comments = await addNewComment(newComment);

  // displayComments(comments);
}

// look after the highest id in the comments/replies
function getHighestId(comments) {
  let maxId = 0;
  comments.forEach((elem) => {
    if (elem.id > maxId) maxId = elem.id;
    if (elem.replies.length > 0) {
      elem.replies.forEach((reply) => {
        if (reply.id > maxId) maxId = reply.id;
      });
    }
  });

  // return Math.max(...idsComments);
  return maxId;
}

function updateVoteMinus(id) {
  comments.map((elem) => {
    if (elem.id == id && elem.score == 0) {
      elem.score;
    } else if (elem.id == id && elem.score > 0) {
      elem.score--;
      setDatasToStorage(comments);
      clearMain();
      displayComments(comments);
    }
  });
}

function updateVotePlus(id) {
  comments.map((elem) => {
    if (elem.id == id) {
      elem.score++;
      setDatasToStorage(comments);
      clearMain();
      displayComments(comments);
    }
  });
}

function removeCommentFromCommentslist(id) {
  comments = comments.filter((elem) => {
    if (elem.id != id) return true;
    if (elem.replies.length > 0) {
      elem.replies.filter((reply) => {
        if (reply.id != id) return true;
      });
    }
  });
  setDatasToStorage(comments);
}

function updateDatasEditedComment(editedComment, id) {
  comments.map((elem) => {
    if (elem.id == id) {
      elem.content = editedComment;
    }
  });
  setDatasToStorage(comments);
}

// export { comment };
export {
  updateVoteMinus,
  updateVotePlus,
  createNewObjectComment,
  addAnswer,
  comments,
  removeCommentFromCommentslist,
  updateDatasEditedComment,
};
