const LinkedList = require("../linkedListed/linked_list");

test("that linked_list is empty", () => {
    let list = new LinkedList();
    let isTrue = list.isEmpty();
    expect(isTrue).toBe(true);

})

test("that element can be inserted at the head", () =>{
    let list = new LinkedList();

    list.insertAtHead(5);
    let headValue = list.head.value;
    
    expect(headValue).toBe(5)
})
test("that element can be removed", () => {
    
})

test("that element can be added at the end", () => {
    let list = new LinkedList();
    list.insertAtEnd(5);
    list.insertAtEnd(2);
    list.insertAtEnd(3);

    let headValue = list.getHead()
    expect(lastElement)
})