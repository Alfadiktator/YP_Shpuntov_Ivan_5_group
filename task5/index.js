const { PhotoArr, PhotoPost } = require('./PostLogic');
const { filter, like, logOn,addPhotoPostToDOM ,userMenu} = require('./App');
const initPage = require('./components/logon');
const userStore = require('./resources/UserStore');
const body = document.body;

//body.innerHTML = initPage();

const localStore = {
    username: "Galante",
};

//const logOnBlock = document.getElementById('logOnForm');
//logOnBlock.addEventListener('submit', logOn);

document.getElementById("globalUserName").innerHTML = localStore.username;
document.getElementById("userMenuTitle").innerHTML=localStore.username;
let photoPosts = new PhotoArr();
photoPosts.addPhotoPost(new PhotoPost('Alfa_di', '2018-02-23T23:02:42', 'Hello', '#space', 'https://www.nasa.gov/sites/default/files/blackhole_2.jpg', '1'));
photoPosts.addPhotoPost(new PhotoPost('TayVerde', '2018-02-23T22:01:40', 'For the future', '#space#love#welcome2103', 'https://www.nasa.gov/sites/default/files/cygx1_ill.jpg', '2'));
console.log(photoPosts);
photoPosts.addPhotoPost(new PhotoPost('Galante', '2018-02-23T22:01:40', 'For the future', '#boom#supernova', 'https://tribesofcreation.files.wordpress.com/2010/03/grand_universe_by_antifan_real1.jpg', '2'));
photoPosts.getPhotoPosts().map((el)=>{
    addPhotoPostToDOM(el,localStore.username);
    return;
})

let b = document.getElementsByClassName("filter-info")[0];
let a = document.getElementsByClassName("search-btn")[0];
let d = document.getElementsByClassName("like-btn");
let c = document.getElementsByClassName("menu-btn")[0];
c.addEventListener("click",userMenu);
a.addEventListener("click", filter);
for (let i = 0; i < d.length; i++) {
    d[i].setAttribute("like", "0");
    d[i].addEventListener("click", like);
}