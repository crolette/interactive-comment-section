// * fetch.js = CRUD sur le JSON

// const fs = require("fs");
const path = "./data.json";

async function getComments() {
  let datas;
  if (localStorage.getItem("myComments") === null) {
    return (datas = await fetchComments());
  } else {
    return (datas = await retrieveDatas());
  }
}

function retrieveDatas() {
  return JSON.parse(localStorage.getItem("myComments"));
}

async function fetchComments() {
  const reponse = await fetch(path);
  const datas = await reponse.json();
  // add comments to the local storage
  setDatasToStorage(datas.comments);
  return datas.comments;
}

async function fetchOneCommentId(id) {
  const datas = await retrieveDatas();
  let comment = datas.filter((elem) => elem.id == id);
  return comment;
}

// retrieve currentUser from data JSON
async function fetchCurrentUser() {
  const reponse = await fetch(path);
  const datas = await reponse.json();
  const currentUser = datas.currentUser;
  setUserToStorage(currentUser);
  return currentUser;
}

function setDatasToStorage(datas) {
  localStorage.setItem("myComments", JSON.stringify(datas));
}

function setUserToStorage(currentUser) {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

async function addNewComment(newComment) {
  const datas = await retrieveDatas();
  let key = datas.length;
  let i = key;
  datas[i] = newComment;
  setDatasToStorage(datas);
  return datas;
}

export {
  getComments,
  fetchCurrentUser,
  addNewComment,
  setDatasToStorage,
  fetchOneCommentId,
};
