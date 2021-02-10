document.getElementById("find-btn").addEventListener("click", () => { findWords() })
document.body.addEventListener("keypress", function (e) { if (e.key == "Enter") { findWords() } })

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
  word = splitWords[0]
  if (validateString(word))
  {
    alert("Enter words without symbols or numbers except apstrophies (')")
    return;
  }
  console.log("You entered", word)


  searchDictionaryForWord(word)
}




function searchDictionaryForWord(word){
  if (word === "hello"){
    alert ("You got it baby")

  }
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