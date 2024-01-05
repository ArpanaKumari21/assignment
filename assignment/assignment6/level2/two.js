const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']];    
const fruits=['banana', 'orange', 'mango', 'lemon'];
let copy=[...fruits];
//ques4
let newCountry=[];
for(const el of countries){
    newCountry.push(el.toUpperCase());
}
console.log(newCountry);
//ques5
let length=[];
for(el of countries){
    length.push(el.length);
}
console.log(length);
//ques6
let arrayOfArray=[];
for(el of countries){
    arrayOfArray.push([el,el.toUpperCase(),el.length]);
}
console.log(arrayOfArray);
//ques7
n=[];
for(el of countries){
    if(el.indexOf("land")!=-1){
    n.push(el);}
}
console.log(n);
//ques8
n=[];
for(el of countries){
    if(el.indexOf("ia")!=-1){
    n.push(el);}
}
console.log(n);
//ques9
let ansindex=0;
for(let i=0;i<n.length;i++){
    if(n[i].length>n[ansindex].length){
        ansindex=i;
    }
}
console.log(n[ansindex]);
//ques10
n=[];
for(el of countries){
    if(el.length==5){
       n.push(el);
    }
}
console.log(n);
//ques11
ansindex=0;
for(let i=0;i<webTechs.length;i++){
    if(webTechs[i].length>webTechs[ansindex].length){
        ansindex=i;
    }
}
console.log(webTechs[ansindex]);
//ques12
n=[];
for(el of webTechs){
    n.push([el,el.length]);
}
console.log(n);
//ques13
let acronym="";
for(el of mernStack){
    acronym=acronym+el[0];
}
console.log(acronym);
//ques14
n=[];
let all=[...webTechs,...mernStack];
for(el of all){
    if(n.indexOf(el)==-1){
        n.push(el);
    }
}
console.log(n);
//ques15
for(let i=0;i<fruits.length;i++){
    copy[(fruits.length-1)-i]=fruits[i];
}
console.log(copy);
//ques16
for(el of fullStack){
    for(each of el){
    console.log(each);
}}