const imageBlock = require('./components/ImageBox');

function logOn(event) {
    event.preventDefault();
    const userName = document.getElementById("inputNickname").value;
    const password = document.getElementById("inputPassword").value;
    console.log(userName, password);
}

function like(e) {
    e.preventDefault();
    if (e.target.getAttribute("like") === "0") {
        e.target.src = "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png";
        e.target.setAttribute("like", "1");
    }
    else {
        e.target.src = "http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Like-icon.png";
        e.target.setAttribute("like", "0");
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
     edit =`<img ind=${photoPost.id} class="edit-btn" src="https://image.freepik.com/free-icon/no-translate-detected_318-61160.jpg"></img>
            <div></div>
            <img ind=${photoPost.id} class="delete-btn" src="https://www.shareicon.net/data/2016/09/01/822390_delete_512x512.png"></img>
            `
    }
    let staff = document.getElementById("staff");
    staff.innerHTML = staff.innerHTML + imageBlock(photoPost, edit);
}

module.exports = {
    filter,
    like,
    logOn,
    userMenu,
    addPhotoPostToDOM,
}