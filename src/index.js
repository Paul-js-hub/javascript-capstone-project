import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { fetchData, postLikes, updateLikes } from './modules/getShowsList.js';

fetchData();
postLikes();
updateLikes();
