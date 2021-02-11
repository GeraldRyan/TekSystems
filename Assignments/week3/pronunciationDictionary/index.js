document.body.onload = ()=>{loadEverything()}

document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

// Globals
let wordDictionary = {}
let hashMap = []
let phonemeList = []
let dictKeys = []

function loadEverything(){
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
    // let rawFileContents = readTextFile()
    populateDictionary()
    console.log("Word dictionary Created. Length =", dictKeys.length)
    hashDictionaryValues(wordDictionary)
    console.log("Hashmap of dictionary values created")
  }
  // findWordsHashIndex("dear", hashMap) // GOOD DEBUGGING TOOL
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

  // matchResults['pronunciation'] = dictionary[word]
  matchResults['identicals'] = identicals
  matchResults['replacePhoneme'] = replacedPhonemes
  matchResults['addPhoneme'] = addedPhonemes
  matchResults['removePhoneme'] = removedPhonemes
  return matchResults
}

function findRemovedPhonemes(word, dictionary, hashMap){
  matches = []
  let phonemeList = dictionary[word]
  phonemeList = phonemeList.split(" ")
  for (let i = 0; i<phonemeList.length; i++){
    let phonemeClone = phonemeList.splice(i,1)
    phonemeClone = phonemeClone.join(" ")
    hash = phonemeClone.hashCode(dictKeys.length*4)
    if (hashMap[hash] !== undefined){
      hashMap[hash].forEach((o,i,a)=>{
        let key = getObjectsKey(o)
        console.log("Dictionary[key] phoneme clone", dictionary[key], phonemeClone)
        if (checkIfIdentical(dictionary[key], phonemeClone)){
          matches.push(key)
        }
      })
    }
  }
return matches
}


function findAddedPhonemes(word, dictionary, hashMap)
{
  findWordsHashIndex("bears",hashMap)
  // console.log("Hash map of bears", hashMap[98143])
  findWordsHashIndex("despairs",hashMap)

  let matches = []
  let phonemeSequence = dictionary[word]
  let phonemeSequenceList = phonemeSequence.split(" ")
  // console.log("phoneme sequence list", phonemeSequenceList)
  for (let i = 0; i <= phonemeSequenceList.length; i++)
  {
    phonemeList.forEach((p, ind) =>
    {
      let trialPhonemeSequence = phonemeSequenceList.slice()
      // console.log("Old Trial phoneme sequence", trialPhonemeSequence)
      trialPhonemeSequence.splice(i, 0, p)

      // console.log("New Trial Phoneme Sequence", trialPhonemeSequence)
      let stringified = trialPhonemeSequence.join(" ")

      let hash = stringified.hashCode(dictKeys.length * 4)
      if (hashMap[hash] !== undefined)
      {
        // console.log("stringified", stringified)
        if (i == phonemeSequenceList.length)
        {
          console.log("Hash map[hash]", hashMap[hash])
        }
        hashMap[hash].forEach((o) =>
        {
          // console.log("O", o)
          // console.log("Dictionary 0", dictionary[o])
          let key = getObjectsKey(o)
          // console.log("key",key)
          if (checkIfIdentical(dictionary[key], stringified))
          {
            matches.push(key)
          }

        })
        // console.log("Match maybe found", stringified)
        // console.log(hashMap[hash])
        // matches.push(stringified)
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
  let phone
  // console.log("word pronunciaion array", pronunciationArray )
  pronunciationArray.forEach((v, i, a) =>
  {
    phonemeList.forEach((vv, ii, aa) =>
    {
      let phonemeToSubIn = vv
      let sequenceToTry = pronunciationArray.slice()
      sequenceToTry[i] = phonemeToSubIn
      // console.log("Sequence to Try", sequenceToTry)
      let sequenceString = sequenceToTry.join(" ")
      // console.log(sequenceString)
      let hashOfString = sequenceString.hashCode(dictKeys.length * 4)
      let hashMapReturn = hashMap[hashOfString]
      if (hashMapReturn !== undefined)
      {
        hashMapReturn.forEach((vvv, iii, aaa) =>
        {
          // console.log("Matching value?",vvv)
          let key = getObjectsKey(vvv)
          // console.log("Possible Key", key)
          // console.log(`Dictionary[key] ${dictionary[key]}, sequenceString${sequenceString}`)
          if (checkIfIdentical(dictionary[key], sequenceString))
          {
            // console.log("This is the matched key:", key)
            matches.push(key)
          }
        })

      }
    })
  })
  // console.log(matches)
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
  if (string1 === string2)
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
        // console.log("Key", key)
        let identical = document.createElement("span")
        identical.innerText = key + " "
        ws.appendChild(identical)
      }
    })
  }


  if (matches["replacePhoneme"].length > 0)
  {
    let rp = document.createElement("h4")
    rp.innerText = "REPLACED PHONEME: "
    ws.appendChild(rp)
    matches["replacePhoneme"].forEach((v, i, a) =>
    {
      let rp = document.createElement("span")
      rp.innerText = v + " "
      ws.appendChild(rp)
    })
  }

  if (matches["addPhoneme"].length > 0)
  {
    let ap = document.createElement("h4")
    ap.innerText = "ADDED PHONEME: "
    ws.appendChild(ap)
    matches["addPhoneme"].forEach((v, i, a) =>
    {
      let ap = document.createElement("span")
      ap.innerText = v + " "
      ws.appendChild(ap)
    })
  }


  if (matches["removePhoneme"].length > 0)
  {
    let rp = document.createElement("h4")
    rp.innerText = "REMOVED PHONEME: "
    ws.rppendChild(rp)
    matches["removePhoneme"].forEach((v, i, a) =>
    {
      let rp = document.createElement("span")
      rp.innerText = v + " "
      ws.appendChild(rp)
    })
  }
}



function hashDictionaryValues(dictionary)
{
  // console.log(dictionary)
  console.log("DictKeys", dictKeys)
  dictKeys.forEach((v, i, a) =>
  {
    if (v=="bears"){
      console.log("BEARS FOUND! At index", i, "Dictionary value is ", dictionary[v])
    }
    let hashValue = dictionary[v].hashCode(dictKeys.length * 4)
    if (v=="bears"){
      console.log("BEARS hash value! At index", hashValue)
    }
    if (hashMap[hashValue] === undefined)
    {
      if (v=="bears"){
        console.log("BEARS entry in hash", hashMap[dictionary[v].hashCode(dictKeys.length*4)])
      } 
      hashMap[hashValue] = [{ [v]: dictionary[v] }] // 4 times load factor
    }
    else
    {
      if (v=="bears"){
        console.log("BEARS entry in hash", hashMap[dictionary[v].hashCode(dictKeys.length*4)])
      } 
      hashMap[hashValue].push({ [v]: dictionary[v] })
    }
  })
  // idenicals will be duplicates. 
}

function populateDictionary()
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
    subArray.forEach((obj)=>{
      for (key in obj){
        if (key == word){
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
