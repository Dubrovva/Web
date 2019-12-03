// #1
var test = 'foo';

function testScope() {
	  var test = 'baz';
  	console.log(test);     
}

testScope(); // Виводить в консоль 'baz', змінна "Існує" тільки внутрі функції.
console.log(test); // Виводить в консоль 'foo', так як не в скоупи



// #2
var test = 'foo';

function testScope() {
	  test = 'baz';
  	console.log(test);     
}

console.log(test); // Виводить в консоль 'foo', визвана та що в не скоупи
testScope(); // baz так як поминялась внутри скоупа
console.log(test); // Виводить в консоль 'baz', так як в скоупи змінилась змінна



// #3
var test;
test = 'foo';
var test = 'baz';

console.log(test); //Перезначения змінной baz
                

// #4
function foo() {
  console.log(1);
} 

var foo;

foo = function() {
  console.log(2);
};

foo(); // було створено foo два раза та воно перевизначалось. тому 2

// #5
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    return callback();
}
baz(foo); //виводить foo тому що визиваэться функцыя внутры функції


// #6
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    var test = 'baz';
    return callback();
}
baz(foo); // foo тому що не передається нікуда дальше лок змінна


// #7
var test = 'foo';
function foo() {
    return test;
}
function baz(callback) {
    this.test = 'baz';
    var binded = callback.bind(this);
    return binded();
}
baz(foo); // Виводить в консоль baz. повертає разом з колббеком


// #8
var test = 'foo';
var foo = function () {
    return test;
};
var baz = function (callback) {
    var test = 'baz';
    return callback();
};
baz(foo); // Виводить в консоль foo. опять же лок змінна


// #9
var test = 'qwerty';
var a = 4;

function foo() {
    if (a === 4) {
      	var test = 'bazinga';
    }
  	console.log(test);
}

foo(); // bazinga жортске сравнения true тому

// #10
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})(); // unditified тому що скоуп и внем нету. А потом оголошения 10 

// #11
(function() {
   var a = b = 5;
})();
console.log(b);// 
// #12
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

