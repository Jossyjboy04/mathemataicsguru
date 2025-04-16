// JavaScript code for the calculator functionality
function trigOperation(){
    let angle=document.getElementById("angle").value;
    let func=document.getElementById("func").value;
    let answera;
    let answerr;

    if(func==="sin"){
        answera=Math.sin(angle);
        answerr=Math.sin(angle*(Math.PI/180));
    }
    else if(func==="cos"){
        answera=Math.cos(angle);
        answerr=Math.cos(angle*(Math.PI/180));
    }
    else if(func==="tan"){
        answera=Math.tan(angle);
        answerr=Math.tan(angle*(Math.PI/180));
    }
    else if(func==="csc"){
        answera=1/Math.sin(angle);
        answerr=1/Math.sin(angle*(Math.PI/180));
    }
    
    else{
        alert("Invalid function selected.");
        return;
    }   
    document.getElementById("trigResult").textContent=func + angle +" is "+ answera +" in radian";
    document.getElementById("trigResult1").textContent=func + angle +" is " + answerr + " in degree";

}

function minimum(){
    let min=document.getElementById("min").value;
    array=min.split(",")
    array=array.map(Number);
    let calcMin=Math.min(...array);
    document.getElementById("minResult").textContent=calcMin;
}
function maximum(){
    let max=document.getElementById("max").value;
    array=max.split(",")
    array=array.map(Number);
    let calcMax=Math.max(...array);
    document.getElementById("maxResult").textContent=calcMax;
}

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
        if(second!==0){
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