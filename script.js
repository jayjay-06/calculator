const numberinput = document.querySelectorAll('.number-input');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const lcdupper = document.getElementById('lcdscreenupper');
const clearallinput =document.getElementById('CE');
const clearonce =document.getElementById('C');
const deletenum =document.getElementById('del');
let lcdanswer = document.getElementById('lcdscreenlower');
let screentext = false;
let currentoperator = null;
let firstnumber=0;
let firsthasnumber = false
let secondhasnumber=false
let secondnumber=0;


clearallinput.addEventListener('click',() => clearall());
clearonce.addEventListener('click', () => clearone());
deletenum.addEventListener('click', () => del());
equals.addEventListener('click', () => operatenow(currentoperator,firstnumber,secondnumber))




function inputed(num){

if(lcdupper.textContent==='0' || screentext){
        clearone();}
         if(lcdupper.textContent.length == 12 || lcdupper.textContent=='ERROR'){
            lcdupper.textContent ='ERROR';
            screentext=false;
         }
         else {
            lcdupper.textContent+=num;
            if(firsthasnumber){
            secondnumber=parseFloat(lcdupper.textContent);
            secondhasnumber=true
            }
         }
}

function clearone() {
    lcdupper.textContent=''
    screentext=false;
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
    }
}

numberinput.forEach((button) =>{button.addEventListener('click',() => inputed(button.textContent));});

operator.forEach((button) =>{button.addEventListener('click',() => compute(button.textContent));});

/**
 * 
 * @param {selected operator} operate  this will get the operator
 */

function compute(operate){
    if(currentoperator==null || firsthasnumber==false){
        currentoperator = operate;
        firstnumber=parseFloat(lcdupper.textContent);
        firsthasnumber=true;
        screentext=true;
    }
    if(secondhasnumber){
        currentoperator = operate;
        lcdanswer.textContent=0;
        firsthasnumber=false;
        screentext=true;
        secondhasnumber=false;
        operatenow(currentoperator,firstnumber,secondnumber)
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
    return lcdanswer.textContent = a+b;
}
function substact(a,b) {
    return lcdanswer.textContent = a-b;
}
function multiply(a,b) {
    return lcdanswer.textContent = a*b;
}
function divide(a,b) {
    return lcdanswer.textContent = a/b;
}