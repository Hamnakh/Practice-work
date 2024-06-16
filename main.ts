let message: string = "hellow world" // infering type(syntax)
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
})
console.log(`hellow ${answer.amna}`);

//              @step04
//union literals topic and type Alias
//union literals (union literals me ap aik se zada type defined kr skte hai)
let unionname: string | null;
unionname = null;
console.log(unionname);

unionname = "hamza";
console.log(unionname);

//unionname = undefined; //error
//unionname = 12; //error

//@
let myAge: string | number;
myAge = 19; //narrowing
console.log(myAge);

//console.log(myAge.toLowerCase());//error


myAge = "Arshad khan";//narrowing
console.log(myAge);

console.log(myAge.toString());//common to both types can be called even without narrowing

console.log(myAge.toLowerCase());//can be called on string because of narrowing


//practice union types (string k and ap koi bi name likh skte)
let unionTypes : string | null | number | boolean | undefined
unionTypes = "hamna"
unionTypes = "aijaz"
unionTypes = "amna"

unionTypes = 10
unionTypes = 20
unionTypes = 400

unionTypes = null;
console.log(unionTypes);

unionTypes = true;
console.log(unionTypes);

//literals type (issme ap jp type de he wohi same apne variable me value assign krni pare gi)
let literalType : "hamna khan" | 2000
literalType = 2000


//
let newAge = Math.random() > 0.6 ? "hamna khan": 60;

//newAge.toLowerCase();//error: transpiler cannot narrow

if (newAge === "hamna khan") {
    newAge.toUpperCase(); //can be called
}
if(typeof newAge === "string") {
    newAge.toUpperCase();
}

typeof newAge === "string"
? newAge.toUpperCase() //string
: newAge.toFixed(); //number


//uniontype ans literaltype
let age: number | "died" |"unknown";
age = 50;
age = "died";
age = "unknown";
//age = "living"; //error

let zia: "zia";
zia = "zia";

//you can also define a type alias
type rowData = boolean | string | number | null | undefined;
let data: rowData;
data = false;

//you can even combine then 
type Id = number | string;
type idMaybe = Id | undefined | null;
let myAge1 : idMaybe = undefined

//for example varaible combine (type alias concept)
type letType = string | number | boolean;
let a : letType = 100;
let b : letType = "hamna";
let c : letType = "false";

//function
type colour = "red" | "green" | "blue"
function setColour(clname:colour) {
    console.log(`colour set to ${clname}`);
}
setColour("red") //valid
setColour("green") //valid
//setColour("yellow") //invalid (error)


             //  step05
//object (object me hm multiple kism k data store krwa kr skte h)
const student = {
    name: "hamna",
    stId: "GIAC1234",
    fName: "arshad",
    age: 20
}
console.log(student);
console.log(student.name);
//square [] notation
console.log(student["stId"]);


         //Anonymous type 
const student1 : {
    stId: number,
    stName: string,
    fName:  string,
} = {
    stId : 2200,
    stName: "hamna",
    fName : "arshad"
}   
console.log(student1);

     //  object aliace
type StuType = {
    stId: number,
    stName: string,
    fName:  string,
}   
let student2 : StuType = {
    stId : 2200,
    stName: "hamna",
    fName : "arshad"
}  
let std : StuType = {
    stId: 222,
    stName: "amna",
    fName: "khan"
}
console.log(student2);

              //  interface   
    interface StuType1  {
        stId: number,
        stName: string,
        fName:  string,
    }   
    let student3 : StuType = {
        stId : 2200,
        stName: "hamna",
        fName : "arshad"
    }   
    console.log(student3);


          //array of object
interface Employee {
    employeeId: number;
    employeeName: string;
    salary: number;
}          
let collectionofEmployee: Employee[] = [
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
]
console.log(collectionofEmployee);

             //structural typing object literals
// (isme 2 object ko compatival mana jata he)                          
     
interface Circle {
    radius : number
}
interface Disk {
    radius: number
}
let square: Circle = {
    radius: 10
}
let triangle: Disk = {
    radius: 20
}
square = triangle
triangle = square

// aditional properties
interface Cylinder {
    radius: number;
    height: number
}
let cylinder: Cylinder = {
    radius: 13,
    height: 5
}   
square = cylinder
//cylinder = square  //error(requirdment 2 hai or square me 1 h)

            //fresh object
let myType = {
    name: "hamna",
    id: 2,
} 
myType = {
    id: 3,
    name: "amna"
} 
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
} 
let myType2 = {
    id: 2,
    name: "amna",
}  
myType1 = myType2
myType2 = myType1

// let myType3 = {
//     id: 4,
//     name_space: "tom"
// }
// myType1 = myType3 //error

let myType4 = {
    id: 5,
    name: "tim",
    age: 30
}
myType = myType4


           //nested object (obbject k ander object bnana)
const student9 = {
    name: "talha",
    stId: "giac124",
    fName: "ikhlak",
    age: 26,
    Qulification : {
        grade: "10th",
        result: "A1"
    }
}
console.log(student9);
console.log(student9.Qulification);
console.log(student9.Qulification.grade);
console.log(student9["Qulification"]["grade"]);

              //intersection type           
type personalDetail = {
    name: string;
    age: number
}
type officialDetail = {
    email: string;
    status: string;
    salary: number
}
//sntax
type Person = personalDetail & officialDetail
let personObj : Person = {
    name : "hamna",
    age : 30,
    email: "abd@gmail.com",
    status : "manager",
    salary: 50000
}
           //any unknown never types
 //any          
let myval: any;
myval = true;
myval = 42;
myval = "hey";
myval = Math.random;
myval = {};
myval = null;
myval = undefined;
myval = () => {console.log('hey again!');
};        
       //unknown
let value: unknown;
const value1 = true;
const value2 = [];       
const value3 = 42;
const value4 = "hey";
const value5 = Math.random;
const value6 = {};
const value7 = null;
const value8 = undefined;
const value9 = () => {console.log('hey again!');};
//const value11 : boolean = value
//const value12 : string = value
//const value13 : number = value

        //never (never type uss function k lye use hote h jo kbi bi return nh krte)
//function returning  never must not have a reachable end point
function error(message:string): never {
  throw new Error(message);  
}
//inferred return type is never
function fail() {
    return error("something failed");
}
//function returning never must not have a reachable end point
function infiniteLoop(): never {
    while (true) {}
}

             //step 6 to step 8

         //explicit type casting
let myname: unknown = "hamna";
console.log((myname as string).length);
//2nd way 
console.log((<string> myname).length);


let name1:any = "how are u hamna";
console.log((name1 as string).length);


        //enum (enum kisi value k set hota h. jo retuen index krta h y defined krta y phr value ko)
//syntax: enum name {}     
enum Color {red, green, blue}; //starts with 0
var d: Color = Color.green;
console.log(c); // 1

enum Colour1 {red = 100, green= 2, blue = 4}//can assign values to all
var colorIndex = Colour1["blue"];
console.log(colorIndex); //4

enum Colour2 {red = 1, green, blue};
var colorName: string = Colour2[2];
console.log(colorName);

//const enum
const enum Color1 {red=1, green, blue};
//var colorName: string = Color1[1];//not allowed with const enums value
console.log(colorName);// error

const enum Colour3 {red=1, green=2, blue=4};
var colorIndex1 = Colour3["blue"];
console.log(colorIndex); //4

const enum colour9 {red, green, blue}; //start with 0
var e : colour9 = colour9.green;
console.log(d);

           //Q,ENUM
//enum Q.Making a list  (enum) for different types of vehicles?
enum Vehicles{
    car,
    truck,
    motorcycle,
    train,
    aeroplane,
    bus
}
//showing one type of vehicle from the list
console.log(Vehicles.aeroplane);

           //array (collection of values)
 //syntax: let name : type[] = []
let array: string[] = ["hamna", "amna", "aijaz", "fiza", "minhaj"]
console.log(array);
console.log(array[2]);

let array1: number[] = [1, 2, 3, 4, 5, 6]
console.log(array1);
console.log(array1[2] = 80);

let array2: (string | number) [] = ["taha", "talha", "aijaz", 4, 5, 6, 7]
console.log(array2);

     //empty array []

let array3: number[] = []
  //dynamically adding
array3.push(1, 2, 3, 4, 5, 6, 7, 8)
console.log(array3);

          // step09 (a)

//note: all parameters are required
  // named function
function add(x:number, y:number): number {
    return x+y;
} 
console.log(add(5,7));

  // anonymous function
let myAdd= function (x:number, y:number): number {
    return x+y;
} 
console.log(myAdd(2,5));

//anonymous function with explict type
let myAdd1: (x:number, y:number)=>number =  function (x:number, y:number): number {
    return x+y;
};
console.log(myAdd1(3,2));

  // type names dont matter (type dont change but name change no issue)
  let myAdd2: (baseValue:number, increment:number)=>number = function (x:number, y:number): number {
    return x+y;
};
console.log(myAdd2(3,2));

  // lambda functions (arrow function)
let myAdd3 = (a:number, b:number) => a+b;
console.log(myAdd3(5,5));

//function with a function type
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    //...
}
//named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
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
var buildName1 : (firstName: string, lastName?: string)=> string =
function (firstName:string, lastName?:string) : string {
   if (lastName) 
    return firstName + " " + lastName;
   else
     return firstName;
}
// note that the parameters type will be optional when used wth default parameters
function buildName2(firstName:string, lastName = "khan") : string {
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
let buildName3 :(FirstName: string, lastName?:string) => string =
function (firstName: string, lastName="khan"): string {
    if (lastName)
      return firstName + " "  + lastName;
    else
      return firstName;
}
console.log(buildName3("hooriya"));
console.log(buildName3("hooriya", "butt"));

// function rest parameter

function buildName4(firstName:string, ...restofName: string[]) {//named
   return firstName + " " + restofName.join(" ")
}
var employeeName = buildName4("taha", "talha", "aijaz", "minhaj");
console.log(employeeName);

// anonymous function type with rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = 
function (firstName: string, ... restofName: string[]) {
    return firstName + " " + restofName.join(" ");
}
// note: rest, optional and default parameters can only be at the
//end of the parameter list

   // function overload
function sum(a:number, b:number): number
function sum(a:string, b:string): string


function sum(a:any, b:any): any {
    return a+b
}   

console.log(sum(4,6))
console.log(sum("hello", "syeda"))

    //2nd way
function add9(arg1:string, arg2:string): string;
function add9(arg1:number, arg2:number): number;
function add9(arg1:boolean, arg2:boolean): boolean; 
//this is not part of the overload list,
//so it has only three overloads
function add9(arg1:any, arg2:any): any {
    return arg1 + arg2;
} 
//calling add with any other parameter types
console.log(add9(1, 2));
console.log(add9("hello", "world"));
console.log(add9(true, false));

   //callback function
//(jb bi kisi function k arugument me koi function pass kia jata h to wo call back function khilata he) 
function hello(callback:any, newName:string){
    callback(newName)
}
let arrowfun = (name:string) => {
    console.log(`hellow ${name}`);
}
hello(arrowfun, "hamo")

               //2nd way 
function sayHello(){
    console.log("Hello");
}
function sayHi(){
    console.log("Hi");
}
function addnum(num1: number, num2: number, callback:any){
    console.log(num1 + num2);
    callback();  
}
addnum(3, 5, sayHello)
addnum(4, 6,  sayHi)
addnum(2,3, function(){
    console.log("bye");
})

            //example of callback function
function myCallBack(text: string) {
    console.log("call back kre pizza waly ko" + text);
}
function callingFunction(initialText: string, callback: (text: string) => void)
{
    callback(initialText);
}            

   //promise

let myPromise = new Promise((resolve, reject)=>{
    console.log("promise pending");
    setTimeout(()=>{
        console.log("promise resolve");
        resolve(["iqra", "rizwana", "sobi"])
        console.log("promise rejected");
        reject(new Error ("data fetch failed"))
    }, 1000)
})
myPromise.then((res)=>{console.log(res);
}).catch((err)=>{console.log("something went wrong");
})
   

             //assing await
//aasing function k andr use hota he(await k use function me assing k st he use kr skte h..
//agr ab assing k use nh kry gy to await pr error aata rhe ga)




           //step 10 tuples
//(tuples ko type array bi kha jata h.tuple array me jo length hote h wo pre-define hote ha.
//hr index k type ko define kia jata he.jo alag alag ho skta h.jiski type or length predefine hoti hai.)          
// syntax
// let tuple: [type1, type2,...] 

let array9: [string, number, boolean,{name: string}?] = ["hamna", 7, true, {name: "aijaz"}]
console.log(array9);
console.log(array9[0]);
console.log(array9[2]);



 
 
       




           
 


















