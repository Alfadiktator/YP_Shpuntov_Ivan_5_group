class PhotoPost{
    constructor(author,createdAt,description,hashtags,photoLink,id){
        this.description=description;
        this.createdAt=new Date(createdAt);
        this.author=author;
        this.photoLink=photoLink;
        this.arrhash=hashtags.split("#").slice(1);
        this.arrliker=new Array();
        this.id=id;
    }
}

module.exports = PhotoPost;