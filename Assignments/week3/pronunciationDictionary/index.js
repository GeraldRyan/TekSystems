document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

let WordDictionary = {}
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
  if (validateString(word))
  {
    alert("Enter words without symbols or numbers except apstrophies (')")
    return;
  }
  console.log("You entered", word)

  if (Object.keys(dictionary).length === 0)
  {
    populateDictionary(WordDictionary)
  }
  let entry = searchDictionaryForWord(word)
  if (entry == [])
  {
    alert("Word not found in dictionary")
  }
}


function searchDictionaryForWord(word, dictionary)
{

  if (false) // not found. Implement me
  {
    return []
  }

  // how do i open a file? 
  // should I read once, populate array? I think so, then can re-use for new function calls
  let data = {}
  data['pronunciation'] = "Fill me up"
  data['identical'] = ["Fill me up"]
  data['replacePhoneme'] = ["Fill me up"]
  data['addPhoneme'] = ["Fill me up"]
  data['addPhoneme'] = ["Fill me up"]
  data['removePhoneme'] = ["fill me up"]


  return data
}


function populateDictionary(emptyDictionary)
{

}

function validateString(string)
{
  // const regexPattern = new RegExp("[^a-zA-Z']") // Also works
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
  rawFile.onreadystatechange = function ()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
      }
    }
  }
  rawFile.send(null);
}