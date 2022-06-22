import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import showModalPopup from './modules/popup';
import { fetchData as getData } from './modules/getShowsList.js';

const btnComments = document.querySelector('.comments');

btnComments.addEventListener('click', event =>{
  console.log("EVENT", event)
  showModalPopup()
});

getData();
