// * fetch.js = CRUD sur le JSON

async function fetchComments() {
  const reponse = await fetch("./data.json");
  const comments = await reponse.json();
  console.log("affiche film");
  return comments;
}

export { fetchComments };
