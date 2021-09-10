// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

//convert to strings
//first check length is the same, if not return false
//create object for each array
//take first number object as base and check if 

function createObj(str) {
  const baseObj = {};
  for (let char of str) {
    baseObj[char] = baseObj[char] + 1 || 1;
  }
  return baseObj;
}


function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length != str2.length) return false;
  const objStr1 = createObj(str1);
  const objStr2 = createObj(str2);
  for (key in objStr1) {
    if (!objStr2[key]) return false;
    if (objStr1[key] != objStr2[key]) return false;
  }
  return true;
}

module.exports = sameFrequency;