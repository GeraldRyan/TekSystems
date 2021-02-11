str.split("").map(c => {
  console.log(c.charCodeAt(0))
})
// or as function
function printStringChars(string){
  string.split("").map(c => {
    console.log(c.charCodeAt(0))
  })
}