let petname = "Buster"; //declares a var equal to a string called Buster


console.log("my pet's name is " + petname);
/*
1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
*/
var ages = [3,9,23,64,2,8,28,93]
console.log(ages)


/*
1a.	Programmatically subtract the value of the first element in the array
from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!
*/
function subtractAges(beggingAge, endingAge){
    subtractAges = beggingAge-endingAge;
    console.log("subtract Age is" + subtractAges)
}





/*
1b.	Add a new age to your array and repeat the step above to ensure
 it is dynamic. (works for arrays of different lengths).
*/


/*
1c.	Use a loop to iterate through the array and calculate the average age. 
*/



/*
2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
*/
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

/*
2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
*/
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let sum = 0;
for (let i = 0; i < names.length; i++)



/*
2b.	Use a loop to iterate through the array again
 and concatenate all the names together, separated by spaces. 
*/
var concatenate = '';
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let sam = 0;
for (let i = 0; i < names.length; i++){
    //Runs 3 times, with values of step 0 through 2
concatenate += names[i] +(" ")
   
}
 console.log(concatenate);



/*
3.	How do you access the last element of any array?
*/
let pizza = [0,1,2,5];
console.log("this is my pizza array:",pizza);
console.log("this is the length of my pizza array:",pizza.length);
console.log("this is the last element of my pizza array:",pizza[pizza.length -1]);



/*
4.	How do you access the first element of any array?
*/
var arrayOne = [7,8,9,11]
function getFirstValue(someArray){
    return someArray[0];
}
console.log(getFirstValue(arrayOne));







/*
5.	Create a new array called nameLengths. Write a loop to 
iterate over the previously created names array and 
 add the length 
 of each name to the nameLengths array.
For example:i



 //create this new array[5, 3, 4]
*/

const nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);

}
console.log(nameLengths);




/*
6.	Write a loop to iterate over the nameLengths
 array and calculate the sum of all the elements in the array. 
*/
var nameSums = 0;
for(let i=0; i < nameLengths.length; i++) {
    nameSums = nameSums + nameLengths[i];


}

console.log('this is my index;', nameSums);

/*
7.	Write a function that takes two parameters, 
word and n, as arguments and returns the word concatenated to itself n number of times.
 (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
*/
function myFunction(word, n){


    if (n > word){
        return false;
}else{
}
        return word - n;
    }
    console.log('Hello * 3')

    



/*
8.	Write a function that takes two parameters, firstName and lastName,
 and returns a full name.
•	The full name should be the first and the last name separated by a space.
*/
 function FullName(firstName, lastName){//begginingoffunction
    //console.log(firstName + " " + lastName);
    let myFullName = firstName + " " + lastName
    // FullName('Brenda', 'Galaviz')
    //console.log("this is my FullName:", myFullName)
return myFullName

    } //endoffunction
    console.log(FullName('Brenda', 'Galaviz'))

/*9.	Write a function that takes an array of numbers
 and returns true if the sum of all the numbers
  in the array is greater than 100.
*/
var sum1 = 0
function arrayNumbers(parameter){
    console.log(parameter)
}
var numbers = [22,16,87,89];
arrayNumbers(numbers)
sum1 = sum1 + numbers

/*10.	Write a function that takes 
an array of numbers
 and returns the average of all the elements in the array.
 */







/*11.	Write a function that takes two arrays of numbers
 and returns true if the average of the elements 
 in the first array is greater than the average of the elements in the second array.
 */
/*
12.	Write a function called willBuyDrink
 that takes a boolean isHotOutside, and a number moneyInPocket, 
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
function willBuyDrink(){
    const isHotOutside = Boolean(expression);
    const moneyInPocket = (10.50)//true
return willBuyDrink = true
console.log('is hot outside')


}

/*
13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it.
*/
var number = 'seven'
function isSeven(parameter){
    if (parameter == 'seven'){
        return true;
     } 
     else return false
    
}
console.log(isSeven('seven'));

 