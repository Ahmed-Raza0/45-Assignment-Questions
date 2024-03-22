"use strict";
// question#2
let nam = "Ahmed Raza";
console.log(` “Hello ${nam}, would you like to learn some TypeScript today?”`);
// question#3
let cases = "Ahmed Raza";
console.log(cases.toLowerCase());
console.log(cases.toUpperCase());
console.log(cases.charAt(0).toUpperCase() + cases.slice(1).toLowerCase());
// question#4
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
// question#5
let fam_per = "Albert Einstein";
let messege = `${fam_per} once said, “A person who never made a mistake never tried anything new.”`;
console.log(messege);
// question#6
let space = "\t\nHello Eric\t\n";
console.log(space);
console.log(space.trim());
// question#7
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
// question#8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// question#9
let favouriteNumber = 7;
console.log(`${favouriteNumber} is my favourite number`);
// question#10
// Ahmed Raza 19-03-2024
// practice for typescript
let comments = "Ahmed Raza";
console.log(`Hello ${comments} practice for typescript.`);
// question#11
let nameOfFriends = ["Ahmed", "Danish", "Raza", "Basit"];
for (let i = 0; i < nameOfFriends.length; ++i) {
    console.log(nameOfFriends[i]);
}
// question#12
let nameOfFriend = ["Ahmed", "Danish", "Raza", "Basit"];
for (let nameOfFriend of nameOfFriends) {
    console.log(`Hello ${nameOfFriend} practice for typescript`);
}
// question#13
let transports = ["Car", "Motorcycle", "Sazuki"];
transports.forEach(transport => {
    console.log(`“I would like to own a Honda ${transport}.”`);
});
// question#14
let guests = ["Ahmed", "Danish", "Raza"];
guests.forEach(guest => {
    console.log(`Hello ${guest}, I invite for you dinner`);
});
// uestion#15
let replacementGuest = "Ahmed";
console.log(`${replacementGuest} can't make it to the dinner`);
let newGuest = "Basit";
guests[guests.indexOf(replacementGuest)] = newGuest;
guests.forEach(guest => {
    console.log(`Hello ${guest}, I invite for you dinner`);
});
// question$16
console.log("Great news! I foun a bigger dinner table!");
guests.unshift("Ahed");
guests.splice(guests.length / 2, 0, "Faizan");
guests.push("Hashir");
guests.forEach(guest => {
    console.log(`Hello ${guest}, I invite for you dinner.`);
});
// question#17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuests = guests.pop();
    console.log(`Sorry ${removedGuests} can't invite for the dinner`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest} you're still invited to dinner`);
});
guests.splice(0, guests.length);
console.log(guests);
// question#18
let countries = ["Pakistan", "Japan", "Turkey", "India", "England"];
console.log("Original order:", countries);
console.log("Alphabetical order:", [...countries].sort());
console.log("Original order:", countries);
console.log("Reverse Alphabetical order:", [...countries].sort().reverse());
console.log("Original order:", countries);
countries.reverse();
console.log("Reverse order:", countries);
countries.reverse();
console.log("Original order:", countries);
countries.sort();
console.log("Alphabetical order:", countries);
countries.reverse();
console.log("Reverse Alphabetical order:", countries);
// question#19
let invite = ["Ahmed", "Danish", "Raza"];
console.log(`Hello ${invite}, I invite for you dinner`);
// question#20
let places = ["Pakistan", "India", "Japan", "China", "Turkey"];
console.log(`I am interested to visit in all places ${places}`);
// question#21
let poem = {
    title: "lines for Samson Agnoistic",
    authur: "Samson Agnoistic",
    written: 1997,
};
console.log(`The poem “${poem.title}” by ${poem.authur} written in ${poem.written}.`);
4;
// question#22
let internatinalError = ["Ahmed", "Danish", "Raza", "Basit"];
console.log(internatinalError[4]);
internatinalError[3] = "Basit";
// question#23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict True.");
console.log(car == 'honda');
let Motorcycle = 'subaru';
console.log("Is Motorcycle == 'subaru'? I predict True.");
console.log(Motorcycle == 'subaru');
console.log("Is Motorcycle == 'honda'? I predict True.");
console.log(Motorcycle == 'honda');
let cycle = 'subaru';
console.log("Is cycle == 'subaru'? I predict True.");
console.log(cycle == 'subaru');
console.log("Is cycle == 'honda'? I predict True.");
console.log(cycle == 'honda');
let sazuki = 'subaru';
console.log("Is sazuki == 'subaru'? I predict True.");
console.log(sazuki == 'subaru');
console.log("Is sazuki == 'honda'? I predict True.");
console.log(sazuki == 'honda');
let fan = 'subaru';
console.log("Is fan == 'subaru'? I predict True.");
console.log(fan == 'subaru');
console.log("Is fan == 'honda'? I predict True.");
console.log(fan == 'honda');
// quesytion#24
// Tests for equality and inequality with strings
console.log("Test for equality");
console.log("grapes" == "grapes");
console.log("grapes" == "grapes");
//  Tests using the lower case function
console.log("Test for lowerCase");
console.log("Grapes".toLowerCase() == "grapes");
// numerical test
console.log("Numerical test");
console.log(5 > 2);
console.log(2 < 1);
// Tests using "and" and "or" operators
console.log("Tests for 'and' and 'or' operators");
console.log(true && false);
console.log(true || false);
// Test whether an item is in a array
let arr = ["ahmed", "danish", "raza"];
console.log("ahmed include in arr");
console.log(arr.includes("ahmed"));
// Test whether an item is not in a array
let arrs = ["ahmed", "danish", "raza"];
console.log("basit can't include  in arr");
console.log(arr.includes("basit"));
// question#25
let alien_color = "green";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
// (The version that fails will have no output.)
alien_color = "red";
if (alien_color === "green") {
}
// question#26
alien_color = "green";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
}
// version the else block
alien_color = "red";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
}
// question#27
alien_color = "green";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color === "red") {
    console.log("you just earned 15 points ");
}
alien_color = "yellow";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color === "red") {
    console.log("you just earned 15 points ");
}
alien_color = "red";
if (alien_color === "green") {
    console.log("you just earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("you just earned 10 points");
}
else if (alien_color === "red") {
    console.log("you just earned 15 points ");
}
// question#28
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder");
}
// question#29
let favourite_fruits = ["Apple", "Grapes", "Bananas", "Mango", "cheries"];
if (favourite_fruits.includes("Apple")) {
    console.log("I really like Apple!");
}
if (favourite_fruits.includes("Bananas")) {
    console.log("I really like Bananas!");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}
if (favourite_fruits.includes("cheries")) {
    console.log("I really like cheries!");
}
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}
// question#30
let userNames = ["admin", "user1", "user2", "user3", "user4"];
userNames.forEach(userName => {
    if (userName === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
});
// question#31
let users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
}
// question#32
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUsers => {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase()))
        console.log(`${newUsers} will need to enter a new username.`);
    else {
        console.log(`${newUsers} are avilable`);
    }
});
// question#33
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(number => {
    let suffix = "th";
    if (number === 1)
        suffix = "st";
    if (number === 2)
        suffix = "nd";
    if (number === 3)
        suffix = "rd";
    console.log(`${number}${suffix}`);
});
// question#34
let pizzas = ["Margherita", "Pepperoni", "Hawaiian"];
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
// question#35
let animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// question#36
function make_shirt(size, messege) {
    console.log(`Making a ${size} t_shirt with the messege ${messege},printed on it.`);
}
make_shirt("medium", "Code of life");
// question#37
function make_shirts(size = "large", messege = "I love Typescript") {
    console.log(`Making a ${size} t_shirt with the messege ${messege},printed on it.`);
}
make_shirts();
make_shirt("medium", "Code of life");
make_shirt("small", "I love coding");
// question38
function describe_cities(cities, countries = "Pakistan") {
    console.log(`${cities} is in ${countries}.`);
}
describe_cities("karachi");
describe_cities("Lahore");
describe_cities("tokyo", "Japan");
// question#39
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// question#40
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album[`tracks`] = tracks;
    }
    return album;
}
console.log(make_album("Artist one:", "The first album"));
console.log(make_album("Artist two:", "The second album"));
console.log(make_album("Artist three:", "The third album"));
// question#41
let magicians = ["Ahmed", "Danish", "Raza"];
function make_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_magicians(magicians);
// question#42
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " The great";
    }
}
make_great(magicians);
make_magicians(magicians);
// question#43
// let magicians=["Ahmed","Danish","Raza"]
function mak_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}
let greatMagicians = mak_great(magicians.slice());
console.log("Original Magicians");
make_magicians(magicians);
console.log("Great Magicians");
make_magicians(greatMagicians);
// quuestion#44
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("chilli", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
// question#45
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
