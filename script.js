//Write a JavaScript function to calculate the sum of two numbers. 

function SumofTwoNumber(num1,num2) {
    return num1 + num2
}
console.log(SumofTwoNumber(3,7));

//Write a JavaScript program to find the maximum number in an array.

function MaxNumber(...arr){
    return Math.max(...arr)
}
console.log(MaxNumber(2,5,7,3,6,9,12,15))
//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
    const reverseStr = str.split("").reverse().join("")
    if(reverseStr == str){
        return true
    } else{
       return false
    }
}
console.log(isPalindrome("Javeed"))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function ArrofEvenNum(...arr){
    let arr1 = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            arr1.push(arr[i])
        }
    }
    return arr1
}
console.log(ArrofEvenNum(1,2,3,4,5,6,7,8,10,12,14,13))

//Write a JavaScript program to calculate the factorial of a given number
function factorial(num){
    let ans = 1
    if(num == 0){
        return 1
    }
    for(let i=num; i>0; i--){
        ans = ans * i 
    }
    return ans
}
console.log(factorial())

//Write a JavaScript function to check if a given number is prime

function isPrime(num){
    if(num % 2 ==0){
        return false
    }
    if(num<2){
        return false
    }
    if(num == 2){
        return false
    }
    for(let i=3; i*i<=num; i+=2){
        if(num % i == 0){
            return false
        } else{
            return true
        }
    }
}
console.log(isPrime(11));

//Write a JavaScript program to find the largest element in a nested array
function maxElement(nestedArray){
    let flatArray = nestedArray.flat(Infinity);
    return Math.max(...flatArray)
}
console.log(maxElement([[100,200],300,[500,700]]))

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

// function Fibonacci(num){
//   let arr = [];
//   let a = 1;
//   let b = 0;
//   for(let i=0; i<num; i++){
//     arr.push(b);
//     b = a + b;
//     a = b -a
//   }
//   return arr
// }
// console.log(Fibonacci(10))

function Fibonacci(num){
    if(num<0) return [];
    if(num == 1) return [0];
    if(num == 2) return [0,1];
    let arr = [0,1]
    for (let i = 2; i<num; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr
}
console.log(Fibonacci(10))


//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function TitleCase(str){ // (capitalize the first letter of each word)
    return str.toLowerCase()
            .split(" ")
            .map((word) =>word.charAt(0).toUpperCase() +word.slice(1) )
            .join(" ")
}
console.log(TitleCase("hello world! this is javascript."))

//Write a function that takes an array of objects and a key, and 
// returns a new array sorted based on the values of that key in ascending order. 
function sortByKey(arr,key){
    return arr.sort((a,b) => a[key] - b[key]);
}
const data = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
];
console.log(sortByKey(data, 'age'));

// Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
const original = {
    name: "Alice",
    age: 25,
    skills: ["JavaScript", "React"],
    address: {
        city: "New York",
        zip: 10001
    }
};
const copied = deepClone(original)
copied.name = "Bob";
copied.address.city = "San Francisco";

console.log(original.address.city); 
console.log(copied.address.city);

function countdown(n) {
    if (n <= 0) {  // Base Case: Stop when n reaches 0
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);  // Recursive Call
}

countdown(5);

//Write a recursive function to calculate the factorial of a given number
function Factorial(num){
    if(num == 0) return 1
    return  num * Factorial(num - 1)
}
console.log(Factorial(5))

//Implement a function that takes two sorted arrays and merges them into 
// a single sorted array without using any built-in sorting functions.
function MergeArr(arr1,arr2){
   let newArr = [];
   let i = 0;
   let j = 0;

   while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        newArr.push(arr1[i])
        i++
    } else {
        newArr.push(arr2[j])
        j++
    }
   }

   while(i<arr1.length){
    newArr.push(arr1[i])
    i++
   }

   while(j<arr2.length){
    newArr.push(arr2[j])
    j++
   }
   return newArr
}
console.log(MergeArr([1, 3, 5, 7], [2, 4, 6, 8]))

//Write a function that checks if a given string is a palindrome, 
// considering only alphanumeric characters and ignoring case. 

function ispalindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return cleanStr == cleanStr.split(" ").reverse().join("")
}
console.log(ispalindrome("malayalam"))

function palindrome(str){// without inbuild method

    let cleanStr = '';
    for(let i =0;i<str.length; i++){
        let char = str[i].toLowerCase();
        if(char>='a' && char<='z' || char>='0' && char<='9'){
            cleanStr += char
        }
    }
    let left = 0;
    let right = cleanStr.length - 1;
    while(left<right){
        if(cleanStr[left] !== cleanStr[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}
console.log(palindrome("MalayaLAM"))

//Implement a function to reverse a string without using the built-in reverse() method
function reverseStr(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}
console.log(reverseStr("Javeedkhan"))

//Given an array of numbers, write a function to find the largest and smallest numbers in the array.
function LargestandSmallest(arr){
    let Largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return [Largest,smallest]
}
console.log(LargestandSmallest([1, 3, 5, 7]))

function MinandMax(arr){
    if(arr == 0){
        return null;
    };
    let largest = arr[0];
    let smallest = arr[0];
    for(let i=1; i<arr.length;i++){
        if(arr[i]>largest){
            largest =arr[i]
        }
        if(arr[i]<smallest){
            smallest =arr[i]
        }
    }
    return [largest,smallest]
}
console.log(MinandMax([1, 3, 5, 7]))

//Write a function that takes an array of integers as input and returns a new array with only the unique elements
function getUniqueElement(str){
    let newArr = [];
    for(let i=0; i<str.length; i++){
        if(!newArr.includes(str[i])){
            newArr.push(str[i])
        }
    }
    return newArr
}
console.log(getUniqueElement([1, 2, 3, 2, 4, 5, 1, 6]))

//Implement a function to find the sum of all the numbers in an array.
function SumofArr(arr){
    let newArr = 0;
    for(let i=0; i<arr.length; i++){
        newArr += arr[i]
    }
    return newArr
}
console.log(SumofArr([1, 2, 3, 2, 4, 5, 1, 6]));

//Implement a function to remove duplicates from an array.
function RemoveDuplicate(str){
    let newArr = '';
    for(let i=0; i<str.length; i++){
        if(!newArr.includes(str[i])){
            newArr += str[i]
        }
    }
    return newArr
}
console.log(RemoveDuplicate('Javeedkhan'))

//Write a function that sorts an array of numbers in ascending order
function Ascending(arr){
    let n = arr.length;
    for(let i=0; i<n -1; i++){
        for(let j=0; j<n-1-i; j++){
           if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
           }
        }
    }
    return arr
}
console.log(Ascending([1, 2, 3, 2, 4, 5, 1, 6]))

function countCharacterOccurrences(str) {
    let charCount = {};

    for(let i=0; i<str.length; i++){
        let char  = str[i]

        if(charCount[char]){
            charCount[char] += 1
        }
        else{
            charCount[char] = 1
        }
    }
    return charCount
}

const inputString = "hello world";
const result = countCharacterOccurrences(inputString);
console.log(result);  

//Implement a function that finds the second Largest element in an array of integers
function SecondLargest(arr){
    let secondlarger = 0;
    let larger = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>larger){
            secondlarger = larger;
            larger = arr[i]
        }else if(arr[i]>secondlarger && arr[i] != larger){
            secondlarger = arr[i]
        }
    }
    return secondlarger
}
console.log(SecondLargest([1, 2, 3, 2, 4, 5, 1, 6]))
