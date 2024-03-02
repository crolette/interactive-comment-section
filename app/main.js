// * main.js = work on DOM

import { fetchComments, fetchCurrentUser } from "./fetch.js";
import { commentCard } from "./dom.js";
let comments = "";
let comment = "";
let currentUser;
let body = document.getElementsByTagName("body");
let mainElement = document.createElement("main");
mainElement.classList.add("comments");

// Create comments list
document.addEventListener("DOMContentLoaded", async (e) => {
  comments = await fetchComments();
  currentUser = await fetchCurrentUser();
  for (const comment of comments) {
    let newComment = document.createElement("div");
    newComment.innerHTML = commentCard.htmlCommentCard(comment);
    mainElement.append(newComment);
  }
  body[0].prepend(mainElement);

  addReplySection();
});

async function addReplySection() {
  let replySection = document.createElement("div");
  replySection.classList.add("comment__card", "answer");
  replySection.id = "form-answer";
  replySection.innerHTML = commentCard.htmlReplySection(currentUser);
  mainElement.append(replySection);
  addEventListenerReply();
}

function addEventListenerReply() {
  let formReply = document.querySelector("#form-comment");

  formReply.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answer = e.target[0].value;
    const answerTime = e.timeStamp;
    let formDiv = document.getElementById("form-answer");
    console.log(formDiv);
    const newComment = await createNewObjectComment(answer, answerTime);
    addAnswer(newComment, formDiv);
  });
}

// function qui crée un nouvel objet de commentaire qu'il faudra insérer dans le JSON
// TODO : Time il faut encore le modifier

async function createNewObjectComment(content, time) {
  let id = getHighestId(comments) + 1;

  const user = currentUser;

  let newComment = {
    id,
    content,
    createdAt: time,
    score: 0,
    user,
    replies: []
  };

  return newComment;
}

async function addAnswer(newComment, formDiv) {
  let answerDiv = document.createElement("div");
  answerDiv.innerHTML = commentCard.htmlCommentCard(newComment);

  formDiv.before(answerDiv);
}

// look after the highest id in the comments
function getHighestId(comments) {
  let idsComments = [];
  comments.filter((elem) => {
    idsComments.push(elem.id);
    if (elem.replies.length > 0) {
      elem.replies.forEach((element) => {
        idsComments.push(element.id);
      });
    }
  });

  return Math.max(...idsComments);
}

// export { comment };
