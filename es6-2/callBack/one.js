let calc = (a,b,op)=>{
    if(op==="Sum"){
        return a+b
    }
    if(op==="Multi"){
        return a*b
    }
}

let r1 = calc(10,20,"Sum")
let r2 = calc(10,20,"Multi")

console.log(r1)
console.log(r2)