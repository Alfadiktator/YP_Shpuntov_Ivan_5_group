const PhotoArr=(function(){
    const PhotoPost=(function(){
     return class PhotoPost{
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
})();

return class PhotoArr{
    constructor(){
        this.arr=[];
    }
    addPhotoPost(photopost){
        if(this.validatePhotoPost(photopost)){
            this.arr.push(photopost);
        }
        else{
            console.log(photopost);
            console.log('invalid photopost');
        }
    }
    validatePhotoPost(photopost){
        if(typeof(photopost.author) !== 'string' ||
        typeof(photopost.description) !== 'string' ||
        !photopost.createdAt ||
        !photopost.author || 
        !photopost.photoLink ||
            typeof(photopost.photoLink) !== 'string' ||
            typeof(photopost.id) !== 'string' || 
            !Array.isArray(photopost.arrhash) || 
            !(photopost.createdAt instanceof Date)){
                return false;
        }
        return true;
    }
    editPhotoPost(id,Toedit){
        const ind=this.arr.findIndex((elem)=>elem.id===id)
        if(ind===-1){
            console.log("No element with such id")
            return false;
        }
        else{
            var clone=Object.assign({}, this.arr[ind]);
            console.log(clone);
            for(let prop in Toedit){
                if(clone.hasOwnProperty(prop)){
                    clone[prop]=Toedit[prop];
                }
                else{
                    console.log("Invalid edition");
                    return false;
                }
            }
            if(this.validatePhotoPost(clone)){
                this.arr[ind]=clone;
            }
            else{
                console.log("Invalid edition");
                return false;
            }
        }
        return true;
    }
    getPhotoPosts(skip=0,top=10,filterConfig){
        var edit=[];
        if(typeof(filterConfig)==='undefined'){
            edit=this.arr.filter(()=>true);
        }
        else{
            for(let prop in filterConfig){
                if(!this.arr[0].hasOwnProperty(prop)){
                    console.log("Invalid filter");
                    return;
                }
            }
            edit=this.arr.filter((elem)=>{
                    for(let prop in filterConfig){
                        if(elem[prop]!==filterConfig[prop]){
                            return false;
                        }
                    }
                    return true;
            })
        }
        edit.sort((a,b)=> -(a.createdAt-b.createdAt));
        return edit.slice(skip,Math.min(edit.length,skip+top));
    }
    removePhotoPost(id){
        const ind=this.arr.findIndex((elem)=>elem.id===id);
        if(ind===-1){
            console.log("No element with such id")
            return false;
        }
        else{
            this.arr.splice(ind, 1);
            return true;
        }
    }
    getPhotoPost(id){
        const ind=this.arr.findIndex((elem)=>elem.id===id);
        if(ind===-1){
            console.log("No element with such id")
            return;
        }
        else{
            return this.arr[ind];
        }
    }
}
})();
const PhotoPost=(function(){
    return class PhotoPost{
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
})();

//Писать консоль логи не было времени-взял.Простите))
//Я работал тестером и знаю как это делать,честно)

let photoPosts=new PhotoArr();
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-02-23T23:02:42', 'asdasd','#asfaasfa#efef#grgrd ', '#','1')); 
photoPosts.addPhotoPost(new PhotoPost('kek', '2018-02-23T22:01:40', 'asfaf','#fdfd #adfad#rrr', '#','2')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-02-22T01:11:42', 'sdcsdc','#devil#paradise#beast', '#','3')); 
photoPosts.addPhotoPost(new PhotoPost('shpek', '2018-02-21T23:59:43', 'My first','#post', '#','4')); 
photoPosts.addPhotoPost(new PhotoPost('shrek', '1999-09-09T12:02:12', 'Very ','#smart#clever person #Mum_loves_me#50$per_hour', '#','5')); 
photoPosts.addPhotoPost(new PhotoPost('dasha', '2018-02-25T12:00:45', 'sdcsdc','#description', '#','6')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-02-25T14:45:59', 'sdcsdc','#asfa#fdfd', '#','7')); 
photoPosts.addPhotoPost(new PhotoPost('drop photoPostsbase', '2018-02-22T15:43:22', 'sdcsdc','#faafadfa#dgdg', '#','8')); 
photoPosts.addPhotoPost(new PhotoPost('kate', '2018-20-02T13:25:43', 'fabfupevpb','#kjfj #dfslkdfn', '#','9')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:43', 'fdaf','#asfa', '#','11')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:44', 'fdaf','#asfa', '#','12')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:45', 'fdaf','#asfa', '#','13')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:46', 'fdaf','#asfa', '#','14')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:47', 'fdaf','#asfa', '#','15')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:48', 'fdaf','#asfa', '#','16')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:49', 'fdaf','#asfa', '#','17')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:50', 'fdaf','#asfa', '#','18')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:51', 'fdaf','#asfa', '#','19')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:52', 'fdaf','#asfa', '#','10')); 
photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:53', 'fdaf','#asfa', '#','20'));
console.log('-validation');
console.log(' ');
photoPosts.addPhotoPost(new PhotoPost('lol', 'fdaf','#asfa', '#','20'));
photoPosts.addPhotoPost(new PhotoPost('fdaf','#asfa', '#','20'));
photoPosts.addPhotoPost(new PhotoPost(1212, 'fdaf','#asfa', '#','20'));
photoPosts.addPhotoPost(new PhotoPost('drop photoPostsbase', '2018-02-22T15:43:22', 'sdcsdc','#faafadfa#dgdg', '#',777));
console.log('-getPhotoPosts')
console.log('10 posts:');
console.log(photoPosts.getPhotoPosts());
console.log('3 posts start from the second:');
console.log(photoPosts.getPhotoPosts(1, 3));
console.log('skip = 6 and default-argument for top:');
console.log(photoPosts.getPhotoPosts(6));
console.log('posts after filtering:');
console.log(photoPosts.getPhotoPosts(0, 10, {
    authors: ['lol', 'kek'],
    tags: ['#asfa', '#fdfd'],
    startDate: new Date(2018, 0, 0),
}));
console.log('with invalid argument:')
console.log(photoPosts.getPhotoPosts('argument'));
console.log('');
console.log('-getPhotoPost');
console.log('post with id 2:');
console.log(photoPosts.getPhotoPost('2'));
console.log('post with id 100:');
console.log(photoPosts.getPhotoPost('100'));
console.log('with invalid argument:');
console.log(photoPosts.getPhotoPost(100));
console.log('');
console.log('-validatePhotoPost');
console.log('with invalid createdAt:');
const incorrectPost = new PhotoPost('skateray17', '2018-01-01', 'asfa#afa', '#');
incorrectPost.publDate = 1;
console.log('');
console.log('-addPhotoPost');
console.log('all posts: ');
console.log(photoPosts);
console.log('try to add invalid post: ');
console.log(photoPosts.addPhotoPost(incorrectPost));
console.log('all posts: ');
console.log(photoPosts);
console.log('try to add valid post: ');
console.log(photoPosts.addPhotoPost(new PhotoPost('lol', '2018-22-02T12:24:53', 'fdaf#asfa', '#', ['lol', 'kek'])));
console.log('all posts: ');
console.log(photoPosts);
console.log('');
console.log('-editPhotoPost');
console.log('id=3 post before editing:');
console.log(photoPosts.getPhotoPost('3'));
console.log('try to edit id=3 post:');
console.log(photoPosts.editPhotoPost('3', {
    description: 'new description',
    likes: [],
}));
console.log('id=3 post after editing:');
console.log(photoPosts.getPhotoPost('3'));
console.log('with invalid argument:');
console.log(photoPosts.editPhotoPost(''));
console.log('');
console.log('-removePhotoPost');
console.log('with invalid argument:');
console.log(photoPosts.removePhotoPost(''));
console.log('remove id=3 post');
console.log(photoPosts.removePhotoPost('3'));
console.log('try to get id=3 post');
console.log(photoPosts.getPhotoPost('3'));
console.log('all posts: ');
console.log(photoPosts);






