let MarkMass = 200;
let MarkHeight = 220;
let JohnMass = 92;
let JohnHeight = 162;
console.log("Mark的BMI:")
let BMI1 = MarkMass/(MarkHeight*MarkHeight)
console.log(BMI1.toPrecision(1))
console.log("John的BMI:")
let BMI2 = JohnMass/(JohnHeight*JohnHeight)
console.log(BMI2.toPrecision(1))

console.log('Mark的BMI是否比John更高？')
if(MarkHeight>JohnHeight){
    console.log('ture')
}
else{
    console.log('fales')
}# mygit
