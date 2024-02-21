// * main.js = work on DOM

import { fetchComments } from "./fetch.js";
import { commentCard } from "./dom.js";
let comments = "";
let comment = "";
let body = document.getElementsByTagName("body");
let mainElement = document.createElement("main");
mainElement.classList.add("comments");

// Create comments list
document.addEventListener("DOMContentLoaded", async (e) => {
  comments = await fetchComments();
  comments = comments.comments;
  console.log(typeof comments);

  for (const comment of comments) {
    let newComment = document.createElement("div");
    newComment.innerHTML = commentCard.htmlCommentCard(comment);

    console.log(newComment);
    mainElement.append(newComment);
  }
  body[0].prepend(mainElement);
});

export { comment };
