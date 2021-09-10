// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let tempArr = [];
  let searchStartPosition = 0;
  for (let char of str1) {

    if (str2.indexOf(char) > searchStartPosition) {
      searchStartPosition = str2.indexOf(char);
    } else { searchStartPosition = searchStartPosition; };

    if (str2.includes(char, searchStartPosition)) {
      tempArr.push(char);
    }
  }
  let newStr = tempArr.join("");
  return str1 === newStr ? true : false;
};

module.exports = isSubsequence;
