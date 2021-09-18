async function printNumbers(from, to) {
    new Promise(() => {
        for (let i = from; i < to; i++) {
            setTimeout(() => {
            console.log(i); 
        }, 1000)}
    })
}
printNumbers(5, 8);

function printNumbers(from, to) {
    let interval = setInterval(() => {
      while (from <= to) {
          console.log(from);
          from++;
          clearInterval(interval);
      }
    }, 1000);
  
  }
printNumbers(5, 8);