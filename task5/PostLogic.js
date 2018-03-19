class PhotoPost {
    constructor(author, createdAt, description, hashtags, photoLink, id) {
        this.description = description;
        this.createdAt = new Date(createdAt);
        this.author = author;
        this.photoLink = photoLink;
        this.arrHash = hashtags.split("#").slice(1);
        this.arrLiker = new Array();
        this.id = id;
    }
}

class PhotoArr {
    constructor() {
        this.arr = [];
    }
    addPhotoPost(photoPost) {
        if (this.validatePhotoPost(photoPost)) {
            this.arr.push(photoPost);
        }
        else {
            console.log('invalid photoPost');
        }
    }
    validatePhotoPost(photoPost) {
        if (typeof photoPost.author !== 'string' ||
            typeof photoPost.description !== 'string' ||
            !photoPost.createdAt ||
            !photoPost.author ||
            !photoPost.photoLink ||
            typeof photoPost.photoLink !== 'string' ||
            typeof photoPost.id !== 'string' ||
            !Array.isArray(photoPost.arrHash) ||
            !(photoPost.createdAt instanceof Date) ||
            !photoPost.id) {
            return false;
        }
        return true;
    }

    editPhotoPost(id, ToEdit) {
        const ind = this.arr.findIndex((elem) => elem.id === id)
        if (ind === -1) {
            console.log("No element with such id");
            return false;
        }
        let clone = Object.assign({}, this.arr[ind]);
        console.log(clone);
        for (let prop in ToEdit) {
            if (clone.hasOwnProperty(prop)) {//А если в редакции будет плохая property,
                clone[prop] = ToEdit[prop];//стоит её добавить в properties фотопоста и тащить дальше?
            }
            else {
                console.log("Invalid edition");
                return false;
            }
        }
        if (this.validatePhotoPost(clone)) {
            this.arr[ind] = clone;
        }
        else {
            console.log("Invalid edition");
            return false;
        }
        return true;
    }

    getPhotoPosts(skip = 0, top = 10, filterConfig) {
        let edit = [];
        console.log('edit',edit);
        if (!filterConfig) {
            edit = this.arr;
        }
        else {
            for (let prop in filterConfig) {
                if (!this.arr[0].hasOwnProperty(prop)) {
                    console.log("Invalid filter");
                    return;
                }
            }
            edit = this.arr.filter((elem) => {
                for (let prop in filterConfig) {
                    if (elem[prop] !== filterConfig[prop]) {
                        return false;
                    }
                }
                return true;
            })
        }
        console.log('edit',edit);
        edit.sort((a, b) => -(a.createdAt - b.createdAt));
        return edit.slice(skip, Math.min(edit.length, skip + top));
    }

    removePhotoPost(id) {
        const ind = this.arr.findIndex((elem) => elem.id === id);
        if (ind === -1) {
            console.log("No element with such id");
            return false;
        }
        this.arr.splice(ind, 1);
        return true;
    }

    getPhotoPost(id) {
        const ind = this.arr.findIndex((elem) => elem.id === id);
        if (ind === -1) {
            console.log("No element with such id");
            return;
        }
        return this.arr[ind];
    }
    
}

module.exports = {
    PhotoArr,
    PhotoPost,
};


