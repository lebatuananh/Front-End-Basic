let a = "Hello, MRA";
let b = "FK";
console.log("%s, %s", a, b);
console.log({
    'Email': '',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});
console.log(document.body);
document.getElementById("paragraph").textContent = "Xin chào cả nhà";
// let element = document.createElement('h1');
// element.textContent = "Basic Example";
// document.body.appendChild(element);
// alert('Tuấn Anh');
//
// let name = prompt("What you name");
// alert(name);
//
// let result = window.confirm("Bạn có muốn xóa không thế");
// console.log(result);

//using canvas
let canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 100;
let context = canvas.getContext('2d');
context.font = '30px Cursive';
context.fillText("Xin chào MRA", 50, 50);
document.body.appendChild(canvas);

//using svg

let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.textContent = 'Hello world!';
svg.appendChild(text);
document.body.appendChild(svg);

//image file
let img = new Image(200, 200);
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);

//Testing for NaN using isNaN()
//Not a Number.
isNaN(NaN); // true
isNaN(1); // false: 1 is a number
isNaN(-2e-4); // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity); // false: Infinity is a number
isNaN(true); // false: converted to 1, which is a number
isNaN(false); // false: converted to 0, which is a number
isNaN(null); // false: converted to 0, which is a number
isNaN(""); // false: converted to 0, which is a number
isNaN(" "); // false: converted to 0, which is a number
isNaN("45.3"); // false: string representing a number, converted to 45.3
isNaN("1.2e3"); // false: string representing a number, converted to 1.2e3
isNaN("Infinity"); // false: string representing a number, converted to Infinity
isNaN(new Date); // false: Date object, converted to milliseconds since epoch
isNaN("10$"); // true : conversion fails, the dollar sign is not a digit
isNaN("hello"); // true : conversion fails, no digits at all
isNaN(undefined); // true : converted to NaN
isNaN(); // true : converted to NaN (implicitly undefined)
isNaN(function () {
}); // true : conversion fails
isNaN({}); // true : conversion fails
isNaN([1, 2]); // true : converted to "1, 2", which can't be converted to a number

function f(param) {
    console.log("Is undefined?", param === undefined);
}

f();
f(1);
f(null);
f('a');
f(a);
let o = "a";
console.log(Number.MAX_VALUE * 2);
console.log("b" * 3);
Math.floor(1);
console.log(Math.floor(o));
//Measuring time
// console.time('response in: ');
// let number = window.prompt("Nhập số: ");
// alert(number);
// console.timeEnd('response in: ');

var elms = document.getElementsByTagName('*');
console.time('Loop time: ');
for (let i = 0; i < elms.length; i++) {

}
console.timeEnd('Loop time: ');

//Formatting console output
// %s Formats the value as a string
// %i or %d Formats the value as an integer
// %f Formats the value as a floating point value
// %o Formats the value as an expandable DOM element
// %O Formats the value as an expandable JavaScript object
// %c Applies CSS style rules to the output string as specified by the second parameter

console.log('%cHello world!', 'color: blue; font-size: xx-large');

console.log("%cHello %cWorld%c!!", // string to be printed
    "color: blue;", // applies color formatting to the 1st substring
    "font-size: xx-large;", // applies font formatting to the 2nd substring
    "/* no CSS rule*/" // does not apply any rule to the remaining substring
);

var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }]
;
console.table(personArr, ['name', 'personId', 'city', 'phoneNo']);

let str = String.fromCharCode(104, 101, 108, 108, 111);
console.log(str);


let s1 = 'L\'albero means tree in Italian';
console.log(s1);
// "L'albero means tree in Italian
let s2 = `"Escaping " and ' can become very annoying`;
let pElm = document.createElement('p');
pElm.textContent = s2;
document.body.appendChild(pElm);

// let element = document.createElement('h1');
// element.textContent = "Basic Example";
// document.body.appendChild(element);
var child = document.createElement('div');
let hello = '<p class="special">I&apos;d like to say "Hi"</p>';
child.textContent = hello;
document.body.appendChild(child);

function wordCount(val) {
    let wom = val.match(/\S+/g);
    return {
        charactersNoSpaces: val.replace(/\s+/g, '').length,
        characters: val.length,
        words: wom ? wom.length : 0,
        lines: val.split(/\r*\n/).length
    };
}

// Use like:
let result = wordCount('abcd aa23!#$ áđa/sđá a a a a').words; // (Number of words)
console.log(result);
let n3 = 10;
let b16h = n3.toString(16).toUpperCase();
console.log(b16h);

let myString = "abc";
let n = 3;
let array = new Array(n + 1).join(myString);
console.log(array);
let date = new Date();
console.log(date.toDateString());
let s5 = 'hello' && '';


let array1 = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
}];
let array3 = [{
    key: null,
    value: null
}];
console.log(array3);
let array2 = array3.reduce(function (obj, current) {
    obj[current.key] = current.value;
    return obj;
}, {});
console.log(array2);

let rs1 = ['one', 'two', 'three', 'four'].map(value => value.length);
console.log(rs1);

['one', 'two'].map(function (value, index, arr) {
    console.log(this); // window (the default value in browsers)
    return value.length;
});

let people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
}];
let young = people.filter(x => x.age < 35);
console.log(young);
let young1 = people.filter((obj) => {
    let flag = false;
    Object.values(obj).forEach((val) => {
        console.log("result:", typeof (Object.values(obj)));
        console.log(obj);
        console.log(val);
        if (String(val).indexOf("J") > -1) {
            flag = true;
            return;
        }
    });
    if (flag) return obj;
});
console.log(young1);
