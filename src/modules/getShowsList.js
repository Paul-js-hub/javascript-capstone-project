import showModalPopup from './popup.js';
import addComment from './addComment.js';

const show = document.querySelector('.main-container');
let template = '';

export const fetchData = async () => {
  const data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const result = await data.json();
  result.map((res) => {
    template += `
  <li id="${res.show.id}" class="col-sm mt-3">
   <div class="card" style="width: 18rem;">
    <img src="${res.show.image.medium}" class="card-img-top" alt="Girls Image">
    <div class="card-body">
     <div class="space">
      <h5 class="card-title">${res.show.name}</h5>
      <i class="fa fa-heart" aria-hidden="true"></i>
     </div>
      <p  class="like">likes</p>
      <div class="btn-container">
        <button class="btn btn-1 comments">Comments</button>
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
