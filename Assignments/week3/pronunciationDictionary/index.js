document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

let wordDictionary = {}
function findWords()
{
  // alert("Looking for some words eh? ")
  let wordInput = document.getElementById("word-input-field").value
  if (wordInput === "")
  {
    alert("Enter a word to search")
    return;
  }
  let splitWords = wordInput.split(" ")
  if (splitWords.length > 1)
  {
    alert("Enter just one word")
    return
  }
  word = splitWords[0].toLowerCase()
  if (validateInputString(word))
  {
    alert("Enter words without symbols or numbers except apstrophies (')")
    return;
  }
  console.log("You entered", word)

  if (Object.keys(wordDictionary).length === 0)
  {
    // let rawFileContents = readTextFile()
    populateDictionary(wordDictionary)
    dictKeys = Object.keys(wordDictionary)
    console.log("Word dictionary Created. Length =", dictKeys.length)
  }
  if (dictKeys.indexOf(word) === -1)
  {
    alert(`Your word ${word} was not found in the dictionary. Try another word`)
    return;
  }
  let matches = searchDictionaryForWord(word)
  // Do something. Return values
}


function searchDictionaryForWord(word, dictionary)
{
  let matchResults = {}
  let identicals = findIdenticals(word, dictionary)
  let subbedPhonemes = findSubbedPhonemes(word,dictionary)
  let addedPhonemes = findAddedPhonemes(word,dictionary)
  let removedPhonemes = findRemvedPhonemes(word,dictionary)

  matchResults['pronunciation'] = dictionary[word]
  matchResults['identical'] = identicals
  matchResults['replacePhoneme'] = subbedPhonemes
  matchResults['addPhoneme'] = addedPhonemes
  matchResults['removePhoneme'] = removedPhonemes
  return matchResults
}




function populateDictionary(emptyDictionary)
{
  let rawFileContents = readTextFile()
  // format tile contents
  let linesDictionary = rawFileContents.split("\n")
  regex = "[A-Za-z']";
  let wordEntries = linesDictionary.filter(l =>
  {
    return /[a-zA-Z']/.test(l[0])
  })
  wordEntries.forEach((v, i, a) =>
  {
    // console.log(v.split("  "))
    // symbolRegex = "\(\)[1-9]"
    var x = v.split("  ")
    if (validateDictString(x[0]))
    {
      emptyDictionary[x[0].toLowerCase()] = x[1]
    }
  })
}
function validateInputString(string)
{
  const regexPattern = new RegExp("[^a-zA-Z']") // Also works
  if (/[^a-zA-Z']/.test(string))
  {
    return true;
  }
  return false;
}

function validateDictString(string)
{
  return !(/[(\-)0-9]+/.test(string)) // returns true if found, so bad
}


function readTextFile(file = "./cmu.txt")
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.send(null);
  return rawFile.responseText
}


