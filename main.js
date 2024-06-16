let message = "hellow world"; // infering type(syntax)
console.log(message);
//modules
import { obj } from "./index.js";
console.log(obj);
//as (aik new name dy skte h as se)
import { obj as person } from "./index.js";
console.log(person.name);
//inquirer (pre build code phly se mojod hote he inquirer m )
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt({
    name: "amna",
    type: "input",
    message: chalk.green("enter your name"),
});
console.log(`hellow ${answer.amna}`);
//              @step04
//union literals topic and type Alias
//union literals (union literals me ap aik se zada type defined kr skte hai)
let unionname;
unionname = null;
console.log(unionname);
unionname = "hamza";
console.log(unionname);
//unionname = undefined; //error
//unionname = 12; //error
//@
let myAge;
myAge = 19; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//error
myAge = "Arshad khan"; //narrowing
console.log(myAge);
console.log(myAge.toString()); //common to both types can be called even without narrowing
console.log(myAge.toLowerCase()); //can be called on string because of narrowing
//practice union types (string k and ap koi bi name likh skte)
let unionTypes;
unionTypes = "hamna";
unionTypes = "aijaz";
unionTypes = "amna";
unionTypes = 10;
unionTypes = 20;
unionTypes = 400;
unionTypes = null;
console.log(unionTypes);
unionTypes = true;
console.log(unionTypes);
//literals type (issme ap jp type de he wohi same apne variable me value assign krni pare gi)
let literalType;
literalType = 2000;
//
let newAge = Math.random() > 0.6 ? "hamna khan" : 60;
//newAge.toLowerCase();//error: transpiler cannot narrow
if (newAge === "hamna khan") {
    newAge.toUpperCase(); //can be called
}
if (typeof newAge === "string") {
    newAge.toUpperCase();
}
typeof newAge === "string"
    ? newAge.toUpperCase() //string
    : newAge.toFixed(); //number
//uniontype ans literaltype
let age;
age = 50;
age = "died";
age = "unknown";
//age = "living"; //error
let zia;
zia = "zia";
let data;
data = false;
let myAge1 = undefined;
let a = 100;
let b = "hamna";
let c = "false";
function setColour(clname) {
    console.log(`colour set to ${clname}`);
}
setColour("red"); //valid
setColour("green"); //valid
//setColour("yellow") //invalid (error)
//  step05
//object (object me hm multiple kism k data store krwa kr skte h)
const student = {
    name: "hamna",
    stId: "GIAC1234",
    fName: "arshad",
    age: 20
};
console.log(student);
console.log(student.name);
//square [] notation
console.log(student["stId"]);
//Anonymous type 
const student1 = {
    stId: 2200,
    stName: "hamna",
    fName: "arshad"
};
console.log(student1);
let student2 = {
    stId: 2200,
    stName: "hamna",
    fName: "arshad"
};
let std = {
    stId: 222,
    stName: "amna",
    fName: "khan"
};
console.log(student2);
let student3 = {
    stId: 2200,
    stName: "hamna",
    fName: "arshad"
};
console.log(student3);
let collectionofEmployee = [
    {
        employeeId: 12345667,
        employeeName: "hamna",
        salary: 90000
    },
    {
        employeeId: 98787,
        employeeName: "aijaz",
        salary: 8900
    },
];
console.log(collectionofEmployee);
let square = {
    radius: 10
};
let triangle = {
    radius: 20
};
square = triangle;
triangle = square;
let cylinder = {
    radius: 13,
    height: 5
};
square = cylinder;
//cylinder = square  //error(requirdment 2 hai or square me 1 h)
//fresh object
let myType = {
    name: "hamna",
    id: 2,
};
myType = {
    id: 3,
    name: "amna"
};
//fresh object
// myType = {
//     id: 3,
//     name_person: "amna"
// } 
// myType = {
//     id: 3,
//     name_person: "amna"
//     age: 30
// } 
//scale object
let myType1 = {
    name: "hamna",
    id: 1
};
let myType2 = {
    id: 2,
    name: "amna",
};
myType1 = myType2;
myType2 = myType1;
// let myType3 = {
//     id: 4,
//     name_space: "tom"
// }
// myType1 = myType3 //error
let myType4 = {
    id: 5,
    name: "tim",
    age: 30
};
myType = myType4;
//nested object (obbject k ander object bnana)
const student9 = {
    name: "talha",
    stId: "giac124",
    fName: "ikhlak",
    age: 26,
    Qulification: {
        grade: "10th",
        result: "A1"
    }
};
console.log(student9);
console.log(student9.Qulification);
console.log(student9.Qulification.grade);
console.log(student9["Qulification"]["grade"]);
let personObj = {
    name: "hamna",
    age: 30,
    email: "abd@gmail.com",
    status: "manager",
    salary: 50000
};
//any unknown never types
//any          
let myval;
myval = true;
myval = 42;
myval = "hey";
myval = Math.random;
myval = {};
myval = null;
myval = undefined;
myval = () => {
    console.log('hey again!');
};
//unknown
let value;
const value1 = true;
const value2 = [];
const value3 = 42;
const value4 = "hey";
const value5 = Math.random;
const value6 = {};
const value7 = null;
const value8 = undefined;
const value9 = () => { console.log('hey again!'); };
//const value11 : boolean = value
//const value12 : string = value
//const value13 : number = value
//never (never type uss function k lye use hote h jo kbi bi return nh krte)
//function returning  never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
//inferred return type is never
function fail() {
    return error("something failed");
}
//function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
//step 6 to step 8
//explicit type casting
let myname = "hamna";
console.log(myname.length);
//2nd way 
console.log(myname.length);
let name1 = "how are u hamna";
console.log(name1.length);
//enum (enum kisi value k set hota h. jo retuen index krta h y defined krta y phr value ko)
//syntax: enum name {}     
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
; //starts with 0
var d = Color.green;
console.log(c); // 1
var Colour1;
(function (Colour1) {
    Colour1[Colour1["red"] = 100] = "red";
    Colour1[Colour1["green"] = 2] = "green";
    Colour1[Colour1["blue"] = 4] = "blue";
})(Colour1 || (Colour1 = {})); //can assign values to all
var colorIndex = Colour1["blue"];
console.log(colorIndex); //4
var Colour2;
(function (Colour2) {
    Colour2[Colour2["red"] = 1] = "red";
    Colour2[Colour2["green"] = 2] = "green";
    Colour2[Colour2["blue"] = 3] = "blue";
})(Colour2 || (Colour2 = {}));
;
var colorName = Colour2[2];
console.log(colorName);
;
//var colorName: string = Color1[1];//not allowed with const enums value
console.log(colorName); // error
;
var colorIndex1 = 4 /* Colour3["blue"] */;
console.log(colorIndex); //4
; //start with 0
var e = 1 /* colour9.green */;
console.log(d);
//Q,ENUM
//enum Q.Making a list  (enum) for different types of vehicles?
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["car"] = 0] = "car";
    Vehicles[Vehicles["truck"] = 1] = "truck";
    Vehicles[Vehicles["motorcycle"] = 2] = "motorcycle";
    Vehicles[Vehicles["train"] = 3] = "train";
    Vehicles[Vehicles["aeroplane"] = 4] = "aeroplane";
    Vehicles[Vehicles["bus"] = 5] = "bus";
})(Vehicles || (Vehicles = {}));
//showing one type of vehicle from the list
console.log(Vehicles.aeroplane);
//array (collection of values)
//syntax: let name : type[] = []
let array = ["hamna", "amna", "aijaz", "fiza", "minhaj"];
console.log(array);
console.log(array[2]);
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
console.log(array1[2] = 80);
let array2 = ["taha", "talha", "aijaz", 4, 5, 6, 7];
console.log(array2);
//empty array []
let array3 = [];
//dynamically adding
array3.push(1, 2, 3, 4, 5, 6, 7, 8);
console.log(array3);
// step09 (a)
//note: all parameters are required
// named function
function add(x, y) {
    return x + y;
}
console.log(add(5, 7));
// anonymous function
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 5));
//anonymous function with explict type
let myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(3, 2));
// type names dont matter (type dont change but name change no issue)
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(3, 2));
// lambda functions (arrow function)
let myAdd3 = (a, b) => a + b;
console.log(myAdd3(5, 5));
function greeter(fn) {
    //...
}
//named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName("hamna"));
console.log(buildName("hamna", "khan"));
//22nd way output
let result = buildName("hamna");
//let result1 = buildName("hamna", "khan", "sr"); //error too many parameters
let result3 = buildName("hamna", "khan");
// anonymous function type with optinal parameters 
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
// note that the parameters type will be optional when used wth default parameters
function buildName2(firstName, lastName = "khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result4 = buildName2("bob");
console.log(result4);
let result5 = buildName2("bob", "adams"); //correct
console.log(result5);
// anonymous function type with default parameters
//(note that the parameter type will be optional when used with default)
let buildName3 = function (firstName, lastName = "khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName3("hooriya"));
console.log(buildName3("hooriya", "butt"));
// function rest parameter
function buildName4(firstName, ...restofName) {
    return firstName + " " + restofName.join(" ");
}
var employeeName = buildName4("taha", "talha", "aijaz", "minhaj");
console.log(employeeName);
// anonymous function type with rest parameters
var buildNameFun = function (firstName, ...restofName) {
    return firstName + " " + restofName.join(" ");
};
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 6));
console.log(sum("hello", "syeda"));
//this is not part of the overload list,
//so it has only three overloads
function add9(arg1, arg2) {
    return arg1 + arg2;
}
//calling add with any other parameter types
console.log(add9(1, 2));
console.log(add9("hello", "world"));
console.log(add9(true, false));
//callback function
//(jb bi kisi function k arugument me koi function pass kia jata h to wo call back function khilata he) 
function hello(callback, newName) {
    callback(newName);
}
let arrowfun = (name) => {
    console.log(`hellow ${name}`);
};
hello(arrowfun, "hamo");
//2nd way 
function sayHello() {
    console.log("Hello");
}
function sayHi() {
    console.log("Hi");
}
function addnum(num1, num2, callback) {
    console.log(num1 + num2);
    callback();
}
addnum(3, 5, sayHello);
addnum(4, 6, sayHi);
addnum(2, 3, function () {
    console.log("bye");
});
//example of callback function
function myCallBack(text) {
    console.log("call back kre pizza waly ko" + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
//promise
let myPromise = new Promise((resolve, reject) => {
    console.log("promise pending");
    setTimeout(() => {
        console.log("promise resolve");
        resolve(["iqra", "rizwana", "sobi"]);
        console.log("promise rejected");
        reject(new Error("data fetch failed"));
    }, 1000);
});
myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("something went wrong");
});
//assing await
//aasing function k andr use hota he(await k use function me assing k st he use kr skte h..
//agr ab assing k use nh kry gy to await pr error aata rhe ga)
//step 10 tuples
//(tuples ko type array bi kha jata h.tuple array me jo length hote h wo pre-define hote ha.
//hr index k type ko define kia jata he.jo alag alag ho skta h.jiski type or length predefine hoti hai.)          
// syntax
// let tuple: [type1, type2,...] 
let array9 = ["hamna", 7, true, { name: "aijaz" }];
console.log(array9);
console.log(array9[0]);
console.log(array9[2]);
