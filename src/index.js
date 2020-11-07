import {compose, pipe} from 'lodash/fp';

/*All course coding samples */
//functional programming examples
function sayHello(){//higher order functions
    return function(){
        return `hello world!`
    }
}
let fn = sayHello();
let message = fn();

//Explain what is higher order functions
let numbers = [1,2,3];
//map is higher order function, it takes a function as an argument
numbers.map(number=>number*2);
//setTimeout is also a higher orer function
setTimeout(() => {
   //console.log(`hello`) 
}, 1000);


//function composition
let input= "  Javascript  ";
let output = "<div>" + input.trim() + "</div>";

//trim
const trim = str => str.trim();
//wrapInDiv
const wrapInDiv = str => `<div>${trim(str)}</div>`;
//wrap in general case
const wrap = type => str => `<${type}>${str}</${type}>`;
//tolowercase
const toLowerCase = str => str.toLowerCase();

/*Problems: 1. we have to read this expression from right to left */
/*2. too many parentheses make it harder to read*/

const transform_original = wrapInDiv(toLowerCase(trim(input)));
//next composing and piping
//lodash install, in order to use composing and piping 
//import lodash functions from top
const transform_compose = compose(wrapInDiv,toLowerCase,trim);
//compose makes code more readable, but still we need to read functions from right to left
//to solve this, we can use pipe function
//pipe only accepts function references as parameters
const transform_pipe = pipe(trim,toLowerCase,wrapInDiv);

console.log('transform original',transform_original);
console.log('transform compose',transform_compose(input));
console.log('transform pipe',transform_pipe(input));


//Currying
const transform_pipe_curring = pipe(trim,toLowerCase,wrap("span"));

console.log('transform pipe with curring',transform_pipe_curring(input));


