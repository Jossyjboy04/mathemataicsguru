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
function greet(event){
   let a=document.getElementById("yes").checked;
    let b=document.getElementById("no").checked;
    let c=document.getElementById("pu")
if(a) {
  alert("login with your details.");
}
else{ 
event.preventDefault();
c.style.backgroundColor="red";  
}

}
function signup(event){
  let nam=document.getElementById("nam").value;
    let mail=document.getElementById("ail").value;
     let phone=document.getElementById("ph").value;
     if(nam&&mail&&phone){
       alert("Welcome to Mathematics Guru")
     }
}