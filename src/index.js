import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  postLikes, fetchData, updateLikes, postComment,
} from './modules/getShowsList.js';

fetchData();
postComment();
postLikes();
updateLikes();
