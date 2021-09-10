// add whatever parameters you deem necessary

// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).



function separatePositive(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    if (arr[leftIdx] < 0 && arr[rightIdx] > 0) { //left is -ve and right is +ve so need to swap
      let tempVal;
      tempVal = arr[leftIdx];
      arr[leftIdx] = arr[rightIdx];
      arr[rightIdx] = tempVal;
      leftIdx++;
      rightIdx--;
    };
    if (arr[leftIdx] > 0 && arr[rightIdx] < 0) { //left is +ve so ok; right is -ve to ok
      leftIdx++;
      rightIdx--;
    };
    if (arr[leftIdx] > 0 && arr[rightIdx] > 0) { //left is +ve so ok; right is +ve so compare with next on left
      leftIdx++;
    };
    if (arr[leftIdx] < 0 && arr[rightIdx] < 0) {
      rightIdx--;
    }
  }
  return arr;
}

module.exports = separatePositive;