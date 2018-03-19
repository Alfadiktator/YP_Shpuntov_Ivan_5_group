module.exports = function (photoPost,editmatch) {
    console.log(arguments);
    let date=photoPost.createdAt.toString().match(/.+GMT/)[0];
    date=date.substring(4,date.length-4);
    return (
        `<li key=${photoPost.id} class="image-box">
            <div class="image-head">
                <div class="header-width-limiter">
                    <h2>${photoPost.author}</h2>
                </div>
                ${editmatch}
            </div>
            <img class="image-staff" src=${photoPost.photoLink}></img>
            <div class="image-like">
                <img class="like-btn" src="http://icons.iconarchive.com/icons/icons8/ios7/512/Messaging-Like-icon.png"></img>
                <div></div>
                <div class="like-text">
                    <b class="like-count">${photoPost.arrLiker.length}</b>
                </div>
            </div>
            <div class="image-info">
                <span>
                    <b>${photoPost.author}:</b>
                    <span class="image-desc">${photoPost.description}</span>
                    ${photoPost.arrHash.map((e)=>{
                        return `<a class="hashtag" href="#${e}">#${e}</a>`
                    })}
                </span>
                <span class="date">${date}</span>
            </div>
        </li>`
    )
}