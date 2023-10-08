function isEven(number) {

    if(number < number){
    number = - number;
    }
    if(number % 2 == 0){
    return true
    }
    if(number % 2 == 1){
        return false
    }
    return isEven(number - 2)
    
}
console.log(isEven(75))




