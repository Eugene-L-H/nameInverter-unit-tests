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

  // Move honorific title to position [0] in wordsNoSpaces
  const wordsNoSpacesLength = wordsNoSpaces.length;
  for (let i = 0; i < wordsNoSpacesLength; i++) {
    const tempArr = [];
    let currentWord = wordsNoSpaces[i];
    // console.log('index currentWord:', currentWord[currentWord.length -1]);
    if (currentWord[currentWord.length - 1] === '.') {
      tempArr.push(currentWord);
      console.log('equalled === ".": Pushing');
      const indexToRemove = i;
    }
  }
  wordsNoSpaces.splice(indexToRemove, 1);
  wordsNoSpaces.unshift(tempArr[0]);
  console.log('wordsNoSpaces after:', wordsNoSpaces);

  // If only one name present
  if (wordsNoSpaces.length === 1) {
    // Checks the last char for '.' If true that means name is an honorific
    if (wordsNoSpaces[0][wordsNoSpaces[0].length - 1] === '.') {
      return ' ';
    }
    // Return single name with no leading or trailing spaces
    return wordsNoSpaces[0];
  }


  // Return Last name, First name
  if (wordsNoSpaces.length === 2) {
    // Return LAST name first and FIRST name last
    return `${wordsNoSpaces[1]}, ${wordsNoSpaces[0]}`;
  }


}
console.log(nameInverter('Troy Dr. Pit'));
module.exports = nameInverter;
