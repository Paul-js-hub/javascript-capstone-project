import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { postLikes, fetchData, updateLikes } from './modules/getShowsList.js';

const render = async () => {
  fetchData();
  postLikes();
  updateLikes();
};

render();
