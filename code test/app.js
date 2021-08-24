const denom = [2000,500,100,20,10,5,1];
var input = 3000;
console.log(denom.length);
var result;

for (i=0;i<=denom.length;i++){
        var q = Math.floor(input/denom[i])
        var r = input%denom[i]
        const res = [];
        /*if (() && r===0){
            console.log (denom[i],"invalid input. Payment not made.") 
            break;     
        } */
            input=r;
            res[i] = q;
         console.log(res[i],denom[i]);    
}

