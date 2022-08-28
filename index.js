function isPalindrome(word) {
  // Write your algorithm here
  // reverse the word
    //1. splitting the word
  const splitted = word.split('')

    // 2. Reverse the splitted word
  const reversing = splitted.reverse()

    // 3. Join the reversed word
  const reversed = reversing.join('')

    // check if the word is a palindrome
  if(word === reversed){
    return true
  }
  return false
}


/* 
  Add your pseudocode here

  1. Split the string into individual elements of an array
  2. Reverse the array of strings
  3. Join the array of strings
  4. Check if the reversed string is the same as the initial word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
