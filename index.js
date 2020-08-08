/**
 * This function will return the addition of the @param number to 100
 * If the @param number can not be add to 100, the callback function will return the @param err
 * Callbacks are functions that once called will return the result after finish the process
 * @param {*} err 
 * @param {*} number 
 */
function callback (err, number) {
    if(!err){
        newValue = (Number(number) + 100);
        console.log("Hi, I've finish the process of the function sun. The result is: " + newValue);
        return newValue;
    }
    else
        return "Callback Error: "+err;
}

/**
 * This function will add the @param number to other number values
 * The function wait to receive a callback function that will return the result after the process
 * The steTimeout function will simulate the process time
 * @param {*} number 
 * @param {*} callback 
 */
function sun(number, callback = null){
    setTimeout(()=> {
        if(!isNaN(number)) {
            if(callback != null)
                return (callback(err = false, number));
        }
        else
            return (callback(err = true))
    },1000);        
}

/**
 * async/await functions wait the end of process 
 * @param {*} number 
 */
async function promiseExAsyncAwait(number){ 
    var myVariable = null;
    let promise = await new Promise ( (resolve, reject)=> {
        setTimeout(()=> {
            if(!isNaN(number)) {
                console.log('Promise | Sun number: ', number);
                myVariable = (Number(number) + 100);
            }
            else {
                myVariable = false;
            }
            resolve(myVariable)
        },500);        
    });
    return promise;
}

/**
 * no async/await promises, have a similar behavior to the callbacks functions
 * @param {*} number 
 */
function simplePromise(number) {
    var myVariable = null;
    let promise = new Promise ( (resolve, reject)=> {
        setTimeout(()=> {
            if(!isNaN(number)) {
                console.log('Promise | Sun number: ', number);
                myVariable = (Number(number) + 100);
            }
            else {
                myVariable = false;
            }
            resolve(myVariable)
        },2000);        
    });
    return promise;
}

console.log('log 1: ',sun(23, callback));
simplePromise(30).then((data)=>{
    console.log('log 2: ', data)
})
promiseExAsyncAwait(23).then((data)=>{
    console.log('log 3: ', data)
})
