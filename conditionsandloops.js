// Q1. What are conditional statements? Explain conditional statements with syntax and examples.

// conditions and loops in js are like : if ,else , else if , For example:

if(true){

}
else if(flase){

}
else{

}
// Q2. Write a program that grades students based on their marks^
// 8 If greater than 90 then A GradE
// 8 If between 70 and 90 then a B gradE
// 8 If between 50 and 70 then a C gradE
// 8 Below 50 then an F grade

let Studentmarks = 55;

if(Studentmarks >= 90){
    console.log("A");
}
else if(Studentmarks >= 70 ){
    console.log("B");
}
else if(Studentmarks >= 50){
    console.log("C");
}
else {
    console.log("F");
}

// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
// examples.

// Loops are a fundamental concept in programming that allow you to execute a block of code repeatedly under certain conditions. 
// 1. For Loop
// The for loop is used when the number of iterations is known beforehand. It iterates over a sequence (such as a list, tuple, string) or a range of numbers.

// Print numbers from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 2. While Loop
// The while loop is used when the number of iterations is not known and is determined by a condition. The loop continues as long as the condition is true.

// Print numbers from 0 to 4
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Q4. Generate numbers between any 2 given numbers.
// Ex
// 8 const num1 = 10
// 8 const num2 = 25;
// Output: 11, 12, 13, ...., 25

for(let i=11 ; i<= 25 ; i++){
    console.log(i);
}

// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.

let j = 1;
while(j <= 25){
    console.log(j);
    j++;
}


let k = 25;
while(k >= 1){
    console.log(k);
    k--;
}



