const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const chosenImage2 = images[Math.floor(Math.random() * images.length)];

if(chosenImage == chosenImage2) {
    const chosenImage2 = images[Math.floor(Math.random() * images.length)];
}

document.getElementById("img1").src = `img/${chosenImage}`;
document.getElementById("img2").src = `img/${chosenImage2}`;