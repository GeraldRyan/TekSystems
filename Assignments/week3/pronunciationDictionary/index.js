document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

let wordDictionary = {}
let hashMap = []
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
    hashDictionaryValues(wordDictionary)
    console.log("Hashmap Created")
    console.log(hashMap)
  }
  findWordsHashIndex("dear", hashMap)
  let matches = searchDictionaryForWord(word, wordDictionary, hashMap)
  // Do something. Return values
}


function searchDictionaryForWord(word, dictionary, hashMap)
{
  let matchResults = {}
  let identicals = findIdenticals(word, dictionary, hashMap)
  // let subbedPhonemes = findSubbedPhonemes(word, dictionary)
  // let addedPhonemes = findAddedPhonemes(word, dictionary)
  // let removedPhonemes = findRemvedPhonemes(word, dictionary)

  // matchResults['pronunciation'] = dictionary[word]
  matchResults['identical'] = identicals
  // matchResults['replacePhoneme'] = subbedPhonemes
  // matchResults['addPhoneme'] = addedPhonemes
  // matchResults['removePhoneme'] = removedPhonemes
  return matchResults
}

function findIdenticals(word, dictionary, hashMap)
{
  let arrayOfIdenticals = []
  let entries = hashMap[dictionary[word].hashCode(Object.keys(dictionary).length *4)]
  console.log(entries)


}


function hashDictionaryValues(dictionary)
{
  console.log(dictionary)
  let dictKeys = Object.keys(dictionary)
  console.log(dictKeys.length)
  dictKeys.forEach((v, i, a) =>
  {
    let hashValue = dictionary[v].hashCode(dictKeys.length * 4)
    if (hashMap[hashValue] === undefined)
    {
      hashMap[hashValue] = [{ [v]: dictionary[v] }] // 4 times load factor
    }
    else
    {
      hashMap[hashValue].push({ [v]: dictionary[v] })
    }
  })
  // idenicals will be duplicates. 
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


function readTextFile(file = "./cmu.txt")
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.send(null);
  return rawFile.responseText
}

function validateDictString(string)
{
  return !(/[(\-)0-9]+/.test(string)) // returns true if found, so bad
}

Object.defineProperty(String.prototype, 'hashCode', {
  value: function (ll = 1000)
  {
    return (Math.abs(this.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0))) % ll
  }
});

function findWordsHashIndex(word, hashMap)
{
  hashMap.forEach((v, i, a) =>
  {
    for (const item in v[0])
    {
      if (item === word)
      {
        console.log(`Word ${word} found at`, i)
      }
    }

  })


  if (dictKeys.indexOf(word) === -1)
  {
    alert(`Your word ${word} was not found in the dictionary. Try another word`)
    return;
  }

}