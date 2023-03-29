//Start Variables
/*
let js = 'amazing';
if (js === 'notamazing') {
console.log('JS is FUN!');}
else{
    console.log('JS is very hard');
}

10+20-4-5;
console.log(10+20-4-5);

console.log('Hello World');
console.log(123);

let FirstName = 'Azmanul Haque';
console.log(FirstName);
console.log(FirstName);

let Azman_Motayed = 'Payel';
let $function = 100;
console.log(Azman_Motayed, $function);

let person = 'Azman Motayed';
let PI = 3.1416; 
console.log(person, PI);
*/
//Finish Variables



//Start Data types
/*
    //boolean
true;
console.log(true);
console.log(typeof(true));

    //boolean to string
let javaScript = true;
console.log(javaScript);
javaScript = 'New Document';
console.log(typeof javaScript);

let javascript = true;
console.log('javascript');

let year = 'Hello';
console.log(typeof year);

year = 1998;
console.log(typeof year);

console.log(typeof null);
console.log(typeof (true));
console.log(typeof ('js'));
console.log(typeof (123));
console.log(typeof (javaScript));
*/
//End Data Types

//Start Let constant and Variables
/*
let age = 30;
age = 21;

const birthYear = 1991;
//birthYear = 1991;
//const job;

var job = 'programmer';
job = 'teacher';
console.log(job)
*/
//End Let constant and Variables

//Start Basic Operators
/*
const azmanMotayed = 2022 - 1998;
const azmanPayel = 2022 - 2003;
console.log(azmanMotayed, azmanPayel);
console.log(azmanMotayed + 10, azmanPayel / 5, 2**3, 3*4);

const firstName = 'Azman';
const lastName = 'Motayed';
console.log(firstName +' '+ lastName);

//Assignment operators
let x = 10 + 5; //15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x -= 5; //x = x + 10 25 - 5 = 20
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
++x;
console.log(x);
--x;
console.log(x);

//comparison operators
console.log(azmanMotayed > azmanPayel); // 24 greater than 19 = true
console.log(azmanMotayed < azmanPayel);
// 24 is smaller than 19 = false
console.log(azmanMotayed == 24); // 24 = 24 = true
*/
//END Basic Operators

///Start Operator Precedence
/*
const now = 2037;
const azmanMotayed = now - 1991;
const azmanPayel = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(now - 1991 < azmanPayel);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x , y + 15);

const averageAge = azmanMotayed + azmanPayel / 2;
console.log(azmanMotayed, azmanPayel, averageAge);
*/
//END Operator Precedence

//Start Coding Challenge
/*
    // Quesstion solve - 1
const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/
//End coding challenge

//Start Strings and Template Literals
/*
const firstName = 'Azman';
const firstJob = 'Graphics Designer';
const birthYear = 1998;
const year = 2022

const azman = "I'm " + firstName + '. I am ' + (year - birthYear) + ' Years old and a ' + firstJob + ' !';
console.log(azman);

const azmanNew = `I'm ${firstName}. I am ${year - birthYear} Years old and a ${firstJob} !`;
console.log(azmanNew);

console.log('Just a regular sting...');

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
//End Strings and Template Literals
*/

//Start if else Statements
/*
const age = 15;
const isOldEnough = age >= 18;
if(isOldEnough) {
    console.log('Azman Get His Driving License');
} else{
    const yearsLeft = 18 - age;
    console.log(`Azman is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if(birthYear <= 2000) {
    century = 20;
} else{
    century = 21;
    console.log(century);
}
*/
//End if else Statements

//Start Coding Challenge 2
/*
const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

    if(markBMI > johnBMI) {
    console.log("Mark's BMI= "+ markBMI +" is higher than John's BMI!")
    console.log(`Mark's BMI = ${markBMI} is higher than John's BMI = ${johnBMI}!`)
} 
    else {
    console.log("John's BMI is higher than Mark's BMI!")
    console.log(`John's BMI = ${johnBMI} is higher than Mark's BMI = ${johnBMI}!`)
}
*/
//End Coding Challange 2

//Start Type Conversion and Coercion
/*
    //type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Azman'));
console.log(typeof NaN);

let azman = 24;
console.log(String(azman));
console.log(typeof(azman));

console.log(String(23), 23);
    //type coercion
console.log(`I am ${azman} years old`);
console.log('24' - '10' - 4);
console.log('24' / '2');

let n = '4' + 1;
n = n - 1;
console.log(n);

let n2 = 1 + 1;
n2 = n2 - 1;
console.log(n2);
*/
//End Type Conversion and Coercion

//Start Truthy and Falsy Values
/*
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean('Azman'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 100;
if(money) {
    console.log("Do not spend it.");
} else {
    console.log("You should get it.");
}

let height;
if(height) {
    console.log("Height value given");
} else {
    console.log("Height is Undefined.");
}
*/
//End Truthy and Falsy Values

//Start Equity Operators
/*
const age = 24;
if (age == 24){
    console.log('Your are adult now');
} 
if (age === 24) {
    console.log('You are just Adult.');
}

const favourite = Number(prompt("Whats your favorite number..?"));  
console.log(favourite);
console.log(typeof favourite);

if (favourite === 24) {
    console.log('Cool! 24 is amazing number!'
    )
} else if (favourite === 7){
    console.log('He is 7!')
} else if (favourite === 10){
    console.log('He is 10!')
} else {
    console.log('He is not 24 or 7 or 10!')
}

if (favourite !== 24) console.log('Why not 24!');
*/
//End Equity Operators

//Start Logical Operators
/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense, !hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...')
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense && !hasGoodVision && isTired);
*/
//End Logical Operators

//Start Coding Challange 3
/*
let dolphin = 96 + 108 + 89;
let koalas = 88 + 91 + 110;
let avgDolphin = dolphin / 3;
let avgKoalas = koalas / 3;

console.log(avgDolphin);
console.log(avgKoalas);

if(avgDolphin > avgKoalas){
    console.log("Dolphin Win");
} else if(avgKoalas > avgDolphin) {
    console.log("Koalas Win");
} else if (avgDolphin === avgKoalas) {
    console.log("Draw match");
} else {
    console.log("Not Defined");
}
*/


/*
//Bonus 1
let dolphin = 96 + 108 + 89;
let koalas = 88 + 91 + 110;
let avgDolphin = dolphin / 3;
let avgKoalas = koalas / 3;

console.log(avgDolphin);
console.log(avgKoalas);

if(avgDolphin > avgKoalas && avgDolphin >= 100){
    console.log("Dolphin Win");
}else if(avgKoalas > avgDolphin && avgKoalas >= 100) {
    console.log("Koalas Win");
}else if (avgDolphin === avgKoalas && avgDolphin >= 100 && avgKoalas >= 100) {
    console.log("Draw match");
}else {
    console.log("No one get Trophy");
}
*/
//End Coding Challenge 3

//Start THE Switch statement
/*
const day = 'Monday';

switch(day){
    case 'Monday':
        console.log('Plan my course structre');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('EnjoY the weekend') ;
        break;
    default:
        console.log('Not a valid day');       
}

if (day === 'Monday'){
    console.log(' Plan my course structre');
        console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday'|| day === 'thursday') {
    console.log('write code exmple');
} else if(day === 'friday') {
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}
*/
//End the switch statement

// Start Statement and Expression

// End Statement and Expression

// Start The conditional operator or ternary operator
/*
const age = 24;//Here has condition - if - else = 3 parts
 age >= 18 ? console.log('I like drink coffee'):
 console.log('I like to dring lassi');

 let dirnk;
 if(age >= 18){
 drink = 'Dew';
 } else {
     drink = 'Water';
 }
 console.log(drink);
 console.log(`I like to drink ${drink}`);
 */
//End the conditional operator or ternary operator

// Start Coding Challenge 4
/*
const bill = 200;

const tip = bill<=300 && bill>=50 ? bill * 0.15: bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
*/
// End Coding challenge 4

