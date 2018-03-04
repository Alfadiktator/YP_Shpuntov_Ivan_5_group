const PhotoPost=require('./PhotoPost');

class PhotoArr{
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
module.exports = PhotoArr;