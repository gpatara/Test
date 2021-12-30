const imgs = [];
imgs[1]='../Images/wallpapersden.com_purple-sunrise-4k-vaporwave_2560x1440.jpg';
imgs[2]='../Images/vaporwave-zl-2560x1440.jpg';
imgs[3]='../Images/minimalism-airplane-over-mountains.jpg';
imgs[4]='../Images/wp7242546.jpg';
imgs[5]='../Images/cda05f4ae07f6e5d0df9d4747b21e458.jpg';
imgs[6]='../Images/forest_mountains_sunset_cool_weather_minimalism.jpg';
imgs[7]='../Images/tranquility-minimal-4k-6q-2560x1440.jpg';
imgs[8]='../Images/3Y2zBj.png';
window.onload = function(){
    const random = Math.floor(Math.random()* imgs.length);
    document.body.style.backgroundImage = `url(${imgs[random]})`;
    document.getElementById("left").style.backgroundImage = `url(${imgs[random]})`;
}
