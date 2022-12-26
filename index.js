//Merge sort algorithm using recursion
let arr = [2, 6, 1, 3, 8, 9, 1];
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  //loops merge until no value left
  while (left.length && right.length) {
    //finds lower value then pushes to array & removes value from initial array
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  //when right side has no value but left does
  while (left.length) {
    result.push(left.shift());
  }
  //when left side has no value but right does
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}





//Linked list data structure
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
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `${current.value} => `;
      current = current.nextNode;
      console.log(str);
    }
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
