//1
function suma(v1, v2) {
    return console.log(v1 + v2)
}
//2
AnonimSuma = function (v1, v2) { return console.log(v1 + v2) }
//3
var ArrowSuma = (v1, v2) =>  suma(v1, v2);
//4
function suma() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return console.log(result);
}
//5
function Constructor() {
    this.a;
    this.b;
    this.suma = function (a, b) {
        return console.log(this.a + this.b)
    }
}
//6
function Suma() {
    return function (a,b) { return console.log(a + b) };
}
//7
function Factorial(value) {
    if (value <= 1) return 1;
    else return value * Factorial(value - 1)
}
//8

//9
function ConstructorSetGet(){
    var v1 =0;
    this.value = function(amount){
    if (!arguments.length) return v1;
    if (v1 < 0) {throw new Error("Не +!");}
    }
    v1=amount;
};



