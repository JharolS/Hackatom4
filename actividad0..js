let promise = new Promise((resolve, reject) =>{
    resolve(console.log(1));
    setTimeout(() => {
        resolve(console.log(2));    
    }, 1000);
});

promise.then(); // print "1" after 1 second print "2"