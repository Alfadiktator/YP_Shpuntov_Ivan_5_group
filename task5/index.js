const {logOn} = require('./App');
const initPage = require('./components/logon');

const body = document.body;

body.innerHTML = initPage();
const logOnBlock = document.getElementById('logOnForm');
logOnBlock.addEventListener('submit', logOn);