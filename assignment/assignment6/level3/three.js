//ques1
n=[];
for(el of countries){
    if(n.indexOf(el)==-1){
        n.push(el);
    }
}
console.log(n);
//ques2
n=[...countries];
let sortedCountry=n.sort();
console.log(sortedCountry);
//ques3
console.log(webTechs.sort());
console.log(mernStack.sort());
//ques4  ques6
n=[];
for(el of countries){
    if(el.indexOf("land")!=-1){
    countries.splice(countries.indexOf(el),1);
    n.push(el);}
}
console.log(n);
//ques5
ansindex=0;
for(let i=0;i<countries.length;i++){
    if(countries[i].length>countries[ansindex].length){
        ansindex=i;
    }
}
console.log(countries[ansindex]);
//ques 7
n=[];
for(el of countries){
    if(el.length==4){
        countries.splice(countries.indexOf(el),1);
       n.push(el);
    }
}
console.log(n);
//ques 8
n=[];
for(el of countries){
    if(el.indexOf(" ")!=-1){
        countries.splice(countries.indexOf(el),1);
       n.push(el);
    }
}
console.log(n);
//ques 9
const newArray=countries.reverse();
console.log(newArray);
