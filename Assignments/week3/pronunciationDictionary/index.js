document.getElementById("find-btn").addEventListener("click", ()=>{findWords()})


function findWords(){
  alert("Looking for some words eh? ")
  let word = document.getElementById("word-input-field").value
  console.log(word)
}