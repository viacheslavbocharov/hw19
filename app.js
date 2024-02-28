//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
//Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
'use strict';

let min = 1;
let max = 9;
let number = Math.floor(Math.random() * (max - min + 1) + min);

let myElement = document.querySelector('.img');
myElement.innerHTML = `<div class="img"><img src="./img/${number}.jpg" alt="picture ${number}"></div>`;

