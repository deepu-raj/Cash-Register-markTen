const billAmt = document.querySelector("#billAmount");
var cash = document.querySelector("#cashamt");
const checkbtn = document.querySelector("#check-btn");
const output = document.querySelectorAll(".output");
var error = document.querySelectorAll(".errorMsg");

const denom = [2000,500,100,20,10,5,1];
var input = billAmt.value-cash.value;

function initReturn () {
    if (cash.value<billAmt.value){
        error.innerHtml = " Cash amount invalid."
    } else { giveNoteDenom()

    }
}
function giveNoteDenom () {
    
    for (i=0;i<=denom.length;i++){
        var q = Math.floor(input/denom[i])
        var r = input%denom[i]
        input=r;
        output[i].= q;
           }
    
}
checkbtn.addEventListener("click",initReturn);


