// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//start at either end of the array, take the two values and calculate the average
//if result is higher than target average, move in from right
//if result is lower than target average, move in from left

// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

function averagePair(arr, target) {
  let idxLeft = 0;
  let idxRight = arr.length - 1;
  while (idxLeft < idxRight) {
    let average = (arr[idxLeft] + arr[idxRight]) / 2;
    if (average === target) return true;
    if (average < target) {
      idxLeft++;
    }
    if (average > target) {
      idxRight--;
    }
  }
  return false;
}

module.exports = averagePair;