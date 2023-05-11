const add = (a,b)=>{
    return a+b
}
const substract = (a,b)=>{
    return a-b
}
const multiply = (a,b)=>{
    return a*b
}
const divide = (a,b)=>{
    return a/b
}
const square = (a)=>{
    return a*a
}
const sum = (a,b,...c)=>{
    for(let i of c)
        a+=i
    return a+b
}

module.exports = {
    add:add,
    sub:substract,
    mul:multiply,
    div:divide,
    square:square,
    sum:sum
}