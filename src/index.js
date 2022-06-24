import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import fetchData from "./modules/getShowsList.js";
import addComment from "./modules/addComment.js";

fetchData();

let modal = document.querySelector(".modal");
modal.addEventListener("submit", (e) => {
  e.preventDefault();
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
  let username = document.getElementById("name").value;
  let comment = document.getElementById("textarea").value;
  const id = document.querySelector(".hidden").value;
  let commentList = document.querySelector(".comments-list");
  commentList.childNodes[0].innerHTML = `Comments (${commentList.childNodes.length})`;
  const li = document.createElement("li");
  li.innerText = `${today} ${username}: ${comment}`;
  commentList.appendChild(li);
  addComment(id, username, comment);
  document.querySelector(".needs-validation").reset();
});
