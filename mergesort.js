// //1. Write a function that takes in a string and returns it 
//when reversed
let food="eating"
function reverseString(str){
    return str.split("").reverse().join("");
    
}console.log(reverseString(food));

// //2. Write a function that takes in the following array and 
// //consoles the target if it is found else null
function divideArray(num){
    if(num.length<=1){
        return num;
    }
let middle=Math.floor(num.length/2)
let left  =num.slice(0,middle)
let right =num.slice(middle) 
return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
    let emptyArray=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift())
        }

    }
    return[...emptyArray,...left,...right]
}let num = [2,8,0,23,5,45,76]
console.log(divideArray(num))
function binary(num,target){
let left=0;
let right=num.length-1;
while(left<=right){
    let middle=Math.floor((left+right)/2);
    if(num[middle]=== target){
        return middle;

    }
    else if(num[middle]< target){
        left=middle+1;
    }
    else{
        right=middle-1
    }
    let num = [2,8,0,23,5,45,76]
    target=23
}
return null





// //3. Given years between 2000 and 2023, console all the leap 
// //years in the following
// //sentence, i.e “2020 is a leap year” if not console log i.e
//“2001 is not a leap year”
// switch(years){
//     case 2000:
//         console.log("a is leap year");
//         break;
//     case 2001:
//         console.log("a is leap year");
//         break;
//     default:
//      console.log("a is not leap year");
//          break;  
// }
//4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers 
//are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
//if divisible by both 3 and 5
let num=0
divide(num)
 
function divide(num){
      
     while(  num<=100 ){
        num++
     
    if(num %5===0 && num %3===0){
       
        console.log ("fizzBuzz")
    }
     else if(num %5===0){
        console.log("fizz")
    }
     else if(num %3===0){
        console.log ("buzz")
    }
 }
}





// //5. Write a function that takes in an array of numbers and returns
// an array that has all
// //elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
multi(numArray)
function multi(arr){

for(let i=0;i<=arr.length-1;i++){
   console.log( arr[i]*4);
} 
 
}




// //6. Write a function that takes in an array of strings and returns 
// //an array with every element
// //turned into a number


const arrayOfStr=["10","24","45","56","67"];
// array_nums(arrayOfStr)
function array_nums(arrayOfStr){
const empty=[]
for(let i=0;i<= arrayOfStr.length-1;i++){
}
array_nums.push(perseInt(arrayOfStr[i]))
console.log(array_nums);
}
}
