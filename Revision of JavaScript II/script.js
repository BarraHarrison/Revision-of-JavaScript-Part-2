For, While and Do While Loops

for (let i = 1; i <= 5; i++) {
    code to be repeated
    console.log(i); 

    for (let j = 1; j <= 3; j++){
       console.log("Inner loop" + j);
    }
}




While Loop

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}



Do...While Loop

let i = 10;

do {
    //code to be repeateds
    console.log(i);
    i++;
} while (i <= 5);



Break Statement

for (let i = 1; i <= 5; i++) {
    if(i == 3){
        continue;
    }
        console.log(i);
    }



FUNCTIONS 

function greet() {
    console.log("Hello, Barra");
}

greet();

function greet(firstName, lastName){
    console.log("Hello " + firstName + " " + lastName);
}
// greet(200, 100);

greet("Elon", "Musk");


function sum(x, y=0){
    console.log(x+y);
}

sum(50,30);

function fn1(x){
    function fn2(y){
        return x * y;
    }
    return fn2;
}
 
let result = fn1(3);

console.log(result);

result(2)
console.log(result(2));





Callback, Anonymous and Recursive Functions

function display(result){
    console.log(result);
}

function add(num1, num2, myCallback){
let sum = num1 + num2;
myCallback(sum)
}

add(20, 30, display);

let sum = function(x, y){
    return x+y;
}


console.log(sum(10, 30));

(
function(){
    console.log("Welcome to South Korea");
}
)();


setTimeout(
    function(){
    console.log("Hello, Everybody!")
},
 5000);

function countDown(num){
    console.log(num);
    num--;
    if(num >= 0){
        countDown(num);
    }
    
}

countDown(10);




Object Prototypes 

function Person(){
    this.name = "Andrew Tate"
}

Person.prototype.age = 37;

const person1 = new Person();

Person.prototype = {age: 26}

const person2 = new Person()

console.log(person1.age);
console.log(person2.age);





Object Destructuring




const person = {
    firstName: "Barra",
    lastName: "Harrison"
}

console.log(person);



JavaScript CLasses
let Person = class {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

const person1 = new Person("Iman Gadzhi");

console.log(person1);




javaScript Class Inheritance

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static #fullName(x){
        return x.firstName +" "+ x.lastName;
    }
    display(){
        console.log(Person.#fullName(this));
    }
}

const person1 = new Person("Peter", "B");
person1.display();
