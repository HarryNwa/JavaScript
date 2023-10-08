function countBs(string) {
    let n = 0;
    for (let index = 0; index < string.length-1; index++) {
        // for (let column = 0; column < string[index].length; column++) {
            // const element = [column];

        
        if(string[index] == "B"){
        n++;
    }
        return n
        
}
}
console.log(countBs("Blessing"))

function countChar(word, alphabet) {
    let count = 0;
    for (let index = 0; index < word.length; index++) {
    if(word[index] == alphabet)
        count++;
    }
    return count 
}

console.log(countChar("Moyin", "o"))