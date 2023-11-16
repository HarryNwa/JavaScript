function word(s) {
    let u = "";
    // let v = []
    // let count = 0;

    // if(s.length === t.length)
    // return u;
    
    for (let index = 0; index < s.length; index++) {
        // count++;
        for (let ind = index; ind < s.length; ind++) {
            if(s[index] < s[ind]){
                u = s[index];
                s[index] = s[ind];
                s[index] = u;

        // if([index] != t[ind]){
            return s + " is " + true;
        }
        }
    }
    return false;
}
s = "anagram"; t = "nagaram";
console.log(word(s, t));

ogwugwu nwao980hx

