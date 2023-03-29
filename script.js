// Start Functions
/*
function logger(){
    console.log('My name is Azman');
}
    // calling / running / invoking function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} 
    // calling / running / invoking function
const juices = fruitProcessor(10, 4);
console.log(juices);

const againJuices = fruitProcessor(3, 7);
console.log(againJuices);
*/
// End Functions

// Start Function Declarations vs. Expressions
/*
    //function Declaration
function calAge1(birthYear){ 
    return 2022 - birthYear;;
}
const age1 = calAge1(1998);
console.log(age1);

    //function Expression
const calAge2 = function(birthYear){
    return 2022 - birthYear;
}
const age2 = calAge2(1973);
console.log(age2);

console.log(age1 + 21, age2 + 21);
*/
// End Function Declarations vs. Expressions

// Start Arrow Function
/*
    //Arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retries in ${retirement} years;`
}
console.log(yearsUntilRetirement(1998, 'Azman'));
console.log(yearsUntilRetirement(1993, 'Motayed'));

    //My Exercise
const retUntil = (bYear, fName) => {
    const age2 = 2022 - bYear;
    const ret = 65 - age2;
    return `${fName} retries in ${ret} years;`
}
console.log(retUntil(1996, 'Samuel Motayed'));
*/
// End Arrow Function

// Start Functions Calling Other Functions
/*
function cutFruitPices(fruit){
    return fruit * 3;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPices(apples);
    const orangePieces = cutFruitPices(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges. `;
    return juice;
}
console.log(fruitProcessor(4,3));
*/
// End Functions Calling Other Functions

// Start Reviewing Function
/*
const calAge = function(birthYear){
    year = 2022 - birthYear;
    return year;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0)
    {
        return (firstName+ ' ' + retirement + " Years left for retirement.");
    } else {
        return (firstName + " Get His Pension.");
    }
    //return `${firstName} retries in ${retirement} years;`
}
console.log(yearsUntilRetirement(1998, 'Azman'))
console.log(yearsUntilRetirement(1902, 'Motayed'))
*/
// End Reviewing Function

// Start Coding Challenge
/*
const calAvg = (a, b, c) => (a + b + c) / 3; 
console.log(calAvg(3,4,5));

    //Test 1
let scoreDolphins = calAvg(44, 23, 71);
let scoreKoalas = calAvg(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDophins, avgKoalas){
    if (avgDophins >= 2 * avgKoalas){
        console.log(`Dolphins win ${avgDophins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDophins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDophins}`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner (scoreDolphins, scoreKoalas);
checkWinner(500, 1100);

    //Test 2
scoreDolphins = calAvg(85, 54, 41);
scoreKoalas = calAvg(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

    //My Exercise
const calcAvg = (a, b , c) => (a + b + c) / 3;
console.log(calcAvg(10,20,39));

let scoDolphins = calcAvg(10, 20, 12);
let scoKoalas = calcAvg(39, 20, 19);

const checkwin = function (scoDolphins, scoKoalas){
    if(scoDolphins > scoKoalas){
    console.log('Dolphin win');
    } else if(scoDolphins < scoKoalas){
        console.log('Koalas win');
    } else {
        console.log('Draw match');
    }
}
console.log(scoDolphins, scoKoalas);

scoDolphins = calcAvg(20,10,30);
scoKoalas = calcAvg(20,20,20);
console.log(scoDolphins, scoKoalas);
*/
// End Coding Challenge

// Start Introduction to Array
/*
const friend1 = 'Azman';
const frined2 = 'Motayed';
const frined3 = 'Payel';

const friends = ['Azman', 'Motayed', 'Payel'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Nirob';
console.log(friends);

fName = 'U Motayed';
mName = 'M Motayed'
const azman = ['Azman','Motayed',2022-1998, fName,mName];
console.log(azman);
console.log(azman.length);

    //Why array useful
const calAge2 = function(birthYear){
    return 2022 - birthYear;
}
const yearss = [1990, 1995, 1998, 2010, 2020];

const age5 = calAge2(yearss[2]);
const age6 = calAge2(yearss[1]);
const age7 = calAge2(yearss[yearss.length - 2]);
console.log(age5, age6, age7);

const ages = [calAge2(yearss[2]), calAge2(yearss[1]), calAge2(yearss[yearss.length - 2])];
console.log(ages);
*/
// End Introduction to Array

// Start Basic Array Operations (Mehtods)
/*
const friends = ['Azman', 'Motayed', 'Payel'];
    //Add elements
    friends.push('AMP')
const newLenght = friends.push('Samuel');
console.log(newLenght);
console.log(friends);

friends.unshift('Nirob');
console.log(friends);

    //Remove Elements
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Motayed'));
console.log(friends.indexOf('No One'));

console.log(friends.includes('Azman'));
console.log(friends.includes('No One'));

friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes('23'));
console.log(friends);

if(friends.includes('Azman')){
    console.log('You have a friend called Azman.');
} else {
    console.log('Nothing')
}

if(friends.includes('Hello')){
    console.log('You have a friend called Hello.');
} else {
    console.log('Nothing')
}
*/
// End Basic Array Operations (Methods)

// Start Coding Challenge 2
/*
const calcTip = function(bill){
  //  //return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else {
        return bill * 0.2;
    } 
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]; 
const total = (bills[0] + tips[0]+ bills[1] + tips[1] + bills[2] + tips[2]);

console.log(bills);
console.log(tips);
console.log(total);
*/
// End Coding Challenge 2 

// Start Introduction to Object
/*
const azmanArray = [
    'Azman', 'Motayed', 2022-1998, 'Designer',
    ['Samuel' , 'Payel' , 'AMP']
];

const azman = {
    firstName: 'Azman',
    lastName: 'Motayed',
    age: 2022 - 1998 ,
    job: 'Designer ',
    friends: ['Samuel', 'Payel', 'Steven']
};
console.log(typeof(azman));
console.log(typeof(azmanArray));
*/
// End Introduction to Object

// Start Dot vs. Bracket Notation

const azman = {
    firstName: 'Azman',
    lastName: 'Motayed',
    age: 2022 - 1998 ,
    job: 'Designer ',
    friends: ['Samuel', 'Payel', 'Nirob']
    };
console.log(azman);

console.log(azman.firstName);
console.log(azman['lastName']);

const nameKey = 'Name';
console.log(azman['first' + nameKey]);
console.log(azman['last' + nameKey]);

const interstedIn = prompt('What do you want to know about Azman? Choose between firstName, lastName, age, job, friends');

if (azman[interstedIn]){
    console.log(azman[interstedIn]);
} else {
    console.log('Wrong answer! Choose between firstName, lastName, age, job, friends');
}

azman.location = 'Bangladesh';
azman['twitter'] = '@azmanmotayed';
console.log(azman);
    //Challenge by teacher
//console.log(`${azman.firstName} has ${azman.friends.length} friends, and his best friend is ${azman.friends[2]}. He lives in ${azman.location}`);

// End Dot vs. Bracket Notation

// Start Object Method
/*
const azman = {
    firstName: 'Azman',
    lastName: 'Motayed',
    birthYear: 1998,
    age: 2022 - 1998 ,
    job: 'Designer ',
    friends: ['Samuel', 'Payel', 'Nirob'],
    hasDriverLicense: true,

    //calcAge: function(birthYear){
    //    return 2022 - birthYear;
    //}

    calcAge: function(){
        myAge = 2022 - this.birthYear;
        return myAge;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} Years old ${azman.job}and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license.`
    }
};
    //Challenge
    // Azman is 24 years old and he has driver's license
    console.log(azman.getSummary());
*/
// End Object Method

// Start Coding Challege 3
/*
const markMiller = {
    fName: 'Mark Miller',
    mass: 53,
    height: 1.5,
    calBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    }
};

const johnSmith = {
    fName: 'John Smith',
    mass: 63,
    height: 1.69,
    calBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
    }
};

markMiller.calBMI();
johnSmith.calBMI();
console.log(johnSmith.bmi, markMiller.bmi);

if(markMiller.bmi > johnSmith.bmi){
    console.log(`${markMiller.fName}'s BMI ${markMiller.bmi} is higher than ${johnSmith.fName}'s BMI ${johnSmith.bmi}.`);
} else if(markMiller.bmi < johnSmith.bmi) {
    console.log(`John Smith BMI is higher than Mark Miller BMI`);
} else {
    console.log('Draw');
}
*/
// End Coding Challege 3

// Start Iteration The for Loop
/*
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repetition is ${rep}`);
}
*/
// End Iteration The for Loop

// Start Looping Arrays Breaking and Continuing
/*
const azman = [
'Azman',
'Motayed',
2022 - 1998,
'teacher',
['Azman', 'Motayed', 'Nirob'],
true
]

// console.log(azman[0]);
// console.log(azman[1]);
// ...
// console.log(azman[4]);
for(let i=0; i<azman.length; i++){
    console.log(azman[i], typeof azman[i]);

    //types[i] = typeof azman[i];
    types.push(typeof azman[i]);
}
console.log(types);
*/
// End Looping Arrays Breaking and Continuing



