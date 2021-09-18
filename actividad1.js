async function delay (ms) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Runs after ${ms/1000} seconds`);
        }, ms)
    })

    let result = await promise;
    console.log(result);
}

delay(3000);