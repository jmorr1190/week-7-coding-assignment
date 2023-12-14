// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

    //* a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
       //* - Do not use numbers to reference the last element, find it programmatically.
        //* - ages[7] - ages[0] is not allowed!
    //* b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    //* c. Use a loop to iterate through the array and calculate the average age.

    let ages = [3, 9, 23, 64, 2, 8, 28, 93] 


    // Arrow Function
const youngOld = (myArray) => {
    console.log("this is my array data", myArray)
var firstElement = myArray[0] //This is the first element of the myArray.
console.log("zero", firstElement)
var lastElement = myArray[myArray.length-1] //This is the last element of myArray
console.log(lastElement)
// console.log(myArray.length -1) 
console.log("Question 1A:", lastElement- firstElement)


    return 
};

// calling the arrow function

youngOld(ages)

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name. 
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  

let sum= 0;

for (let i = 0; i < names.length; i++) {
    sum += names[i].length; 
    //this is where we find the amount of letters in the name array

}
average = sum / names.length;

// this is where we find the average for the names.length

console.log(average); 

let string = names.join(' ');

console.log(string)

//using the join method I was able to take names in the console and separte them. To have a space inbetween the names put a space inbetween the quotes in the (' ').

// 3. How do you access the last element of any array?

//To access the last element of any array your code would have this in it myArray.length-1. By using the .length-1 you are able to access the last element 

// 4. How to access the first element of any array?

// In the above code to access the first ellement it would look something like this. let firstElement = names.shift();

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 

const nameLengths = [];

// Loop through each name and add its length to nameLengths array
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const length = name.length;
    nameLengths.push(length);
// this is where we push the lenght of the name instead of the acctual name
}

console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

 console.log(sum); // Did not need to rewrite this code since we wrote it on line 38. When I did write the loop again and asked for the sum I recieved double the sum because I was not using Const. This could pose a problem later on when working on longer projects with more code.

 // I also need to make sure that I do not have extra lines of code floating around. This can cause miscalculations and leaving out of names. 


 //7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

 let start = "Cats";
 let repeat = 4;
 let repeatedStart = "Cats";
  
 for (let i = 0; i < repeat-1; i++) {
     repeatedStart += start;
 }
 console.log(repeatedStart);
 
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function name (a, b); {
    var a = "Jacklyn";
    var b = "Orr";
    var ab = a + b
    return ("a" + "b");
}
console.log(return)

    console.log(fullName)
}












