//*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

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








