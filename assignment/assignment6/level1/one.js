//ques1
for(let i=0;i<=10;i++){
    console.log(i);
}
let i=0;
while(i<=10){
    console.log(i);
    i++;
}
i=0;
do{
    console.log(i);
    i++;
}while(i<=10);
//ques2
for(let i=10;i>=0;i--){
    console.log(i);
}
i=10;
while(i>=0){
    console.log(i);
    i--;
}
i=10;
do{
    console.log(i);
    i--;
}while(i>=0);
//ques3
let n=prompt("enter the value of n");
for(let i=0;i<=n;i++){
    console.log(i);
}
//ques4
for(let i=0;i<=6;i++){
    for(let j=0;j<=i;j++){
        console.log("#");
    }
    console.log('\n');
}
//ques5
for(let i=0;i<=10;i++){
    console.log(`${i} * ${i} = ${i*i}`);
}
//ques6
for(let i=0;i<=10;i++){
    console.log(`${i}  ${i**2}  ${i**3}`);
}
//ques7
for(let i=0;i<=100;i++){
    if(i%2==0){
    console.log(i);
    }
}
//ques8
for(let i=0;i<=100;i++){
    if(i%2!=0){
    console.log(i);
    }
}
//ques9
for(let i=2;i<=100;i++){
    let count=0;
    for(let j=2;j<=i/2;j++){
    if(i%j==0){
    count++;
    }
}
if(count==0){
    console.log(i);
}}
//ques10
let sum=0;
for(let i=0;i<=100;i++){
    sum=sum+i;
} 
console.log(sum);
//ques11
sum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
    sum=sum+i;}
} 
console.log(sum);
//ques12
sum=0;
for(let i=0;i<=100;i++){
    if(i%2!=0){
    sum=sum+i;}
} 
console.log(sum);
//ques13
let arr=[];
for(let i=0;i<5;i++){
   let n= Math.floor(Math.random()*10)+1;
   arr.push(n);
} 
console.log(arr);
//ques14
arr=[];
while(arr.length<5){
    let n= Math.floor(Math.random()*10)+1;
    if(arr.indexOf(n)==-1){
    arr.push(n);}
 } 
 console.log(arr);
