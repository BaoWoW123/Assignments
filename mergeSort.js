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

