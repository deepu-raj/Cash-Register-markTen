const billAmt = document.querySelector("#billAmount");
const cash = document.querySelector("#cashamt");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelectorAll(".output");
const error = document.querySelector("#errorMsg");

const denom = [2000,500,100,20,10,5,1];

function initReturn() {
    const input = cash.value - billAmt.value;
    if ((cash.value)<(billAmt.value)){
        error.innerText = " Cash amount invalid.";
    } else { 
        giveNoteDenom(input);
    }
}

function giveNoteDenom(input) {
    
    for (let i=0;i<=denom.length;i++){
        const q = Math.floor(input/denom[i]);
        input = input % denom[i];  
        output[i].innerText = q;
         }
    
}

checkBtn.addEventListener("click",initReturn);


