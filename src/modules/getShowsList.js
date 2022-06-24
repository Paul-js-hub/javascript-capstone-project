import LikeObj from './apiObject.js';
import Utilities from './utils.js';
import showModalPopup from './popup.js';
import addComment from './addComment.js';
import { displayItemCounted } from './counter.js';

const InvolvementApiKey = 'oWfus23KNVDBoOzs2EjU';

// const appIDLikes = `${Utilities.baseUrl}apps/st5awnig42N9i1c9g8rb/likes`;

const appIDLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes`;

const fetchLikes = async (appIDLikes) => {
  const response = await fetch(appIDLikes);
  const result = response.json();
  return result;
};

const show = document.querySelector('.main-container');
let template = '';

const fetchData = async () => {
  const data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const result = await data.json();
  result.map((res, index) => {
    template += `
  <li id="${res.show.id}" class="col-sm mt-3">
   <div class="card" style="width: 18rem;">
    <img src="${res.show.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
     <div class="space">
      <h5 class="card-title">${res.show.name}</h5>
      <i data-id=${index} class="heart fa fa-heart" aria-hidden="true"></i>
     </div>
      <span  class="likes">Likes</span>
      <div class="btn-container">
        <a href="#" class="btn btn-1 comments">Comments</a>
      </div>
    </div>
</div>
</li>
        `;
    show.innerHTML = template;
  });
  const btnComments = document.querySelectorAll('.comments');
  btnComments.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const showId = e.target.parentNode.parentNode.parentNode.parentNode.id;
      showModalPopup(showId);
    });
  });
  displayItemCounted(result);
};

const updateLikes = async () => {
  fetchLikes(appIDLikes).then((response) => response).then((response) => {
    const keys = Object.keys(response);
    keys.forEach((key) => {
      const likes = document.querySelectorAll('.likes');
      [...likes].forEach((item) => {
        const showID = parseInt(
          item.previousElementSibling.lastElementChild.getAttribute(
            'data-id',
          ),
          10,
        );
        if (response[key].item_id === showID) {
          item.innerText = `${response[key].likes} Likes`;
          if (response[key].likes > 0) {
            item.previousElementSibling.lastElementChild.classList.add('red');
          }
        }
      });
    });
  });
};

const postLikes = async () => {
  const data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const result = await data.json();
  const clickLikes = document.querySelectorAll('.heart');
  const likeObj = new LikeObj();
  if (result.length !== 0) {
    [...clickLikes].forEach((res) => {
      res.addEventListener('click', (e) => {
        likeObj.item_id = parseInt(e.target.getAttribute('data-id'), 10);
        fetch(appIDLikes, {
          method: 'POST',
          body: JSON.stringify(likeObj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        const totalLikes = e.target.parentElement.nextElementSibling;
        fetchLikes(appIDLikes)
          .then((response) => response)
          .then((response) => {
            const keys = Object.keys(response);
            keys.forEach((key) => {
              if (response[key].item_id === likeObj.item_id) {
                totalLikes.innerText = `${response[key].likes} Likes`;
              }
            });
          });
      });
    });
  }
};

export const postComment = () => {
  const modal = document.querySelector('.modal');
  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    const username = document.getElementById('name').value;
    const comment = document.getElementById('textarea').value;
    const id = document.querySelector('.hidden').value;
    const commentList = document.querySelector('.comments-list');
    commentList.childNodes[0].innerHTML = `Comments (${commentList.childNodes.length})`;
    const li = document.createElement('li');
    li.innerText = `${today} ${username}: ${comment}`;
    commentList.appendChild(li);
    addComment(id, username, comment);
    document.querySelector('.needs-validation').reset();
  });
};

export {
  updateLikes,
  postLikes,
  fetchData,
};
