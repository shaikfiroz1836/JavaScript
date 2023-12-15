let ids = [1,2,3,4,5]
ids.map(()=>{
    console.log("GM");
})

console.log("******************************")

ids.forEach(()=>{
    console.log("GM");
})

console.log("******************************")

ids.filter(()=>{
    console.log("GM");
})

console.log("******************************")

ids.reduce(()=>{
    console.log("GM");
})

console.log("******************************")

let new_ids=ids.map((id)=>{
    return id+1;
})
console.log(ids)
console.log(new_ids)