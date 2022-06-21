import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import showModalPopup from './modules/popup';

const btnComments = document.querySelector('.comments');

btnComments.addEventListener('click', event =>{
  console.log("EVENT", event)
  showModalPopup()
});

