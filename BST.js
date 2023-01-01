let array = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}
array = array(11)
let end = array.length - 1;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root = null) {
    this.root = buildTree(array, 0, end);
  }

  insert(value) {
    array.push(value);
    array = array.sort((a, b) => a - b);
    end = array.length - 1;
    this.root = buildTree(array, 0, end);
    prettyPrint(tree.root);
  }

  delete(value) {
    let root = this.root;
    while (root) {
      if (root.value === value) {
        let index = array.indexOf(value);
        array.splice(index, 1);
        end = array.length - 1;
        this.root = buildTree(array, 0, end);
        return prettyPrint(tree.root);
      } else if (root.value < value) {
        root = root.right;
      } else if (root.value > value) {
        root = root.left;
      }
    }
  }

  find(value) {
    let root = this.root;
    while (root) {
      if (root.value === value) {
        return root;
      } else if (root.value < value) {
        root = root.right;
      } else if (root.value > value) {
        root = root.left;
      }
    }
    console.log("hola");
  }

  height(root = this.root) {
    if (root === null) return 0;

    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, root = this.root, count = 0) {
    if (root === null) return;
    if (value == root.value) return count;
    if (value < root.value) {
      return this.depth(value, root.left, count + 1);
    }
    if (value > root.value) {
      return this.depth(value, root.right, count + 1);
    }
  }

  preorder(root = this.root, preArray = []) {
    //root, left, right
    if (root == null) return;
    preArray.push(root.value)
    this.preorder(root.left, preArray)
    this.preorder(root.right, preArray)
    return preArray;
  }

  inorder(root = this.root, inArray = []) {
    //left, root, right
    if (root == null) return;
    this.inorder(root.left, inArray)
    inArray.push(root.value)
    this.inorder(root.right, inArray)
    return inArray;
  }

  postorder(root = this.root, postArray = []) {
    //left,right,root
    if (root == null) return;
    this.inorder(root.left, postArray)
    this.inorder(root.right, postArray)
    postArray.push(root.value)
    return postArray;
  }

  isBalanced(root = this.root, height = 0) {
    if (root == null) return 0;
    let leftSubtree = this.isBalanced(root.left, height + 1);
    let rightSubtree = this.isBalanced(root.right, height + 1);
    return (Math.abs(rightSubtree - leftSubtree)) < 2 ? true : false;
    
  }
  
  rebalance() {
    array = array.sort((a,b) => a - b);
    return this.root = buildTree(array, 0, array.length-1)
  }
}


function buildTree(arr, start, end) {
  if (start > end) return null;
  let mid = parseInt((start + end) / 2);
  let root = new Node(arr[mid]);

  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);

  return root;
}

function levelOrder(root) {
  if (root == null) return;
  let queue = [];
  let arr = [];
  queue.push(root);
  while (queue) {
    root = queue[0];
    if (root == null) return arr;
    if (root.left) queue.push(root.left);
    if (root.right) queue.push(root.right);
    arr.push(root.value);
    queue.shift();
  }
}



const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let tree = new Tree();
