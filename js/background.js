const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgIamge = document.createElement("img");

bgIamge.src = `img/${randomImage}`;

document.body.appendChild(bgIamge);
