
let array = [1, 7, 4, 23, 8, 3, 5, 9, 67, 65, 34];
array = array.sort((a, b) => a - b);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let start = 0;
let end = array.length - 1;

class Tree {
  constructor(root = null) {
    this.root = buildTree(array, start, end);
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
console.log(prettyPrint(tree.root));
