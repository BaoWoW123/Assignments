class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
    prepend(value) {
      let newHead = value; //creates var and assigns value to it
      newHead.nextNode = this.head; //newHeads points to class's current head
      this.head = newHead; //class's head reassigns to newHead
    }
    append(value) {
      let newNode = value;
      let current;
      //creates a head with given node if null
      if (!this.head) {
        this.head = newNode;
      } else {
        //creates head if list is empty
        current = this.head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
    }
  
    size() {
      let size = 0;
      if (this.head == null) {
        return 0;
      } else {
        let current = this.head;
        while (current) {
          size++;
          current = current.nextNode;
        }
        return size;
      }
    }
    head() {
      this.head;
    }
    tail() {
      let tail = this.head;
      if (tail == null) {
        return "No list detected";
      } else {
        while (tail.nextNode) {
          tail = tail.nextNode;
        }
        return tail;
      }
    }
    at(index) {
      let nodeIndex = 1;
      let current = this.head;
      while (current) {
        if (index === nodeIndex) {
          return current;
        }
        nodeIndex++;
        current = current.nextNode;
      }
      return "Out of bounds";
    }
    pop() {
      let current = this.head;
      let tail;
      if (current == null) return;
      while (current.nextNode) {
        //loops until next node is null
        tail = current; //Assigns second last node to tail
        current = current.nextNode;
      }
      //tail's next node assigns to null, popping off last node
      tail.nextNode = null;
    }
    contains(value) {
      let current = this.head;
      while (current) {
        if (value === current.value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    }
    find(value) {
      let current = this.head;
      let index = 1;
      while (current) {
        if (value === current.value) {
          return index;
        }
        index++;
        current = current.nextNode;
      }
      return null;
    }
    toString() {
      let current = this.head;
      let str = "";
      while (current) {
        str += `${current.value} => `;
        current = current.nextNode;
      }
      return (str += "null");
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  let child = new Node("bao");
  let child2 = new Node("after");
  let child3 = new Node("first");
  let list = new LinkedList();
  list.append(child);
  list.append(child2);
  console.log(list.toString());
