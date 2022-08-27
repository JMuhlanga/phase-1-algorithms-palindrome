/* 
  Add your pseudocode here

  1. Initialize reverseString function
  2. function isPalindrome(string){
        if(string === reverseString(string)){
          return true
        }else{
          return false
        }
      }

  opted for use of for loop instead within the function

*/

/*
  Add written explanation of your solution here
  Basically making a reverse string function and initializing it 
*/
function isPalindrome(word) {
    // Write your algorithm here
    let smallWord = word.toLowerCase();
    const len = smallWord.length

    for (let i = 0; i < len/2;i++){
      if (smallWord[i] !== smallWord[len - 1 -i]){
        return false
      }else{
        return true
      }
    }
}

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
