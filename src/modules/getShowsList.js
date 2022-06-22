import showModalPopup from './popup.js';

const show = document.querySelector('.main-container');
let template = '';

const fetchData = async () => {
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
};

export default fetchData;
