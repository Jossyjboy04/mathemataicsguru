//javascript function for signin
let out=document.getElementById("out");
out.addEventListener("focus",function(){
 out.style.backgroundColor="burlywood";
})
out.addEventListener("blur",function(){
 out.style.backgroundColor="none";
})

function greet(event){
  let a=document.getElementById("yes").checked;
   let b=document.getElementById("no").checked;
   let c=document.getElementById("pu")
if(a) {
 alert("login with your details.");
}
else{ 
event.preventDefault();
c.style.backgroundColor="burlywood";  
}
}
//javascript function for sign up
let nam=document.getElementById("nam");
    let ail=document.getElementById("ail");
     let ph=document.getElementById("ph");
     nam.addEventListener("focus",function(){
      nam.style.backgroundColor="burlywood";
     })
     nam.addEventListener("blur",function(){
      nam.style.backgroundColor="white";
     })
     ail.addEventListener("focus",function(){
      ail.style.backgroundColor="burlywood";
     })
     ail.addEventListener("blur",function(){
      ail.style.backgroundColor="white";
     })
     ph.addEventListener("focus",function(){
      ph.style.backgroundColor="burlywood";
     })
     ph.addEventListener("blur",function(){
      ph.style.backgroundColor="white";
     })


function signup(event){
  let nam=document.getElementById("nam").value;
    let mail=document.getElementById("ail").value;
     let phone=document.getElementById("ph").value;
     if(nam&&mail&&phone){
       alert("Welcome to Mathematics Guru")
     }
}
let pu=document.getElementById("pu");
pu.addEventListener("focus",function(){
 pu.style.backgroundColor="burlywood";
})
pu.addEventListener("blur",function(){
 pu.style.backgroundColor="black";
})
//function for review
function review(event){
  let name=document.getElementById("name").value;
   let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
if(name&&email&&number) {
 alert("Thanks for the review " + name);
}
else{
 event.preventDefault();
 alert("please fill in the form");
}
}
