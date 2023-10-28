"use strict";
// // // // Question 2
// // // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
// // // // Answer 
// // // let usernme= ("Fatima")
// // // console.log("Salaam,I am Fatima Muhammad Ali,today i will enlighten u about Typescript")
// // //Name Cases: Store a person’s name in a variable, and then print that person’s name
// // // in lowercase, uppercase, and titlecase.
// // // let nameFormat: string = "Fatima";
// // // let toUpperCase = nameFormat.toUpperCase();
// // // let toLowerrCase = nameFormat.toLowerCase();
// // // let toTitleCase = nameFormat.replace(/\b\w/g, function (char) {return char.toUpperCase(); });
// // // console.log(toUpperCase )
// // //Question 4
// // // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// // // Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// // // let usernme=(" Mae West")
// // //  console.log(" You only live once, but if you do it right, once is enough. ")
// // // Question 5
// // // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// // // Question6
// // // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// // // let book1 = "The cruel prince"
// // // let book2 = "The lost sisters"
// // // console.log(`best seller books are \n ${book1} \t ${book2}`)
// // //Question7
// // // Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// // // console.log(2+2)
// // // console.log()
// // // Question8
// // // You should create four lines that look like this:
// // // console.log(2+8)
// // // console.log(2+8)
// // // console.log(2+8)
// // // console.log(2+8)
// // // question9
// //  // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// // // let favoritenum = 2
// // // console.log(`my favourite number is ${favoritenum}`) 
// // // question10 
// // // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// // //  If you don’t have anything specific to write because your programs are too simple at this point, just add your 
//       name and the current date at the top of each program file.
// // //   Then write one sentence describing what the program does.
// // // let friend = "unknown"
// // // //this is my friend
// // // console.log(unknown)
// // // question 11
// // // Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// // let names: string[] = ["unknown1","unknown2"];
// // for (let i = 0;i < names.length; i++) {
// //     console.log(names[i]);
// // }
// // // Question12
// // // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// // // let names: string[] = ["unknown1","unknown2"];
// // // let greetings: string = "Salaam,";
// // // for (let i = 0;i < names.length; i++) {
// // //     console.log(names[i] = "!");
// // // }
// // Question13
// // Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// // let favouriteTransportation: string[] = ["porsche","Tesla","Ferrari","Lamborghini","Audi"];
// // for (let i = 0; i <favouriteTransportation.length;i++) {
// //     console.log("I would like to own a" + favouriteTransportation[i] + "car.");
// // }
// // Question14
// // Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// // let guestlist = ["unknown","unknwon","unknown"];
// // for (let i = 0; i < guestlist.length; i++) {
// //    console.log("Dear" + guestlist[i] + ", you are cordially invited to a dinner at my place.I would be
// //  honoured to have your accompany,");
// // }
// // Question15
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // • Print a second set of invitation messages, one for each person who is still in your list.
// // let guestlist = ["unknown", "unknown", "unknown"]; 
// // for (let i = 0; i < guestlist.length; i++) { console.log("Dear " + guestlist[i] + ", you are cordially invited to a dinner at my place. I would be honored to have your company."); }  let cancelledGuest = "unknown"; console.log("Unfortunately, " + cancelledGuest + " can't make it to the dinner.");
// //   let newGuest = "New Invitee"; guestlist[1] = newGuest;
// //  console.log("\nSecond set of invitations:"); for (let i = 0; i < guestlist.length; i++) { console.log("Dear " + guestlist[i] + ", you are cordially invited to a dinner at my place. I would be honored to have your company."); } 
// //  let additionalGuests = ["Friend1", "Friend2", "Friend3"]; console.log("\nAdditional guests invited:"); 
// //  for (let i = 0; i < additionalGuests.length; i++) { console.log("Dear " + additionalGuests[i] + ", you are cordially invited to a dinner at my place. I would be honored to have your company."); }
// // Question16
// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// // let guestlist: string[] = ["Guest1", "Guest2", "Guest3"];
// // console.log("Great news! We found a bigger dinner table.");
// // guestlist.unshift("NewGuestAtBeginning");
// // guestlist.splice(Math.floor(guestlist.length / 2), 0, "NewGuestInMiddle");
// // guestlist.push("NewGuestAtEnd");
// // console.log("\nUpdated set of invitations:");
// // guestlist.forEach((guest, index) => {
// //   console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. I would be honored to have your company.`);
// // });
// // Question17
// // // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// // let guestlist: string[] = ["Guest1", "Guest2", "Guest3", "NewGuestAtBeginning", "NewGuestInMiddle", "NewGuestAtEnd"];
// // console.log("Unfortunately, we can only invite two people for dinner.");
// // while (guestlist.length > 2) {
// //   const removedGuest = guestlist.pop();
// //   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// // }
// // guestlist.forEach((guest) => {
// //   console.log(`Dear ${guest}, you are still invited to dinner.`);
// // });
// // guestlist.length = 0;
// // console.log("Updated guest list:", guestlist)
// // Question18
// // Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
// // • Print your array in alphabetical order without modifying the actual list.
// // • Show that your array is still in its original order by printing it.
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// // • Show that your array is still in its original order by printing it again.
// // • Reverse the order of your list. Print the array to show that its order has changed.
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let placesToVisit: string[] = ["Maldives", "Tokyo", "New York", "Switzerland", "Sydney"]
// console.log("Original Order:", placesToVisit);
// console.log("Alphabetical Order:", [...placesToVisit].sort());
// console.log("Original Order:", placesToVisit);
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// console.log("Original Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Original Order:", placesToVisit);
// placesToVisit.sort();
// console.log("Alphabetical Order:", placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Reverse Alphabetical Order:", placesToVisit);
// Question19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// let guestlist = ["unknown", "unknown", "unknown"];
// for (let i = 0; i < guestlist.length; i++) {
//   console.log("Dear " + guestlist[i] + ", you are cordially invited to a dinner at my place. I would be honored to have your company.");
// }
// console.log("We are inviting " + guestlist.length + " people to dinner.");
// Question20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let flowers: string[] = ["Ghost Orchid ", "Fire Lily ", " Chocolate Cosmos", "Kadupul Flower", "Jade Vine", "Rothschild’s Slipper Orchid ", "Middlemist Red flower"];
// console.log("List of flowers:");
// flowers.forEach((flowers, index) => {
//   console.log(index + 1, flowers);
// });
// Question21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create a car object
// const mobile = {
//     make: "Samsung",
//     model: "Galaxy S23",
//     year: 2023,
//     color: "Graphite"
//   };
//   // Print the car information
//   console.log("mobile Information:", mobile);
// Question22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const fruits: string[] = ["apple", "banana", "cherry"];
// try {
//   console.log(fruits[3]);
// } catch (error) {
//   console.log("Index error:", error.message);
// }
// const validIndex = 1;
// console.log("Fruit at index", validIndex, "is", fruits[validIndex]);
// Question23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let num1 = 5;
// let num2 = 10;
// let text1 = 'hello';
// let text2 = 'world';
// let isTrue = true;
// let isFalse = false;
// console.log("Test 1: num1 is equal to 5. I predict True.");
// console.log(num1 == 5);
// console.log("Test 2: num2 is greater than num1. I predict True.");
// console.log(num2 > num1);
// console.log("Test 3: text1 is not equal to text2. I predict True.");
// console.log(text1 != text2);
// console.log("Test 4: isTrue is true. I predict True.");
// console.log(isTrue);
// console.log("Test 5: num1 is less than or equal to num2. I predict True.");
// console.log(num1 <= num2);
// console.log("Test 6: num1 is greater than num2. I predict False.");
// console.log(num1 > num2);
// console.log("Test 7: text1 is equal to text2. I predict False.");
// console.log(text1 == text2);
// console.log("Test 8: isFalse is true. I predict False.");
// console.log(isFalse);
// console.log("Test 9: num2 is not equal to 10. I predict False.");
// console.log(num2 != 10);
// console.log("Test 10: num2 is less than num1. I predict False.");
// console.log(num2 < num1);
// Question24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
//  comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// et str1 = 'apple'; let str2 = 'banana'; let num1: number; let num = 5; 
// let num2 = 10; let fruits = ['apple', 'banana', 'cherry']; 
// Tests for equality and inequality with strings console.log("String Equality (True):", str1 === 'apple'); console.log("String Inequality (False):", str2 !== 'banana'); 
// Tests using the lowercase function console.log("Lowercase Function (True):", str1.toLowerCase() === 'apple'); console.log("Lowercase Function (False):",
//  str2.toLowerCase() === 'cherry'); 
//  Numerical tests console.log("Numerical Inequality (True):", num !== 3); console.log("Greater Than (True):", num2 > 5); console.log("Less Than (True):", num1 < 7); console.log("Greater Than or Equal To (False):", num2 >= 15); console.log("Less Than or Equal To (False):", num <= 3); 
//  Tests using "and" and "or" operators console.log("Logical AND (True):", num1 < 10 && num2 > 5); console.log("Logical OR (False):", num1 > 10 || num2 < 5); 
//  Test whether an item is in an array console.log("Array Inclusion (True):", 
//  fruits.includes("banana")); 
//  console.log("Array Exclusion (False):", !fruits.includes('apple'));
// Question25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alien_color = 'green';
// if (alien_color === 'green') {
//     console.log("Player just earned 5 points.");
// }
// if (alien_color === 'green') {
//     console.log("Player just earned 5 points.");
// }
// Question26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
// import * as readline from 'readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// // Use a different variable name for user input
// rl.question("Choose the alien's color (green, yellow, or red): ", (userInput) => {
//     const alien_color = userInput.toLowerCase(); 
//     if (alien_color === 'green') {
//         console.log("you just earned 5 points for shooting the green alien.");
//     } else if (alien_color === 'yellow' || alien_color === 'red') {
//         console.log(`you just earned 10 points for shooting the ${alien_color} alien.`);
//     } else {
//         console.log("Invalid color choice. Player didn't earn any points.");
//     }
//     rl.close();
// });
// Question27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// function checkAlienColor(alien_color) {
//     if (alien_color === 'green') {
//         console.log("Bravo! earned 5 points.");
//     } else if (alien_color === 'yellow') {
//         console.log("Superb! earned 10 points.");
//     } else {
//         console.log("Congrats! you earned 15 points.");
//     }
// }
// checkAlienColor('green');
// checkAlienColor('yellow');
// checkAlienColor('red');
// Question28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// const age: number = 27; 
// if (age < 2) {
//   console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//   console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//   console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//   console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//   console.log("The person is an adult.");
// } else {
//   console.log("The person is an elder.");
// }
// Question29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas
// const favorite_fruits: string[] = ["Watermelon", "strawberries", "Berries","Oranges","Grapes"];
// if (favorite_fruits.includes("Watermelon")) {
//   console.log("I really like Watermelon!");
// }
// if (favorite_fruits.includes("strawberries")) {
//   console.log("I really like strawberries!");
// }
// if (favorite_fruits.includes("Berries")) {
//   console.log("I really like Berries!");
// }
// if (favorite_fruits.includes("oranges")) {
//   console.log("I really like oranges!");
// }
// if (favorite_fruits.includes("grapes")) {
//   console.log("I really like grapes!");
// }
// Question30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
// const usernames: string[] = ["admin", "Ibrahim", "Fatima", "Huzaifa", "Musa"];
// for (const username of usernames) {
//   if (username === "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again.`);
//   }
// }
// Question31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
// const usernames: string[] = [];
// if (usernames.length === 0) {
//   console.log("Oh no, there are no users! We need to find some users!");
// } else {
//   for (const username of usernames) {
//     if (username === "admin") {
//       console.log("Hello admin, would you like to see a status report?");
//     } else {
//       console.log(`Hello ${username}, thank you for logging in.`);
//     }
//   }
// }
// Question32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// const current_users: string[] = ["Ibrahim", "Fatima", "Huzaifa", "Musa", "Andrew"];
// const new_users: string[] = ["Mike", "emily", "SUSAN", "david", "jason"];
// for (const new_user of new_users) {
//   const usernameTaken = current_users.some(
//     (user) => user.toLowerCase() === new_user.toLowerCase()
//   );
//   if (usernameTaken) {
//     console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
//   } else {
//     console.log(`Great news! The username '${new_user}' is available.`);
//   }
// }
// Question33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numbers) {
//   const ordinalEnding =
//     number % 10 === 1
//       ? "st"
//       : number % 10 === 2
//       ? "nd"
//       : number % 10 === 3
//       ? "rd"
//       : "th";
//   console.log(`${number}${ordinalEnding}`);
// }
// Question34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// const favoritePizzas: string[] = ["Hawaiian", "Margherita", "Mushroom Swiss"];
// const pizzaLoveLevel: string[] = [
//   "I savor the classic taste of",
//   "There's something special about",
//   "I can't resist a slice of",
// ];
// for (const pizza of favoritePizzas) {
//     const loveStatement = pizzaLoveLevel[Math.floor(Math.random() * pizzaLoveLevel.length)];
//   console.log(`${loveStatement} ${pizza} pizza.`);
// }
// const overallLoveStatement: string = "Pizza is more than a dish; it's a way of life! I truly, madly, deeply love pizza!";
// console.log(overallLoveStatement);
// Question35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
//  and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as
//  A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a
//  sentence such as Any of these animals would make a great pet!
// const animals: string[] = ["Dogs", "Cats", "Rabbits"];
// const commonCharacteristic = "They are known for being popular pets.";
// for (const animal of animals) {
//   let statement: string = ""; 
//   if (animal === "Dogs") {
//     statement = "A dog is known for its loyalty and makes a great companion.";
//   } else if (animal === "Cats") {
//     statement = "Cats are independent and make wonderful, low-maintenance pets.";
//   } else if (animal === "Rabbits") {
//     statement = "Rabbits are gentle and make cute and friendly pets for families.";
//   }
//   console.log(`${animal}: ${statement}`);
// }
// console.log(`What these animals have in common: ${commonCharacteristic}`);
// Question36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function makeShirt(size: string, message: string): void {
//     console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
//   }
//   makeShirt("Large", "Hello, World!");
// Question37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function makeShirt(size: string = "Large", message: string = "Drink H-2-O"): void {
//     console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
//   }
//   makeShirt();
//   makeShirt("Medium");
//   makeShirt("Small", "TypeScript is awesome!");
// Question38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describeCity(city: string, country: string = "Unknown Country"): void {
//     console.log(`${city} is in ${country}.`);
//   }
//   describeCity("Karachi", "Pakistan");
//   describeCity("Malabo");
//   describeCity("Texas", "USA");
// Question39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned. 
// function cityCountry(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
//   const city1 = cityCountry("Lahore", "Pakistan");
//   const city2 = cityCountry("Amsterdam", "Netherlands");
//   const city3 = cityCountry("Cape Town", "South Africa");
//   console.log(city1);
//   console.log(city2);
//   console.log(city3);
// Question40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing
//  the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
//   }
//   function makeAlbum(artist: string, title: string, tracks?: number): Album {
//     const album: Album = { artist, title };
//     if (tracks !== undefined) {
//       album.tracks = tracks;
//     }
//     return album;
//   }
//   const album1 = makeAlbum("Tylor SWift", "1989");
//   const album2 = makeAlbum("Jane Smith", "Love Songs", 12);
//   const album3 = makeAlbum("Sam Brown", "Acoustic Sessions", 10);
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);
// Question41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function showMagicians(magicians: string[]): void {
//     console.log("Magicians:");
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
//   const magicianNames: string[] = ["Mysto ", "Sorceress ", " Ezra", "Luna "];
//   showMagicians(magicianNames);
// Question42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// function showMagicians(magicians: string[]): void {
// console.log("Magicians:");
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
//   function makeGreat(magicians: string[]): string[] {
//     return magicians.map((magician) => `The Great ${magician}`);
//   }
//   const magicianNames: string[] = ["Mysto", "Sorceress", " Ezra", "Luna"];
//   const greatMagicians = makeGreat(magicianNames);
//   showMagicians(greatMagicians);
// Question43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’
//  names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with
//   each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function showMagicians(magicians: string[]): void {
//     console.log("Magicians:");
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
//   function makeGreat(magicians: string[]): string[] {
//     return magicians.map((magician) => `The Great ${magician}`);
//   }
//   const magicianNames: string[] = ["Mysto the Magnificent", "Sorceress Seraphina", "The Enigmatic Ezra", "Luna the Illusionist"];
//   const greatMagicians = makeGreat([...magicianNames]); // Creating a copy using the spread operator
//   showMagicians(magicianNames);
//   showMagicians(greatMagicians);
// Question44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
//  collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some items.");
    }
    else {
        console.log("Your sandwich includes:");
        items.forEach((item) => {
            console.log(`- ${item}`);
        });
    }
}
orderSandwich("Chicken", "Cheese");
orderSandwich("Turkey", "Avocado");
orderSandwich("Lettuce", "Tomato", "Cucumber", "Cheese");
