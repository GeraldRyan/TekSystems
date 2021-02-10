// // declare array
// let array = [1, 2, 3, 4, 5]

// // demonstrate in place forEach
// array.forEach((v, i, a) =>
// {
//   a[i] = v + 1
// })
// console.log(array)

// // Demonstrate map 
// new_array = array.map((v, i, a) =>
// {
//   return v + 1
// })

// console.log(array)
// console.log(new_array)


// userInput = prompt("Enter Password")



function isItNumber(userInput)
{
  if (isNaN(userInput)) { return false } else { return true }
}

console.log(isItNumber(5))
console.log(isItNumber("5"))
console.log(isItNumber("5a"))
console.log(isItNumber("5"))

function convertToNumber(string)
{
  return Number(string)
}
console.log(convertToNumber("5"))
console.log(convertToNumber("5a"))

document.getElementById("two-numbers").addEventListener("click", () => compare2Numbers())



function compareXNumbers(array){
  if (array.constructor === Array){
    if (array.length == 0){console.log("please don't pass an empty array"); return}
    let currentSmallest = array[0]
    array.forEach(v =>{
      if (v < currentSmallest){
        currentSmallest = v
      }
    })
    return currentSmallest
  }
  else {
    console.log("Please pass in an array of numbers")
  }
}

function compare2Numbers()
{
  let a = inputNumber()
  let b = inputNumber()
  a < b ? console.log(a) : console.log(b)  
  if (a < b){ return a} else {return b}
}
function inputNumber()
{
  let n = "a"
  while (!isItNumber(n))
  {
    console.log("here")
    n = prompt("Input a NUMBER!!")
  }
  return n 
}

console.log(compareXNumbers([]))
console.log(compareXNumbers("not an array"))
console.log(compareXNumbers([10,1,2,5,4,33]))


  