// Capitalize the first letter of each word in the string

function capitalizeLetters(str) {
  return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');
}

capitalizeLetters("I LOvE JaVaScripT"); // "I Love Javascript"
