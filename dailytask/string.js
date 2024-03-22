let str="hello everyone";
if (str.startsWith('hello')){
    console.log('str start with hello');
}else{
    console.log('str not start with hello');
}

let str1="hello bro";
if(str1.endsWith('bro')){
    console.log('str ends with bro');    
}else{
    console.log('str not ends with bro');
}

let padst="hello";
let padded=padst.padStart(10,"*");
console.log(padded);

let padend="hello";
let paden=padend.padEnd(6,'*');
console.log(paden);

let vehicle="car bike bus truck train";
let splitted=vehicle.split(" ");
console.log(splitted);

let text = "How are you doing today?";
const myArray = text.split(" ",4);
console.log(myArray);
