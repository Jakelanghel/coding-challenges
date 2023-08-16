/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = Array.from(str1);
  const arr2 = Array.from(str2);

  return arr1.every((currentValue) => arr2.includes(currentValue));
}
console.log(isAnagram("rainbow", "crossbow"));
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));
console.log(isAnagram("treasure", "measure"));
