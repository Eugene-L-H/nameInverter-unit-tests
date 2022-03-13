const nameInverter = (name) => {
  if (name === ' ') {
    return ' ';
  } 

  // Split string into different names
  let split = name.split(' ');

  // Remove whitespace from split
  let wordsNoSpaces = [];
  for (let word of split) {
    if (word.length !== 0) {
      wordsNoSpaces.push(word);
    }
  }

  // If only one name present
  if (wordsNoSpaces.length === 1) {
    // Checks the last char for '.' If true that means name is an honorific
    if (wordsNoSpaces[0][wordsNoSpaces[0].length - 1] === '.') {
      return ' ';
    }
    // Return single name with no leading or trailing spaces
    return wordsNoSpaces[0];
  }

  // Move honorific title to position [0] in wordsNoSpaces
  const wordsNoSpacesLength = wordsNoSpaces.length;
  for (let i = 0; i < wordsNoSpacesLength; i++) {
    let currentWord = wordsNoSpaces[i];
    // console.log('index currentWord:', currentWord[currentWord.length -1]);
    if (currentWord[currentWord.length - 1] === '.') {
      const honorific = []; 
      const tempArr = wordsNoSpaces;
      honorific.push(currentWord);
      tempArr.splice(i, 1);
      tempArr.unshift(honorific[0]);
      return wordsNoSpaces.join(' ');
    }
  }

  // Return Last name, First name
  if (wordsNoSpaces.length === 2) {
    // Return LAST name first and FIRST name last
    return `${wordsNoSpaces[1]}, ${wordsNoSpaces[0]}`;
  }


}
console.log(nameInverter('Troy Dr.'));
module.exports = nameInverter;
