// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters.


//create an object for both message and letters with letter as key and frequency as value
//check key of message object exists in letters object and with same or greater frequency


function createObj(str) {
  baseObj = {};
  for (let char of str) {
    baseObj[char] = baseObj[char] + 1 || 1;
  }
  return baseObj;
}


function constructNote(message, letters) {
  const messageObj = createObj(message);
  const lettersObj = createObj(letters);
  for (let key in messageObj) {
    if (!lettersObj[key]) return false;
    if (messageObj[key] > lettersObj[key]) return false;
  }
  return true;
}

module.exports = { constructNote };