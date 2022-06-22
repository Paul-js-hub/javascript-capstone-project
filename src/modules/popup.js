import { Modal } from 'bootstrap';

const popUpContainer = document.getElementById('staticBackdrop');
const modal = document.querySelector('.modal');
let output = '';
const showModalPopup = async (id) => {
  const showResponse = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const showData = await showResponse.json();
  output = `
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">${showData.name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="popup-image col-sm-12">
      <img src=${showData.image.medium} id="staticBackdropLabel" alt="Girls Image">
      <div class="subtitles">
        <div class="subtitles-container">
        <p><b>Language</b>:<span>${showData.language}</span></p>
        <p><b>Premiered</b>:<span>${showData.premiered === null ? 'Not Available' : showData.premiered}</span></p>
        <p><b>Type</b>:<span>${showData.type}</span></p>
        <p><b>Rating</b>:<span>${showData.rating.average === null ? 'Not Available' : showData.rating.average}</span></p>
        </div>
        <p><b>Summary</b>:<span>${showData.summary === null ? 'Not Available' : showData.summary}</span></p>
      </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
    </div>
  </div>
</div>
  `;
  popUpContainer.innerHTML = output;

  const myModal = new Modal(modal, {
    keyboard: false,
  });
  myModal.show();
};

export default showModalPopup;