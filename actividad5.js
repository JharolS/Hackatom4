async function wait (){
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(10);
}

function f(){
    wait ();
}
f();