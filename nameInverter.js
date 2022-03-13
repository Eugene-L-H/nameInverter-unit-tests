const nameInverter = function(name) {
  // Return empty string if name is empty
  if (name === ' ') {
    return ' ';
  }
  
  if (name === undefined) {
    return "throw 'Error'";
  }

  const lastToFirst = function(array) {
    return `${array[1]}, ${array[0]}`;
  };

  const findHonorific = function(array, wordCount) {
    for (let i = 0; i < wordCount; i++) {
      let currentWord = array[i];
      if (currentWord[currentWord.length - 1] === '.') {
        let honorific = currentWord;
        return honorific;
      } else {
        return false;
      }
    }
  };

  const removeWhitepaces = function(array) {
    let wordsNoSpaces = [];
    for (let word of array) {
      if (word.length !== 0) {
        wordsNoSpaces.push(word);
      }
    }
    return wordsNoSpaces;
  };

  const findLastName = function(array) {
    for (let name of array) {
      if (name[name.length - 1] === ',') {
        return name;
      } else {
        return false;
      }
    }
  };

  const singleName = function(array, honorific) {
    let singleName = array[0];
    // Checks the last char for '.' If true that means name is an honorific
    if (singleName === honorific) {
      return ' ';
    }
    // Return single name with no leading or trailing spaces
    return singleName;
  };
  
  // Split string into different names/honorifics
  let nameArray = name.split(' ');

  // Remove whitespace from nameArray
  let wordsNoSpaces = removeWhitepaces(nameArray);
  let wordCount = wordsNoSpaces.length;
  let honorific = findHonorific(wordsNoSpaces, wordCount);
  let lastName = findLastName(wordsNoSpaces);
  
  // If only one name present
  if (wordCount === 1) {
    return singleName(wordsNoSpaces, honorific);
  }

  if (!lastName && honorific) {
    let returnName =  `${honorific} ${lastToFirst(wordsNoSpaces.slice(1))}`;
    return returnName;
  }
  
  // Return LAST name, FIRST name
  if (wordCount === 2) {
    // Return LAST name first and FIRST name last
    return lastToFirst(wordsNoSpaces);
  }
  


};

module.exports = nameInverter;
