const sum = require("./sum")

test("that we can add two numbers", ()=>{
    expect(sum(2, 3)).toBe(5);
})