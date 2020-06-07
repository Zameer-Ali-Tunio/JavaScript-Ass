/* <-------------------------------chapter no 1 alerts-------------------------------->
// task no 2
alert("error! please enter a valid password");
// task no 3
alert("welcome to Jsland \n happy coding"); 
// task no 4
alert("welcome to Jsland"); 
alert("happy coding");
// task no 5
console.log("hello....... i run js through my web browser console");
// task no 6
//Practice placement of <script></script> element in following sections of your project in exercise 6:
head */

/* <-------------------------chapter no 2 variables for strings----------------------------->
// task no 1
var username;
// task no 2
var myName="zameer alit tunio";
// task no 3
var message="hello world";
alert(message);
// task no 4
var name="zameer alit tunio";
alert(name);
var age=20;
alert(age);
var qualification="Bacholer in Information Technology (BSIT)";
alert(qualification);
// task no 5
 var v="pizza";
 var v="pizz";
 alert(v+v);
// task no 6
var email="zameeralitunio@gmail.com";
alert("my email is " + email);
// task no 7
var book="A smarter way to learn JavaScript";
alert("i am tying to learn from book " + book);
// task no 8
document.write("yah! i can write HTML content through JS");
// task no 9
var store="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(store);  */

/* <----------------------------chapter no 2 variables for numbers ----------------------------------->
// task no 1
var age="20";
alert("I am "+age+" years old");
// task no 2
var a=1;
var visit=a++;
alert("you have visited this "+visit+" times");
// task no 3
var birthyear=1999;
document.write("my birth year is "+birthyear);
document.write("<br> data type of my declared is number");
// task no 4
document.write("<br><b>John Doe</b> ordered <b>5 T-shirt(s)</b> on <b>XYZ </b>Clothing store");*/

/* <------------------------------chapter no 4 VARIABLE NAMES: Legal & Illegal ------------------------->
// task no 1
// 5 legal variables
var numbers;
var $;
var _;
var myAlert;
var myname1;
// 5 illegal variables
1 var 1myname;
2 var my name;
3 var alert;
4 var 123;
5 var #@;
document.write("<h1>A heading stating “Rules for naming JS variables</h1><br/><br/>Variable names can only contain numbers, $, and _.For example:$my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or_. For example $name, _name or name<br>");
document.write(" Variable names are case sensitive <br>");
document.write(" Variable names should not be JS keyword");*/

/* <--------------------------------chapter no 5 MATH EXPRESSIONS -------------------------------->
//task no 1
var a=3;
var b=5;
var c=a+b;
document.write("the sum of "+a+" and "+b+" is "+c);
//task no 2
var a=3;
var b=5;
var d=a-b;
var e=a*b;
var f=a/b;
documant.write("the sub of "+a+" and "+b+" is "+d);
document.write("the mult of "+a+" and "+b+" is "+e);
document.write("the div of "+a+" and "+b+" is "+f);
//task no 3
var a=5;
document.write("Value after variable declaration is: "+a);
document.write("<br>Initial Value: "+a);
var b=++a;
document.write("<br>Value after increment is: "+b);
var c=7;
var d=b+c;
document.write("<br>Value after addition is: "+d);
--d;
document.write("<br>Value after decrement is: "+d);
var e=d/3;
document.write("<br>The remainder is : 0");
//task no 4
var store=600;
var total=store*5;
document.write("<br>total cost buy 5 tickets to a movie is "+total);
//task no 5
document.write("<br>Table of 4");
var c;
for(var a=1;a<=10;a++){
    for(var b=1;b<=a;b++){
        c=b*4;}
    document.write("<br>4*"+a+"  "+c);
}
//task no 6
var c=70;
var f=172;
document.write("25 C is "+(f-32)*5/9+"F");
document.write("<br> 70 F is "+(c-32)*5/9+" C");
//task no 7
var a=650;
var b=a*3;
var c=100;
var d=100*7;
var e=100;
var total=b+d+e;
document.write("<br>Price of item 1 is "+a);
document.write("<br>Ordered quantity of item 1 is 3");
document.write("<br>Price of item 2 is "+c);
document.write("<br>Ordered quantity of item 2 is 7");
document.write("<br>Shipping charges is "+e);
document.write("<br>Total cost of your order is "+total);
// task no 8
var total=980;
var obtain=804;
var per=obtain/total*100;
document.write("total marks "+total);
document.write("<br>obtain marks "+obtain);
document.write("<br>percentage "+per);
// task no 9
document.write("totla currency in PKR: "+(10*104.80+25*28));
// task no 10
var a=5;
document.write("yes i perform in one expression"+((a+5)*10)/2);
// task no 11
var cyear=2016;
var byear=1992;
var age=cyear-byear;
document.write("current year  is: "+cyear);
document.write("<br>birth year  is: "+byear);
document.write("<br>your age is: "+age);
// task no 12
var radius=20;
var cir=2*(3.142)*radius;
var area=3.142*radius*radius;
document.write("<br>The circumference is: "+cir);
document.write("<br>The area is: "+area);
// task no 13
var snack="chocolate chip";
var age=15;
var maxage=65;
var perday=3;
var calculate=(maxage-age)*perday;

document.write("<br>favorite snack: "+snack);
document.write("<br>current age: "+age);
document.write("<br>estimated maximum age: "+maxage);
document.write("<br>amount of snaks per day: "+perday);
document.write("<br>You will need "+ calculate+" to last you until the ripe old age of "+maxage);*/

/*<-------------------------------------chapter no 6-9 Math expressions------------------------------>
// task no 1
var a=10;
document.write("RESULTS:<br> ");
document.write("the value of a is: "+a);
document.write("<br>........................................");
++a;
document.write("<br>the value of ++a is: "+a);
document.write("<br>now the value of ++a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a++ is: "+a);
a++;
document.write("<br>now the value of a++ is: "+a);
document.write("<br>........................................");
--a;
document.write("<br>the value of --a is: "+a);
document.write("<br>now the value of --a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a-- is: "+a);
a--;
document.write("<br>now the value of a-- is: "+a);
document.write("<br>........................................");
// task no 2
var a=2;
var b=1;
document.write("a is "+a);
document.write("b is "+b);
var result=--a - --b + ++b +b--;
document.write("result is  "+result);
// var c=--a;
// var d=c- --b;
// var e=d+ ++b;
// var f=e + b--;
// document.write("--a ="+c);
// document.write("<br>--a - --b ="+d);
// document.write("<br>--a - --b + ++b ="+e);
// document.write("<br>--a - --b + ++b + b-- ="+f);
// task no 3
var name=prompt("enter your name");
alert(name);
// task no 4 5
var c;
var d=+prompt("enter any number");
for(var a=1;a<=10;a++){
    for(var b=1;b<=a;b++){
        c=b*d;}
    document.write("<br>"+d+"*"+a+"  "+c);
}
// task no 6
var a=prompt("subject no 1","enter subject name");
var b=prompt("subject no 2","enter subject name");
var c=prompt("subject no 3","enter subject name");
var total=100+100+100;
var j=100;
var e=+prompt("enter obtain marks of subject "+a);
var f=+prompt("enter obtain marks of subject "+b);
var g=+prompt("enter obtain marks of subject "+c);
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<table><tr><th>subject</th><th>total</th><th>obtain</th><th>percentage</th></tr><tr><td>"+a+"</td><td>"+j+"</td><td>"+e+"</td><td>"+e+"</td></tr><tr><td>"+b+"</td><td>"+j+"</td><td>"+f+"</td><td>"+f+"</td></tr><tr><td>"+c+"</td><td>"+j+"</td><td>"+g+"</td><td>"+g+"</td></tr><tr><td></td><td><b>"+total+"</b></td><td><b>"+obtain+"</b></td><td><b>"+per+"</b></td></b></tr></table>");*/


/*<-----------------------------chapter no 9-11 User Input & Conditional Statement ---------------->
// task no 1
var city=prompt("enter your city name","example:karachi");
if(city==="karachi"){
    document.write(city+" welcome to city of lights");
}
else if(city==="islamabad"){
    document.write(city+" welcome to city of beautifullness");
}
else if(city==="multan"){
    document.write(city+" welcome to city of saints");
}
else if(city==="hyderabad"){
    document.write(city+" welcome to city of Airs");
}
else {
    document.write("welcome to "+city);
}
// task no 2
var gender=prompt("enter your gender","example:male");
if(gender==="male" || gender==="m"){
    document.write("Good Morninig Sir");
}
else if(gender==="female" || gender==="f"){
    document.write("Good Morninig Madam");
}
else {
    alert("please enter valid query");
}
// task no 3
var red=prompt("enter trafffic color RED");
var green=prompt("enter trafffic color GREEN");
var yellow=prompt("enter trafffic color YELLOW");
if(red==="red" && yellow==="yellow" && green==="green"){
document.write("<table border=1 table-stripe cellspacing=0 cellpadding=3 style=' color:blue; font-size:50px;'> <tr><th>Signal color</th><th>Message</th></tr>                                  <tr><td>red</td><td>must stop</td></tr>  <tr><td>yellow</td><td>ready to move</td></tr>  <tr><td>green</td><td>move now</td></tr> </table>   ");}
else {
    alert("please enter correct spelling of colors\n enter all small caps");
}
// task no 4
var fuel=+prompt("enter remaining fuel","for example 0.25 or 1");
if(fuel===1){
    document.write("tank is full");
}
else if(fuel===0.50){
    document.write("the tank is half");
}
else if(fuel===0.25){
    document.write("you need to refill the tank");
}
else{
    document.write(" you entered invalid value");

}
// task no 5
// a:true
// b:false
// c:codition 3 is true
// d:true
// e:not understand the question
// f:true
// task no 6
var e=+prompt("enter obtain marks of subject 1");
var f=+prompt("enter obtain marks of subject 2");
var g=+prompt("enter obtain marks of subject 3");
var total=100+100+100;
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<b><h1>Marksheet</h1></b> ");
document.write("<br><b>total marks</b> "+total);
document.write("<br><b>obtain marks</b> "+obtain);
document.write("<br><b>percentage</b> "+per);
if(per>=80){
    document.write("<br> Grade A-one<br>excelent")
}
else if(per>=70){
    document.write("<br>Grade A<br>Good")
}
else if(per>=60){
    document.write("<br>Grade b<br>you need to improve")
}
else if(per<=40){
    document.write("<br>Grade d<br>Fail")
}
else{
    document.write("<br>ERROR")
}
// task no 7
var a=7;
var b=+prompt("enter number 1 to 10");
if(a===b){
    document.write("bingo ,correct");
}
else if(b===8){
    document.write("close enough");
}
else if(b===6){
    document.write("close enough");
}
else{

    document.write("error");
}
// task no 8
var a=+prompt("enter any number");
if (a%3==0){
document.write("divisable");
}
else {
    document.write("not divisable");
}
// task no 9
var a=+prompt("enter any number");
if(a % 2===0){
    document.write("even");
}
else if(a % 2===1){
    document.write("odd");
}
else{
    document.write("error");  
}
// task no 10
var a=+prompt("enter tem like 40 ");
if (a>=60){
    document.write("today is doomsday");}
else if(a>=40){
    document.write("It is too hot outside");
}
else if (a>=30){
    document.write("The Weather today is Normal.");
}
else if (a>=20){
    document.write("Today’s Weather is cool..");
}
else if (a>=10 || a<=10){
    document.write("OMG! Today’s weather is so Cool.");
}
//task no 11
var a=+prompt("enter number one");
var b=+prompt("enter number two");
var sign=prompt("enter sign like +,-,/,*,%");
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
if(sign==="+"){
    document.write(sum);
}
else if(sign==="-"){
    document.write(sub);
}
else if(sign==="*"){
    document.write(mul);
}
else if(sign==="/"){
    document.write(div);
}
else if(sign==="%"){
    document.write(rem);
}
else {
    document.write("error");
}*/

/*<-----------------------------------chapter no 12-13------------------------------------> 
// task no 1
var a=prompt("check alphabet in assci 65 t0 90 and 97 to 122 ");
var alpha=['a','b'];
if (a>=65 && a<=97){
    document.write("upper case");
}

else if (a>=97 && a<=122){
    document.write("lower case");
}
else{
    document.write("invalid value hint:65 t0 90 or 97 to 122")
}
// task no  2
var a=prompt("enter value 1");
var b=prompt("enter value 2");
if(a>b){
    document.write(a+"is big vlaue than"+b);
}
else if(b>a){
    document.write(b+"is big vlaue than"+a);
}
else {
    document.write("ivalid value enter")
}
// task no 3
var a=prompt("enter value 1");
if (a%2===0){
    document.write("positive integer");
}
else if (a%2===1){
    document.write("negative  integer");
}
else {
    document.write("invalid");
}
// task no 4
var a=prompt("any character");
if (a==="A" || a==="a" && a==="e" || a==="E" && a==="i" || a==="I" && a==="O" || a==="o"  && a==="u" || a==="U"){
    document.write("vowels");
}
else {
    document.write("false");
}
// task no 5
var a="zameer";
var b=prompt("enter  password");
if (a===b){
    document.write("correct");
}
else{
    document.write("incorrect");
}
// task no 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);}
else{
greeting = "Good evening";
}
// task no 7
var b=+prompt("enter hour in 24 format");
if (b===13){
alert(b+"=  1")
}
else if (b===14){
alert(b+"=  2")
}
else if (b===15){
alert(b+"=  3")
}
else if (b===16){
    alert(b+"=  4")
    }
else if (b===17){
alert(b+"=  5")
}
else if (b===18){
alert(b+" =  6")
}
else if (b===19){
alert(b+" =  7")
}
else if (b===20){
alert(b+" =  8")
}
else if (b===21){
alert(b+" =  9")
}
else if (b===22){
alert(b+" =  10")
}
else if (b===23){
alert(b+" =  11")
}
else if (b===24){
alert(b+" =  12")
}
else{alert(b+" =  "+b)}*/
/*chapter no 14-16 Arrays 
// task no 1
var a=[];
// task no 2
var b=new array();
// task no 3
var c=["zameer"];
// task no 4
var d=[1,2,3];
// task no 5
var e=[true];
// task no 6
var f=["name","phone_no"];
f=[
    {name:"zamer", phone_no:"03087980557"},
    {name:"ali", phone_no:"03087980557"},
    {name:"ahmr", phone_no:"03087980557"},
]
// task no 7
var h=["1)SSC", "2)HSC", "3)BCS","4)BS", "5)BCOM", "6)MS",  "7)M.Phil", "9)PhD"];
alert(h);
// task no 8
var names=["Michael","John","Tony"];
var score=[320,230,480];
document.write("Score of "+names[0] +" is "+score[0]+" = "+(320/500)*100+"%<br>");
document.write("Score of "+names[1] +" is "+score[1]+" = "+(230/500)*100+"%<br>");
document.write("Score of "+names[2] +" is "+score[2]+" = "+(480/500)*100+"%<br>");*/

// <!-----------------------------I have can't complete becausse shortage of time----------------------------->
