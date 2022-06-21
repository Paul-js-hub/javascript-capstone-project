
const popUpContainer = document.getElementById('staticBackdrop');
let modal = document.querySelector('.modal');
let output = '';
export const showModalPopup = ()=>{
  output = `
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    This discussion has been helpful. Thanks Paul for helping to reveal that the error occurs when you click on the same element again.

    I’ve noticed that nothing happens the first time that you click on an element. That problem occurs because the switch code in the click handler creates a new click handler on the element. Later on when you click on that element again, it triggers the click handler, but it also causes another click handler to also be created.
    This discussion has been helpful. Thanks Paul for helping to reveal that the error occurs when you click on the same element again.

    I’ve noticed that nothing happens the first time that you click on an element. That problem occurs because the switch code in the click handler creates a new click handler on the element. Later on when you click on that element again, it triggers the click handler, but it also causes another click handler to also be created.
    This discussion has been helpful. Thanks Paul for helping to reveal that the error occurs when you click on the same element again.

    I’ve noticed that nothing happens the first time that you click on an element. That problem occurs because the switch code in the click handler creates a new click handler on the element. Later on when you click on that element again, it triggers the click handler, but it also causes another click handler to also be created.
    This discussion has been helpful. Thanks Paul for helping to reveal that the error occurs when you click on the same element again.

    I’ve noticed that nothing happens the first time that you click on an element. That problem occurs because the switch code in the click handler creates a new click handler on the element. Later on when you click on that element again, it triggers the click handler, but it also causes another click handler to also be created.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
    </div>
  </div>
</div>
  `;
popUpContainer.innerHTML = output;

const myModal = new bootstrap.Modal(modal, {
    keyboard: false
});
myModal.show();
}

export default showModalPopup;