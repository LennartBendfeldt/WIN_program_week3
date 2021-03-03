let slideshow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'],
    currentPhotoIndex: 2,
    nextPhoto: function(){
        if(this.currentPhotoIndex < (this.photoList.length - 1)){
        this.currentPhotoIndex++;
        } else {
            console.log("This is the last photo");
        }
    },
    previousPhoto: function(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex = this.currentPhotoIndex--;
            } else {
                console.log("This is the first photo");
            }
    },
}

console.log(slideshow.currentPhotoIndex);
slideshow.nextPhoto;
console.log(slideshow.currentPhotoIndex);