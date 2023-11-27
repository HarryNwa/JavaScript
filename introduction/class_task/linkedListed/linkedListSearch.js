class Node{
    constructor(n){
        this.data = n;
        this.next = null;

    }

}

var head;
function insertAtHead(new_data){
    var newNode = new Node(new_data);
    newNode.next = head;

    head = newNode;
}
function searchData(head, o){
    var current = head;

    while(current != null){
        if(current.data == o)

        return true;
        current = current.next;
    }
    return false;
}
