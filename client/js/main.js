import { getNode } from './main_page/index.js'

window.onload = function () {
  getNode('.close_popup').onclick = function () {
      getNode('#modal').style.display = "none"
  };
};