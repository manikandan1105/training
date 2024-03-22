let height = 5;

for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}



let size = 5;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '* ';
    }
    console.log(row);
}

//upper left triangle
let height1 = 5;
for (let i = 1; i <= height1; i++) {
    console.log('*'.repeat(i));
}
//upper right triangle
let n = 5;
for (let i = 1; i <= n; i++) {
	let str = "* ";
	let space = ' ';
	console.log(space.repeat((n-i))+str.repeat(i));
}

//lower left triangle
let m = 5;
for (let i = m; i >= 1; i--) {
	let str = "* ";
	let space = ' ';
	console.log(space.repeat(m-i)+str.repeat(i));
}

//lower right triangle
let k = 5;
for (let i =k; i >= 1; i--) {
	let str = "* ";
	console.log(str.repeat(i));
}
