let array = [1, 7, 4, 23, 8, 3, 5, 9, 67, 65, 34];
array = array.sort((a, b) => a - b);
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
