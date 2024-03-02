// * fetch.js = CRUD sur le JSON

// const fs = require("fs");
const path = "./data.json";

async function fetchComments() {
  const reponse = await fetch(path);
  const data = await reponse.json();
  const comments = data.comments;
  return comments;
}

// retrieve currentUser from data JSON
async function fetchCurrentUser() {
  const reponse = await fetch(path);
  const data = await reponse.json();
  const currentUser = data.currentUser;
  return currentUser;
}

async function addNewCommentToFile(newComment) {
  const reponse = await fetch(path);
  const data = await reponse.json();
  console.log(data);
  let key = data.comments.length;
  console.log(typeof key);
  let i = key;
  data.comments[i] = newComment;

  writeFile(data);
}

// function to write the new tasks list in the file
function writeFile(comments) {
  try {
    fs.writeFileSync(path, JSON.stringify(comments, null, 2), (file) =>
      console.log(file)
    );
  } catch (error) {
    console.log("An error has occurred ", error);
  }
}

export { fetchComments, fetchCurrentUser, addNewCommentToFile };
