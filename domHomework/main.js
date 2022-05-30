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
// var h2=document.getElementById("h22");
//     h2.innerText=namee;
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

// function changeClass(nameClasss,classTextt){

// var dogma=document.getElementsByClassName(nameClasss);
// for(i=0;i<dogma.length;i++){
//     dogma[i].innerText=classTextt;

// }
// }

// changeClass("third","bbbbbbbbbbbb");

//12
// function addSpan(x){

// var elements=document.getElementsByTagName(x);
// for(i=0;i<elements.length;i++){
//  var spans=document.createElement('span');

// elements[i].append(spans);
// }
// }
// addSpan('p');

//13

// function personDetails(){
//     var name=prompt("enter name");
//     var lname=prompt("enter last name")
//     var age=prompt("enter age");
// if(age>18){

//     var input=document.createElement('input');
//     var body=document.body;
//     input.type="text";

//  document.write(name+" "+ lname+" "+age+"<br>")
//  body.append(input)
// }
// else{
//     document.write(name+lname+age)


// }
// }
// personDetails();

//14

// function moviesFunc(){

//     var img=document.createElement('img');
//     var body=document.body;
//     body.append(img);
//     img.setAttribute("id","img_id")


//     var moviesArray=[];

//     var movies={};
//    movies.nameOfMovie=prompt("enter name ");
//    movies.numOfViews=+prompt("enter views number");
//    movies.yearOfMovie=+prompt("enter year");
//    movies.imgMovie=prompt("enter img");
//    moviesArray.push(movies);

// document.write("name:"+movies.nameOfMovie+" "+"number of views:"+movies.numOfViews+" "+"<h1>"+"year:"+movies.yearOfMovie+"</h1>"+movies.imgMovie+"<br>")
// }
// moviesFunc();

//15

// var emploey={  

// };

// for(var i=0;i<5;i++){
// var userKey=prompt("enter key");
// var userValue=prompt("enter value");
// emploey.userKey=userValue;

// var result=emploey.userKey;
// document.write("<p>"+result+"</p>");

// }

//16

// function buildingFunc(){

//     var buildingArray=[];
// var userNumber=prompt("enter number please");
// for (let i = 0;i < userNumber;i++) {
// var building={
//     nameOfCharg:prompt("enter name of charge"),
//     nameofCompany:prompt("enter name of compny"),
//     numberOfSpots:prompt("ente spots"),
//     numberOfApartments:prompt("enter number of apartments"),
// };
// buildingArray.push(building);
    
// document.write("<p>"+building.nameOfCharg +" "+building.nameofCompany+" "+building.numberOfApartments +" "+building.numberOfSpots+" "+"</p>"+"<br>");
// }

// }

// buildingFunc();
//17
function storeFunc(){
var userNumber=prompt("enter number please");
var storeArray=[];

for (let i = 0; i < userNumber;i++) {
    var store={};
    store.storeName=prompt("enter store name");
    store.address=prompt("enter store addres");
    store.storeDevitions=prompt("enter store dev");
    store.storeEmployes=+prompt("enter store employes");

  
    if(store.storeEmployes>10){
        document.write("<div>"+store.storeName+" "+store.address+" "+store.storeDevitions+" "+storeEmployes+"</div>")

    }

    storeArray.push(store);


}




}




storeFunc();






