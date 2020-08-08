function callback (err, number) {
    if(!err)
        return Number(number) + 100;
    else
        return "Callback Error";
}
function sun(number, callback = null){

    setTimeout(()=> {
        if(!isNaN(number)) {
            console.log('Sun number: ', number);
            if(callback != null)
                console.log(callback(err = false, number));
        }
        else
            console.log(callback(err = true))
    },200);   
        
}

async function promiseEx(){ 
    var myVariable = 9
    let promise = await new Promise ( (resolve, reject)=> {
        resolve(myVariable)
    });
    return promise;
}

console.log(1)
sun('batatas', callback);
console.log(2)
promiseEx().then((data)=>{
    console.log(data)
})