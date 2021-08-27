const billAmt = document.querySelector("#billAmount");
const cash = document.querySelector("#cashamt");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelectorAll(".output");
const error = document.querySelector("#errorMsg");
const nullOutput = [];
const denom = [2000,500,100,20,10,5,1];

function initReturn() {
    const input = cash.value - billAmt.value;
    if ((cash.value)<(billAmt.value)){
        error.innerText = " Cash amount invalid.";
            for (let i=0;i<=denom.length;i++){
                output[i].innerText = 0;
            }
        } else { 
        giveNoteDenom(input);
    }
}

function giveNoteDenom(input) {
    error.innerText="";
    for (let i=0;i<=denom.length;i++){
        const q = Math.trunc(input/denom[i]);
        input = input % denom[i];  
        output[i].innerText = q;
         }
    
}

checkBtn.addEventListener("click",initReturn);


