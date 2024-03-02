// * fetch.js = CRUD sur le JSON

async function fetchComments() {
  const reponse = await fetch("./data.json");
  const data = await reponse.json();
  const comments = data.comments;
  return comments;
}

// retrieve currentUser from data JSON
async function fetchCurrentUser() {
  const reponse = await fetch("./data.json");
  const data = await reponse.json();
  const currentUser = data.currentUser;
  return currentUser;
}

async function addNewCommentToFile(newComment) {
  const reponse = await fetch("./data.json");
  const data = await reponse.json();
  console.log(data.comments);
}

addNewCommentToFile();

export { fetchComments, fetchCurrentUser };
