const {PhotoArr}= require('./PostLogic');
let photoPosts = new PhotoArr();
const localStore = {
    username: "",
    photoPosts,
};

module.exports =localStore;