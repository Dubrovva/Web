//1 
let fruits = ["Яблука", "Груша", "Апельсин"];

// кидаем в другую змінну
let shoppingCart = fruits;
shoppingCart.push ("Банан");

// що в fruits і чому?
alert (fruits.length); //4, добавили пушом банан

//2

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length/2)]="Классика";
styles.shift();
styles.unshift("Реп","Реггі");

//3
let arr = ["a", "b"];

arr.push (function () {
   alert (this);
})

arr [2] (); //Виведеться "a", "b" та код який був добавлений через push
