/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-await-in-loop */

const InvolvementApiKey = 'oWfus23KNVDBoOzs2EjU';

async function postLike(id) {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes/`;

  const data = {
    item_id: id,
  };

  const param = {

    method: 'Post',

    headers: {

      'content-type': 'application/json;charset = UTF-8',

    },

    body: JSON.stringify(data),

  };

  const sendRequest = await fetch(url, param);
  const response = await sendRequest.text();
  return response;
}

async function getLikes(itemId) {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${InvolvementApiKey}/likes`);
  const data = await response.json();
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].item_id === itemId) {
      return data[i].likes;
    }
  }
  // return data;
}

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
      <i id="${res.show.id}" class="fa fa-heart" aria-hidden="true"></i>
     </div>
      <span  class="likes">Likes</span>
      <div class="btn-container">
        <a href="#" class="btn btn-1">Comments</a>
      </div>
    </div>
</div>
</li>
        `;
    show.innerHTML = template;
  });

  // event listener to post a like
  document.querySelectorAll('.fa-heart').forEach((item) => {
    item.addEventListener('click', () => {
      postLike(item.id).then((data) => {
        console.log('data from server: ', data);
      });

      getLikes(item.id).then((result) => {
        document.getElementById(`p${item.id}`).innerText = parseInt(result) + 1;
      });
    });
  });
};

export default fetchData;
