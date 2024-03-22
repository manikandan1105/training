const prompt=require('prompt-sync')();
//check studentpass mark
const passmark=50;
const studentmark=prompt("enter the student mark:");
if(studentmark>=passmark){
    console.log('pass');
}else{
    console.log('fail');
}
//check password correct or not
const password1=prompt("enter the password:");
const password2=prompt("enter the password again:");
if(password1==password2){
    console.log('correct password');
}else{
    console.log('incorrect password');
}

//check number is odd or even
const number=prompt("enter the number:");
if(number%2==0){
    console.log('even number');
}else{
    console.log('odd number');
}

//check attendence percentage
const totalatt=100;
const autualatt=prompt("enter the autualattendence:");
const percentage=Number(autualatt/totalatt)*100;
if(percentage>=75){
    console.log('allowed');
}else{
    console.log('not allowed');
}

//number is positive or negative
const num=prompt("enter thr number:");
if(num>0){
    console.log('positive');
}else if(num<0){
    console.log('negative');
}else{
    console.log('zero');
}

//check experience and salary give increament of 5%

let yearofexperience=prompt("enter the year of experience:");
let currentsalary=prompt("enter the salary:");
if(yearofexperience>3 && currentsalary<=30000){
    revisedsalary=Number(currentsalary)+(currentsalary*(5/100));
    console.log(revisedsalary);
}else{
    console.log('not eligible');
}

//check billamount is 2000 then give 10% discount

let billamount=prompt("enter the amount:");
let totalbill=Number(billamount)-(billamount*(10/100));
if(billamount>=2000){
    console.log(totalbill);
}else{
    console.log(billamount);
}

//check square or not

let length=prompt("enter the length:");
let breadth=prompt("enter the breadth:");
if(length==breadth){
    console.log('square');
}else{
    console.log('not square');
}