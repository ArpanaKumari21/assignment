let empty=[];
let arr=[1,2,3,4,5,6,7,8];
console.log(arr.length);
console.log(arr[0],arr[arr.length/2+1],arr[arr.length-1]);
let  mixedDataTypes=[1,2,3,"hello","arpana","javascript"];
console.log(mixedDataTypes.length);
let itCompanies=["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)+1],itCompanies[itCompanies.length-1]);
for(el of itCompanies){
    console.log(el);
}
for(el of itCompanies){
    console.log(el.toUpperCase());
}
console.log(`${itCompanies} are big IT companies`);
let find=prompt("enter the company name");
if(itCompanies.indexOf(find)!=-1){
    console.log(find);
}else{
    console.log("company is not found");
}
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(3,4));
console.log(itCompanies.shift());
console.log(itCompanies);
console.log(itCompanies.splice(3,1));
console.log(itCompanies.pop());

//level 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("meat");
if(shoppingCart.indexOf("sugar")==-1){
    shoppingCart.push("sugar");
}
let ans=prompt("are you allergetic to honey?yes or no");
if(ans=="yes"){
    shoppingCart.splice(3,1);
}
shoppingCart.splice(2,1,"green tea");
if(countries.indexOf("ETHIOPIA")==-1){
    countries.push("ETHIOPIA");
}else{
    console.log("ETHIOPIA")
}
if(webTechs.indexOf("Sass")==-1){
    webTechs.push("Sass");
    console.log(webTechs);
}else{
    console.log("Sass is a CSS preprocess");
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack=[...frontEnd,...backEnd];
console.log(fullStack);
//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
let min=ages[0];
let max=ages[ages.length-1];
console.log(min,max);
for(el of ages){
console.log(ages.reduce((res,el)=>res+el)/ages.length)}
console.log(countries.slice(0,10));
console.log(countries.slice(Math.floor(countries.length/2),Math.floor(countries.length/2)+1));
if(countries.length%2==0){
    let array1=countries.slice(0,countries.length/2);
    let array2=countries.slice((countries.length/2)+1);
}else{
    let array1=countries.slice(0,Math.ceil(countries.length/2));
    let array2=countries.slice(Math.ceil(countries.length/2)+1);
}
console.log(array1);
console.log(array2);