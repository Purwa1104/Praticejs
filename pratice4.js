//bmi calculator
function bmiCalculator (weight, height) {
    var n = weight/ (Math.pow(height,2));
    if(n<18.5){
        var interpretation = "Your BMI is " + n + ", so you are underweight."
    }
    if (n>18.5 && n<24.9){
        var interpretation = "Your BMI is " + n + ", so you have a normal weight."
    }
    else {
        var interpretation = "Your BMI is " + n + ", so you are overweight."
    }
    
    return interpretation;
}