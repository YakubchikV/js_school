// 'use strict';
// Our code -> v8 -> parser -> Abstract Syntax Tree -> Conversion to machine code ->
// -> machine code -> code runs

// console.log(this);

// const test = () => {
//     console.log(this);
// }

// function test3() {
//     console.log(this);
// }

// const test1 = () => {
//     test();
// }

// var a1 = 0;

// function b() {
//     var a1 = 1;
//     const c = () => ++a1;
    
//     return c;
// }
// const counter = b();



// console.log(3, a1);

// const temp = {
//     name: 1,
//     surname: 2,
//     getNameAndSurname: function() {
//         console.log(this);

//         function test4() {
//             console.log(1, this);
//         }

//         return test4;
//     }
// };

// function foo() {
//         console.log(age);
//         var age = 65;
//         console.log(age);
//     }

// temp.getNameAndSurname()();

// test1();


///////////////////////////////////////
// Lecture: Hoisting

// functions
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// retirement(1956);
// const retirement = function(year) {
//     console.log(65 - (2016 - year));
// }


// variables

// console.log(age);
// var age = 23;

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//     //     console.log(this);
//     //     console.log(2016 - this.yearOfBirth);
        
//     //     function innerFunction() {
//     //         console.log(this);
//     //     }
//     //     innerFunction();
//     }
// }

// function innerFunction() {
//     console.log(this);
// }
// // innerFunction();

// john.calculateAge();

// const mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };


// mike.calculateAge = john.calculateAge;
// mike.calculateAge();


// 1, 1, 2, 3, 5, 8, 13, 21...

// function fib(number){
//     let fisrtNumber = 0;
//     let secondNumber = 1;
//     let finalNumber = 0;
//     for (let index = 0; index < number; index++) {
//         finalNumber = fisrtNumber + secondNumber;
//         fisrtNumber = secondNumber;
//         secondNumber = finalNumber;   
//     }
//     return finalNumber;
// }

// console.log(fib(72));


// function fib2 (value) {
//     return value === 0 
//     ? 0 : value <= 2 
//     ? 1 : fib2(value - 1) + fib2(value - 2)
// }

// console.log(fib2(72));


// function fib(n) {
//     var a = 1,
//       b = 1;
//     for (var i = 3; i <= n; i++) {
//       var c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }