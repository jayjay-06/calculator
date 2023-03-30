const numberinput = document.querySelectorAll('.number-input');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const lcdupper = document.getElementById('lcdscreenupper');
const clearallinput =document.getElementById('CE');
const clearonce =document.getElementById('C');
const deletenum =document.getElementById('del');
let numberarray=[];
let screentext = false;
let currentoperator = null;


clearallinput.addEventListener('click',() => clearall());
clearonce.addEventListener('click', () => clearone());
deletenum.addEventListener('click', () => del());




function inputed(num){
 if(lcdupper.textContent.length == 12 || lcdupper.textContent=='ERROR'){
    lcdupper.textContent ='ERROR';
    screentext=false;
 }
else{

        screentext=true;
    lcdupper.textContent+=num;
}
}

function clearone() {
    lcdupper.textContent=''
    screentext=false;
}


function clearall(){
lcdupper.textContent=''
screentext=false;
currentoperator=null;
numberarray=[];
}

function del() {
    if(lcdupper.textContent!=='ERROR'){
    lcdupper.textContent = lcdupper.textContent.toString().slice(0, -1);
    }
}




numberinput.forEach((button) =>{button.addEventListener('click',() => inputed(button.textContent));});

operator.forEach((button) =>{button.addEventListener('click',() => compute(button.textContent));});




function compute(operate){
    if(currentoperator!==operate){
        currentoperator =operate;
    if(screentext==true){
        numberarray.push(lcdupper.textContent);
        screentext=false;
    }
}

console.log(numberarray, screentext, currentoperator);
}

function addition(){

}
function substact() {

}
function multiply() {

}
function divide() {

}