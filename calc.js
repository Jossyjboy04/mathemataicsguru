alert("welcome to the calculator app");

function calculate(){
    let first=Number(document.getElementById("first").value);
    let operation=document.getElementById("operation").value;
    let second=Number(document.getElementById("second").value);
       let result;
    if(operation==="add"){
        result=first+second;
    }
    else if(operation==="subtract"){
        result=first-second;
    }   
    else if(operation==="multiply"){
        result=first*second;
    }
    else if(operation==="divide"){
        if(result!==0){
            result=first/second;
        }
        else{
        result="operation not possible";
        }
    }
    else if(operation==="modulus"){
        result=first%second;
    }
    else if(operation==="exponent"){
        result=Math.pow(first,second);
    }
    else if(operation==="log"){
        if(first>0 && second>0 &&second!==1){
            result=Math.log(first)/Math.log(second);
        }
    }
    else{
        alert("Invalid operation selected.");
        return;
    }
    document.getElementById("result").textContent=result;  
}