var num1=prompt('enter base');
var num2=prompt('enter height');
console.log("area of the triange is:"+0.5*num1*num2);
num1=prompt('enter side a');
num2=prompt('enter side b');
var num3=prompt('enter side c');
var par=num1+num2+num3;
console.log("parameter of the triange is:"+par);
num1=prompt('enter length');
num2=prompt('enter width');
console.log("area of the ractangle is:"+num1*num2);
console.log("parameter of the ractangle is:"+2*(num1+num2));
var r=prompt('enter radius');
console.log("area of the circle is:"+3.14*r*r);
console.log("circumference of the circle is:"+2*3.14*r);
var m=(2-2)/(10-6);
console.log(m);
num1=prompt('enter hours');
num2=prompt('enter rate per hour');
console.log("your weekly earning is:"+num1*num2);
var name="arpana";
if(name.length>7){
    console.log("name is long");
}
else{
    console.log("name is short");
}
var firstname="arpana",lastname="pandey";
if(firstname.length>lastname.length){
    console.log("your first name "+firstname+" is longer than your family name "+lastname);
}else if(firstname.length=lastname.length){
    console.log("your first name "+firstname+" is equal to your family name "+lastname);
}else{
    console.log("your first name "+firstname+" is shorter than your family name "+lastname);
}
var myage="250",yourage="25";
console.log("i am "+(myage-yourage)+" years older than you");
var year=prompt('enter birth year:');
if((2023-year)>18){
console.log("you are "+(2023-year)+" You are old enough to drive");
}else{
    console.log("you are "+(2023-year)+"You are not old enough to drive");
}
var year=prompt('enter no of years you live');
console.log("you lived "+31536000*year+"seconds");
