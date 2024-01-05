//ques1
let age=prompt("enter your age:");
if(age>=18){
    alert("you are old enough to drive");
}else{
    alert(`wait for ${18-age} years`);
}
//ques2
age=prompt("enter your age:");
let myAge=20;
if(age>myAge){
    alert(`you are ${age-myAge} older than me`);
}else if(age==myAge){
    alert(`your age is equal to mine`);
}
//ques3
let a=4;
let b=3;
if(a>b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b");
}
(a>b)?console.log("a is greater than b"):console.log("a is less than b");
//ques4
let number=prompt("enter the no:");
if(number%2==0){
    console.log("even");
}else{
    console.log("even");
}
//level2
//ques1
let marks=prompt("enter the marks:");
if(marks>=80&&marks<=100){
    console.log("A")
}else if(marks>=70&&marks<=89){
    console.log("B")
}else if(marks>=60&&marks<=69){
    console.log("C")
}else if(marks>=50&&marks<=59){
    console.log("D")
}else {
    console.log("F")
}
//ques2
let month=prompt("enter the month:");
month=month.toLocaleLowerCase();
if(month=="september"|| month=="october" ||month=="november"){
    console.log("Autumn");
}else if(month=="december"||month=="january"||month=="february"){
    console.log("Winter");
}else if(month=="march"||month=="april"||month=="may"){
    console.log("Spring");
}else if(month=="june"||month=="july"||month=="august"){
    console.log("Summer");
}else {
    console.log("invalid month");
}
//ques3
let day=prompt("enter the day:");
day=day.toLocaleLowerCase();
if(day=="monday"||day=="tuesday"||day=="wednesday"||day=="thursday"||day=="friday"){
    console.log(`${day} is a working day`);
}else if(day=="saterday"||day=="sunday"){
    console.log(`${day} is a weekend`);}
    else {
        console.log("invalid day");
    }
//level3 ques1
month=prompt("enter the month:");
month=month.toLocaleLowerCase();
if(month=="january"|| month=="march" ||month=="may"|| month=="july" ||month=="august"|| month=="october" ||month=="december"){
    console.log(`${month} has 31 days`);
}else if(month=="april"||month=="june"||month=="september"||month=="november"){
    console.log(`${month} has 30 days`);
}else if(month=="february"){
    console.log(`${month} has 28 days`);
}else{
    console.log("invalid month");
}
//ques2
month=prompt("enter the month:");
month=month.toLocaleLowerCase();
if(month=="january"|| month=="march" ||month=="may"|| month=="july" ||month=="august"|| month=="october" ||month=="december"){
    console.log(`${month} has 31 days`);
}else if(month=="april"||month=="june"||month=="september"||month=="november"){
    console.log(`${month} has 30 days`);
}else if(month=="february"){
    console.log(`${month} has 29 days`);
}else{
    console.log("invalid month");
}

