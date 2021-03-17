


const fib = [1,2,3,5,8,13]

for (let i = 0; i < fib.length; i++){
    console.log('in', fib[i])

    setTimeout( ()=>{
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}

// console.log( 'out', i)