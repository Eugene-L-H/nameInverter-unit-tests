const nameInverter = function (name) {
  // Return empty strin if name is empty
  if (name === ' ') {
    return ' ';
  } 

  const lastToFirst = function (array) {
    return `${array[1]}, ${array[0]}`
  }

  const findHonorific = function (array, wordCount) {
    for (let i = 0; i < wordCount; i++) {
      let currentWord = array[i];
      if (currentWord[currentWord.length - 1] === '.') {
        let honorific = currentWord;
        return honorific;
      }
    }
  }

  const shiftHonrificToStart = function (array, honorific, wordCount) {
    for (let i = 0; i < wordCount; i++) {
      let currentWord = array[i];
      if (currentWord === honorific) { 
        const tempArr = array;
        tempArr.splice(i, 1);
        tempArr.unshift(honorific);
        return tempArr.join(' ');
      }
    }
  }

  const removeWhitepaces = function (array) {
    let wordsNoSpaces = [];
    for (let word of array) {
      if (word.length !== 0) {
        wordsNoSpaces.push(word);
      }
    }
    return wordsNoSpaces;
  }
  

  // Split string into different names
  let nameArray = name.split(' ');

  // Remove whitespace from nameArray
  let wordsNoSpaces = removeWhitepaces(nameArray);
  let wordCount = wordsNoSpaces.length;
  let honorific = findHonorific(wordsNoSpaces, wordCount);
  console.log('wordsNoSpacesArray:', wordsNoSpaces);
  console.log('word count:', wordCount);
  console.log('honrific:', honorific);

  // If only one name present
  if (wordCount === 1) {
    let singleName = wordsNoSpaces[0];
    // Checks the last char for '.' If true that means name is an honorific
    if (singleName === honorific) {
      return ' ';
    }
    // Return single name with no leading or trailing spaces
    return singleName;
  }

  // If honorific title is present, move to position [0] in wordsNoSpaces
  if (honorific !== undefined) {
    wordsNoSpaces = shiftHonrificToStart(
        wordsNoSpaces,
        honorific,
        wordCount
      );
  }
  
  // Return Last name, First name
  if (wordCount === 2) {
    // Return LAST name first and FIRST name last
    return lastToFirst(wordsNoSpaces);
  }


}
console.log(nameInverter('Troy Dr.'));
module.exports = nameInverter;
