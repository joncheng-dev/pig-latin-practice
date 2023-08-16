// For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u." Don't treat "y" as a vowel. Examples: "away" becomes "awayway" and "okay" becomes "okayway."

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". Examples: "code" becomes "odecay" and "move" becomes "ovemay."

// If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."

let str;

function pigLatin(str) {
  if (str[0].toLowerCase() === ("a" || "e" || "i" || "o" || "u")) {
    console.log(str.concat("way"));
  } else if (str[0].toLowerCase() !== ("a" || "e" || "i" || "o" || "u")) {
    console.log(str.slice(1) + str[0] + "ay");
  }
}
