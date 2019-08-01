


let image = document.querySelectorAll('.iphone')[0];
let activeImage = 0;
let imageSrc = ['./img/iphone-you-got-this.png','./img/iphone-iam.png','./img/iphone-breathe.png','./img/iphone-study.png'];    //takes all images you want to display


setInterval(function(){

if(activeImage >= imageSrc.length -1)      //Returns to the first one
{
    activeImage = 0;  
}
else
{
    activeImage++;
}

   image.src = imageSrc[activeImage];

 },3000); //displays image at index every 3 seconds

