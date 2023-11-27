const Node = require("./node")

class LinkedList{
    constructor(){
        this.head = null;
        // this.tail = null;

        this.insertAtHead = (value) => {
            let newNode = new Node(value);
            newNode.nextElement = this.head;
            this.head = newNode;
        }
        this.deleteAtHead = (value) => {
            if(head == null){
                return;
            
            }
            var temp = this.head;
            if (value == 0){
                this.head = temp.nextElement;
                return;
            }
            
            for(i = 0; temp != null && i < value - 1; i++)
                    temp = temp.nextElement;

            if (temp == null || temp.nextElement == null)
            return;
                
            var next = temp.nextElement.nextElement;
                
            temp.nextElement = nextElement; 

             
        }

        this.insertAtEnd = (value) => {
            let newNode = new Node(value);
            let element = this.head;

            if(element === null){
                this.head = newNode;
                // this.tail = newNode;
                return;
            }

            while(element !== null){
                element = element.nextElement;
            }
            element.nextElement = newNode;
            // this.tail = newNode;
        }

        this.getLast = () => {
            let element = this.head;

            if(element == null){
                element = element.nextElement;
            }
            while(element.nextElement !== null){
                element = element.nextElement;
            }
            // return this.tail.value
        }
        this.getHead = () => {
            if(this.head !== null){
                return this.head.value;
            }
        }
    }
}
LinkedList.prototype.isEmpty = function(){
    return this.head === null;

}

LinkedList.prototype.printElements = function(){
    let element = this.head;

    while(element !== null){
        process.stdout.write(`${element.value} -> `);
        element = element.nextElement;
    }

    process.stdout.write(`null`);
}
LinkedList.prototype.removeDuplicates = function(){
    let pointerA = this.head;
    let pointerB = this.head?.nextElement;

    while(pointerA){
    if(pointerA.value === pointerB.value){
        pointerA.nextElement = pointerB.nextElement;
        pointerB = pointerB.nextElement
    }else{
        pointerA = pointerA.nextElement;
        pointerB = pointerB.nextElement;
    }
    
    }
}

module.exports = LinkedList;