// add whatever parameters you deem necessary


// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// no duplicate values so nums that are half of sumValue can be discounted
//loop up to halfway in the array
//for each value, check if (sumValue-value) is present in the array
//if true, add to a count

function countPairs(arr, sum) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(sum - arr[i], i + 1)) {
      count++;
    }
  }
  return count;
}

module.exports = countPairs;