// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

//can the values contain duplicates? Assume not

function twoArrayObject(arrKeys, arrValues) {
  let finalObj = {};
  for (let i = 0; i < arrKeys.length; i++) {
    finalObj[arrKeys[i]] = arrValues[i] || null;
  }
  return finalObj;
};

module.exports = twoArrayObject;