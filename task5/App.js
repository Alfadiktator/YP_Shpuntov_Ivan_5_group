const imageBlock = require('./components/ImageBox');
const localStore = require('./LocalStore');
const MAINPAGE = require('./components/MainPage');
const { PhotoPost } = require('./PostLogic');
const userStore = require('./resources/UserStore');

function logOn(event) {
    event.preventDefault();
    localStore.username = document.getElementById("inputNickname").value;
    localStore.password = document.getElementById("inputPassword").value;
    console.log(localStore);
    document.body.innerHTML = MAINPAGE;

    document.getElementById("globalUserName").innerHTML = localStore.username;
    document.getElementById("userMenuTitle").innerHTML = localStore.username;
    localStore.photoPosts.addPhotoPost(new PhotoPost('Alfa_di', '2018-02-23T23:02:42', 'Hello', '#space', 'https://www.nasa.gov/sites/default/files/blackhole_2.jpg', '1'));
    localStore.photoPosts.addPhotoPost(new PhotoPost('Q', '2018-02-23T22:01:40', 'For the future', '#space#love#welcome2103', 'https://www.nasa.gov/sites/default/files/cygx1_ill.jpg', '2'));
    console.log(localStore.photoPosts);
    localStore.photoPosts.addPhotoPost(new PhotoPost('Galante', '2018-02-23T22:01:40', 'For the future', '#boom#supernova', 'https://tribesofcreation.files.wordpress.com/2010/03/grand_universe_by_antifan_real1.jpg', '3'));
    localStore.photoPosts.getPhotoPosts().map((el) => {
        addPhotoPostToDOM(el, localStore.username);
        return;
    })

    let b = document.getElementsByClassName("filter-info")[0];
    let a = document.getElementsByClassName("search-btn")[0];
    let d = document.getElementsByClassName("like-btn");
    let c = document.getElementsByClassName("menu-btn")[0];
    let f = document.getElementsByClassName("edit-btn");
    let g = document.getElementsByClassName("delete-btn");

    c.addEventListener("click", userMenu);
    a.addEventListener("click", filter);

    for (let i = 0; i < d.length; i++) {
        d[i].setAttribute("like", "0");
        d[i].addEventListener("click", like);
    }
    for (let i = 0; i < f.length; i++) {
        f[i].addEventListener("click", editPost);
    }
    for (let i = 0; i < g.length; i++) {
        g[i].addEventListener("click", deletePost);
    }
}

function like(e) {
    e.preventDefault();
    const ind = e.currentTarget.getAttribute("ind");
    const arr = document.getElementsByClassName("like-count");
    const counter = e.currentTarget.parentNode.children[2];
    const elem = localStore.photoPosts.arr.find((e) => e.id === ind);
    console.log(elem);
    if (e.target.getAttribute("like") === "0") {
        e.target.src = "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png";
        e.target.setAttribute("like", "1");
        elem.arrLiker.push(localStore.username);
        counter.innerHTML = `<b class="like-count">${(Number.parseInt(counter.innerHTML.match(/>\d+/)[0].substring(1)) + 1)}</b>`;
    }
    else {
        e.target.src = "http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Like-icon.png";
        e.target.setAttribute("like", "0");
        elem.arrLiker.splice(elem.arrLiker.indexOf(localStore.username), 1);
        counter.innerHTML = `<b class="like-count">${(Number.parseInt(counter.innerHTML.match(/>\d+/)[0].substring(1)) - 1)}</b>`;
    }
}

function filter(e) {
    e.preventDefault();
    const elem = document.getElementById('filterBlock');
    if (elem.style.display === 'grid') {
        elem.style.display = 'none';
    }
    else {
        elem.style.display = 'grid';
    }
}

function userMenu(e) {
    e.preventDefault();
    const elem = document.getElementById('userMenu');
    if (elem.style.display === 'grid') {
        elem.style.display = 'none';
    }
    else {
        elem.style.display = 'grid';
    }
}

function addPhotoPostToDOM(photoPost, user) {
    let edit = "";
    if (user === photoPost.author) {
        edit = `<img ind=${photoPost.id} class="edit-btn" src="https://image.freepik.com/free-icon/no-translate-detected_318-61160.jpg"></img>
            <div></div>
            <img ind=${photoPost.id} class="delete-btn" src="https://www.shareicon.net/data/2016/09/01/822390_delete_512x512.png"></img>
            `
    }
    let staff = document.getElementById("staff");
    staff.innerHTML = staff.innerHTML + imageBlock(photoPost, edit);
}

function editPost(e) {
    e.preventDefault();
    const i = e.currentTarget.getAttribute('ind');
    console.log(i);
}

function deletePost(e) {
    e.preventDefault();
    const i = e.currentTarget.getAttribute('ind');
    const ind = localStore.photoPosts.arr.findIndex((e) => e.id === i);
    localStore.photoPosts.arr.splice(ind,1);
    console.log(`li[key=${i}]`);
    const elem=document.querySelector(`li[key="${i}"]`);
    elem.style.height="-20px";
    setTimeout(()=>elem.parentNode.removeChild(elem),300);
}


module.exports = {
    filter,
    like,
    logOn,
    userMenu,
    addPhotoPostToDOM,
    editPost,
    deletePost,
}