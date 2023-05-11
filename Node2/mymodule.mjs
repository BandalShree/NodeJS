export const factorial = (a)=>{
    let temp=1
    while(a)  temp*=a--
    return temp
}
export const myprime = (a)=>{
    if(a===0) return false
    else if(a===1 || a===2) return true
    else if(a%2===0) return false
    else{
        for(let i=3;i<a/2;i+=2)  
        if(a%i===0) return false
        return true
    }
}
export const printable = (a)=>{
    let arr = []
    for(let i=1;i<=10;i++) arr.push(`${a}x${i}=${a*i}`)
    return arr
}