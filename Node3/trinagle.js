exports.isEquilateral=(side1,side2,side3)=>{
    return (side1===side2 && side3===side1)?true:false
}

exports.calPerimeter=(side1,side2,side3)=>{
    return side1+side2+side3
}