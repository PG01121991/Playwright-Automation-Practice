let messagee : string = "How are you";
console.log(messagee);
let digit : number = 343;
console.log(digit);
let evening : boolean= false;
console.log(evening);
let digitArray : number[] = [1,23,45,56];
console.log(digitArray[2]);

let data : any = "this could be anything";
data = 24;
data = "bye";
console.log(data);

function add(a:number,b:number):number
{
    return a+b;
}
add(10,20);
console.log(add(12,14));
//object
let student : {name : string, age : number, marks : number, section: string } = { name :"Prudhvi", age:25, marks: 80, section: "B"};