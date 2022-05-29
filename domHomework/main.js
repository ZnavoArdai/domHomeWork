//1
//console.log(h_1.innerText);

//2
// h_2.innerText="my dom app";

//3

// var third=document.getElementsByClassName("third");
// console.log(third)
// //4
// console.log(sech2)
// //5
// console.log(third3.innerText)
//
// //6
// var h_5=document.querySelectorAll('h5');
// console.log(h_5);

//7
// function getNameByUser(){
//     var namee=prompt("enter name");
//     document.write("<h2>"+namee+"</h2>")
// }
// getNameByUser();
//8

// function NumberAndColor(){
//     var colorr=prompt("enter color");
//     var number=prompt("enter number");

//     for(var i=0;i<number;i++){
//      document.write("<span>"+colorr+"</span>")

//     }

// }
// NumberAndColor();
//9

// function buildText(){
//         var tagg=prompt("enter tag");
//     var textt=prompt("enter text");

//     var dogma=document.getElementById(tagg);
//     dogma.innerText=textt;

// }

// buildText();
//10

// function inputFunc(){
//  var userType=prompt("enter input type");
// var body=document.body;
//  var input=document.createElement('input');
// input.type=userType;
// body.append(input);

// }

// inputFunc();
//11

// function changeClass(){

// var nameClasss=prompt("enter class name");
// var classTextt=prompt("enter class text");

// var dogma=document.getElementsByClassName(nameClasss);
// for(i=0;i<dogma.length;i++){
//     dogma[i].innerText=classTextt;

// }
// }

// changeClass();

//12
// function addSpan(x){

// var elements=document.getElementsByClassName(x);
// for(i=0;i<elements.length;i++){
//  var spans=document.createElement('span');

// elements[i].append(spans);
// }
// }
// addSpan('ppp');

//13

function personDetails(name,lname,age){
if(name<18){
    document.write(name+lname+age)
}
else{
    var input=document.createElement('input');
    var body=document.body;
    input.type="text";

 document.write(name+""+body.append(input)+"<br>")
 document.write(lname+""+body.append(input))

}
}
personDetails('avi','aaa',70);