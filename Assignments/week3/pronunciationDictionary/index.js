document.body.onload = () => { loadEverything() }
document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

// Globals
let wordDictionary = {}
let hashMap = []
let phonemeList = []
let dictKeys = []

function loadEverything()
{
  populateDictionary()
  dictKeys = Object.keys(wordDictionary)
  console.log("Word dictionary Created. Length =", dictKeys.length)
  hashDictionaryValues(wordDictionary)
  console.log("Hashmap of dictionary values created")
}
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
    populateDictionary()
    console.log("Word dictionary Created. Length =", dictKeys.length)
    hashDictionaryValues(wordDictionary)
    console.log("Hashmap of dictionary values created")
  }
  let matches = searchDictionaryForWord(word, wordDictionary, hashMap)
  console.log("matches returned", matches)
  appendMatches(word, wordDictionary, matches)
}


function searchDictionaryForWord(word, dictionary, hashMap)
{
  let matchResults = {}
  let identicals = findIdenticals(word, dictionary, hashMap)
  let replacedPhonemes = findReplacedPhonemes(word, dictionary, hashMap)
  let addedPhonemes = findAddedPhonemes(word, dictionary, hashMap)
  let removedPhonemes = findRemovedPhonemes(word, dictionary, hashMap)
  matchResults['identicals'] = identicals
  matchResults['replacePhoneme'] = replacedPhonemes
  matchResults['addPhoneme'] = addedPhonemes
  matchResults['removePhoneme'] = removedPhonemes
  return matchResults
}

function findRemovedPhonemes(word, dictionary, hashMap)
{
  matches = []
  let phonemeList = dictionary[word]
  phonemeList = phonemeList.split(" ")
  for (let i = 0; i < phonemeList.length; i++)
  {
    let phonemeClone = phonemeList.splice(i, 1)
    phonemeClone = phonemeClone.join(" ")
    hash = phonemeClone.hashCode(dictKeys.length * 4)
    if (hashMap[hash] !== undefined)
    {
      hashMap[hash].forEach((o, i, a) =>
      {
        let key = getObjectsKey(o)
        console.log("Dictionary[key] phoneme clone", dictionary[key], phonemeClone)
        if (checkIfIdentical(dictionary[key], phonemeClone))
        {
          matches.push(key)
        }
      })
    }
  }
  return matches
}


function findAddedPhonemes(word, dictionary, hashMap)
{
  findWordsHashIndex("bears", hashMap)
  findWordsHashIndex("despairs", hashMap)

  let matches = []
  let phonemeSequence = dictionary[word]
  let phonemeSequenceList = phonemeSequence.split(" ")
  for (let i = 0; i <= phonemeSequenceList.length; i++)
  {
    phonemeList.forEach((p, ind) => 
    {
      let trialPhonemeSequence = phonemeSequenceList.slice()
      trialPhonemeSequence.splice(i, 0, p) // replace each 0 with p, replace each 
      let stringified = trialPhonemeSequence.join(" ")
      stringified = stringified.replace("\r", "")
      let hash = stringified.hashCode(dictKeys.length * 4)
      if (hashMap[hash] !== undefined)
      {
        hashMap[hash].forEach((o) =>
        {
          let key = getObjectsKey(o)
          if (checkIfIdentical(dictionary[key], stringified))
          {
            matches.push(key)
          }
        })
      }
    })
  }
  console.log("Matches", matches)
  return matches
}


function findIdenticals(word, dictionary, hashMap)
{
  return hashMap[dictionary[word].hashCode(dictKeys.length * 4)]
}
function findReplacedPhonemes(word, dictionary, hashMap)
{
  let matches = []
  let pronunciation = dictionary[word]
  let pronunciationArray = pronunciation.split(" ")
  pronunciationArray.forEach((v, i, a) =>
  {
    phonemeList.forEach((vv, ii, aa) =>
    {
      let phonemeToSubIn = vv
      let sequenceToTry = pronunciationArray.slice()
      sequenceToTry[i] = phonemeToSubIn
      let sequenceString = sequenceToTry.join(" ")
      let hashOfString = sequenceString.hashCode(dictKeys.length * 4)
      let hashMapReturn = hashMap[hashOfString]
      if (hashMapReturn !== undefined)
      {
        hashMapReturn.forEach((vvv, iii, aaa) =>
        {
          let key = getObjectsKey(vvv)
          if (checkIfIdentical(dictionary[key], sequenceString))
          {
            matches.push(key)
          }
        })
      }
    })
  })
  return matches
}

function getObjectsKey(obj)
{
  for (key in obj)
  {
    return key
  }
}
function checkIfIdentical(string1, string2)
{
  if (String(string1) === String(string2))
  {
    return true
  }
  return false
}


function appendMatches(word, dictionary, matches)
{
  let w = document.createElement("h4")
  w.innerText = "WORD: " + word
  let pronunciation = document.createElement("h4")
  pronunciation.innerText = "PRONUNCIATION: " + dictionary[word].toLowerCase()
  ws = document.getElementById("world-seed")
  ws.appendChild(w)
  ws.appendChild(pronunciation)

  if (matches["identicals"].length > 0)
  {
    let identicals = document.createElement("h4")
    identicals.innerText = "IDENTICALS: "
    ws.appendChild(identicals)
    matches["identicals"].forEach((v, i, a) =>
    {
      for (const key in v)
      {
        let identical = document.createElement("span")
        identical.innerText = key + " "
        ws.appendChild(identical)
      }
    })
  }


  if (matches["replacePhoneme"].length > 0)
  {
    let rp = document.createElement("h4")
    rp.innerText = "REPLACED PHONEMES: "
    ws.appendChild(rp)
    matches["replacePhoneme"].forEach((v, i, a) =>
    {
      let rp = document.createElement("span")
      rp.innerText = v + " "
      ws.appendChild(rp)
    })
  }
  else
  {
    let rp = document.createElement("h4")
    rp.innerText = "RMOVED PHONEMES: No matches found"
    ws.appendChild(rp)
  }

  if (matches["addPhoneme"].length > 0)
  {
    let ap = document.createElement("h4")
    ap.innerText = "ADDED PHONEMES: "
    ws.appendChild(ap)
    matches["addPhoneme"].forEach((v, i, a) =>
    {
      let ap = document.createElement("span")
      ap.innerText = v + " "
      ws.appendChild(ap)
    })
  }
  else
  {
    let rp = document.createElement("h4")
    rp.innerText = "ADDED PHONEMES: No matches found"
    ws.appendChild(rp)
  }

  if (matches["removePhoneme"].length > 0)
  {
    let rp = document.createElement("h4")
    rp.innerText = "REMOVED PHONEMES: "
    ws.rppendChild(rp)
    matches["removePhoneme"].forEach((v, i, a) =>
    {
      let rp = document.createElement("span")
      rp.innerText = v + " "
      ws.appendChild(rp)
    })
  }
  else
  {
    let rp = document.createElement("h4")
    rp.innerText = "REMOVED PHONEMES: No matches found"
    ws.appendChild(rp)
  }
}



function hashDictionaryValues(dictionary)
{
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
}

function populateDictionary()
{
  let rawFileContents = readTextFile()
  let linesDictionary = rawFileContents.split("\n")
  regex = "[A-Za-z']";
  let wordEntries = linesDictionary.filter(l =>
  {
    return /[a-zA-Z']/.test(l[0])
  })
  wordEntries.forEach((v, i, a) =>
  {
    // symbolRegex = "\(\)[1-9]"
    var x = v.split("  ")
    if (validateDictString(x[0]))
    {
      wordDictionary[x[0].toLowerCase()] = x[1].toLowerCase()
    }
  })
  getListOfPhonemes(wordEntries)

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
  hashMap.forEach((subArray, i, a) =>
  {
    subArray.forEach((obj) =>
    {
      for (key in obj)
      {
        if (key == word)
        {
          console.log(`Word ${word} found at index`, i)
        }
      }
    })



  })
  if (dictKeys.indexOf(word) === -1)
  {
    alert(`Your word ${word} was not found in the dictionary. Try another word`)
    return;
  }
}

function getListOfPhonemes(dictionary)
{
  let phonemeDictionary = {}
  dictionary.forEach((v, i, a) =>
  {
    v.split("  ")[1].split(' ').forEach((v, i, a) =>
    {
      if (!(v in phonemeDictionary))
      {
        phonemeDictionary[v.toLowerCase()] = v.toLowerCase()
      }
    })
  })
  // console.log("phoneme dictionary", phonemeDictionary)
  phonemeList = Object.keys(phonemeDictionary)
} 
