function add(number) {
    number = String(number);
    let sum = 0;
    // number.charCodeAt = number;
    for (let index = 0; index < number.length; index++) {
        if(number[index] === "-"){
            index++;
            sum -= Number(number[index]);
    }
    else sum += Number(number[index]);
    // return sum;
}
sum = String(sum)
if (sum.length === 1) return sum;
else if(sum.length === 2 && sum[0] === "-") return sum;
else return add(sum);
}
number = 38;
console.log(add(number))