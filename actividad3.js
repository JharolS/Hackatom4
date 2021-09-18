async function loadJson(url){
    let promise = new Promise((resolve, reject) => {
        return fecth (url)
        .then (response =>{
            if(response.status == 200) {
                resolve(response.json());
            } else {
                reject(new Error(response.status));
            }
        })    
    })
    let result = await promise;
    console.log(result)
}
loadJson('no-such-user.json').catch();