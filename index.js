
var add = document.getElementById("add");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var sub = document.getElementById("sub");
var mod = document.getElementById("mod");
var clar = document.getElementById("clr");
var result = document.getElementById("result");

add.addEventListener("onclick",addition);
function addition(){
    var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
       
       var x =Number(num1.value);
       var y =Number(num2.value);
        
       var z = x+y;
       result.value=z;
        num1.value="";
        num2.value="";
    
}

sub.addEventListener("onclick",subtraction);
function subtraction(){
    var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
    

    var x =Number(num1.value);
    var y =Number(num2.value);
     
    var z = x-y;
    result.value =z;
    num1.value="";
    num2.value="";
 
}

mul.addEventListener("onclick",multiplication);
function multiplication(){
    var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

    var x =Number(num1.value);
    var y =Number(num2.value);
     
    var z = x*y;
    result.value =z;
    num1.value="";
    num2.value="";
 
}

div.addEventListener("onclick",division);
function division(){
    var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

    var x =Number(num1.value);
    var y =Number(num2.value);
     
    var z = x/y;
    result.value =z.toFixed(2);
    num1.value="";
    num2.value="";
 
}

mod.addEventListener("onclick",modulas);
function modulas(){
    var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

    var x =Number(num1.value);
    var y =Number(num2.value);
     
    var z = x%y;
    result.value =z.toFixed(2);
    num1.value="";
    num2.value="";
 
}

clar.addEventListener("onclick",clarity);
function clarity(){
    num1.value="";
    num2.value="";
    result.value="";
}







