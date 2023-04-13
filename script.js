const numberinput = document.querySelectorAll('.number-input');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const lcdupper = document.getElementById('lcdscreenupper');
const clearallinput =document.getElementById('CE');
const clearonce =document.getElementById('C');
const deletenum =document.getElementById('del');
let lcdanswer = document.getElementById('lcdscreenlower');
let results=0;
let screentext = false;
let toclear=false;
let currentoperator = null;
let firstnumber=0;
let firsthasnumber = false
let secondhasnumber=false
let secondnumber=0;


clearallinput.addEventListener('click',() => clearall());
clearonce.addEventListener('click', () => clearone());
deletenum.addEventListener('click', () => del());
equals.addEventListener('click', () => operatenow(currentoperator,firstnumber,secondnumber))


document.addEventListener("keydown", function(event){
    if (event.key>="0" && event.key <="9"){
        inputed(event.key);
    }
    if (event.key==="/" || event.key ==="*" || event.key ==="-" || event.key ==="+"){
        compute(event.key);
    }
    if (event.key==="Backspace"){
        del();
    }
    if (event.key==="Enter"){
        operatenow(currentoperator,firstnumber,secondnumber);
    }
    
});




function inputed(num){

if(toclear){
        clearone();
    }
    lcdupper.textContent+=num;
    if(firsthasnumber==false || currentoperator===null){
        firstnumber=parseFloat(lcdupper.textContent);
                firsthasnumber=true;
    }
    else if(currentoperator!==null && firsthasnumber){
        secondnumber=parseFloat(lcdupper.textContent);
        secondhasnumber=true;
    }
    if(lcdupper.textContent.length===12 || lcdupper.textContent=='ERROR'){
        lcdupper.textContent='ERROR';
        firsthasnumber=false;
        currentoperator=null;
        return num=null;
    }
}

function clearone() {
    lcdupper.textContent=''
    toclear=false;
}


function clearall(){

    lcdupper.textContent='';
    lcdanswer.textContent='';
    screentext=false;
    currentoperator=null;
    firstnumber=0;
    firsthasnumber=false;
    secondnumber=0;
    secondhasnumber=false;

}

function del() {
    if(lcdupper.textContent!=='ERROR'){
    lcdupper.textContent = lcdupper.textContent.toString().slice(0, -1);
    if(firsthasnumber==false || currentoperator===null){
        firstnumber=parseFloat(lcdupper.textContent);
                firsthasnumber=true;
    }
    else if(currentoperator!==null && firsthasnumber){
        secondnumber=parseFloat(lcdupper.textContent);
        secondhasnumber=true;
    }
    }
}

numberinput.forEach((button) =>{button.addEventListener('click',() => inputed(button.textContent));});

operator.forEach((button) =>{button.addEventListener('click',() => compute(button.textContent));});

/**
 * 
 * @param {selected operator} operate  this will get the operator
 */

function compute(operate){
    if(firsthasnumber==true && secondhasnumber===false){
        currentoperator=operate;
        toclear=true;
    }
    else if(firsthasnumber && secondhasnumber){
        operatenow(currentoperator,firstnumber,secondnumber);
        currentoperator=operate;
        firstnumber=results;
        secondhasnumber=false;
        toclear=true;
    }


    }


    function operatenow(operand, num1, num2){
        switch(operand){
            case'+':
                return addition(num1,num2);
            case'-':
                return substact(num1, num2);
            case'*':
                return multiply(num1, num2);
            default:
                return divide(num1, num2);
        }
    }

function addition(a,b){
        results=a+b;
    return lcdanswer.textContent = results;
}
function substact(a,b) {
    results=a-b;
    return lcdanswer.textContent = results;
}
function multiply(a,b) {
    results=a*b;
    return lcdanswer.textContent = results;
}
function divide(a,b) {
    results=a/b;
    return lcdanswer.textContent = results;
}