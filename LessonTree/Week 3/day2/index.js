document.getElementById("input-number").addEventListener('click', e => { buttonPressed() })
document.getElementById("input-number2").addEventListener('click', e => { button2Pressed() })
document.getElementById("input-number3").addEventListener('click', e => { button3Pressed() })

// document.getElementById("eight").addEventListener('click', function () { numberClicked(8) })

function buttonPressed()
{
  let val = -1
  while (val <= 0 || val > 100)
  {
    val = prompt("input number between 0 - 100")
  }
  alert(`You entered a good number: ${val}. The square is ${Math.pow(val, 2)}`)
}

function button2Pressed()
{
  let low = prompt("input lower limit")
  let high = low - 1
  while (high < low)
  {
    high = prompt("input upper limit number")
    high < low ? alert("upper range must be less than lower range") : console.log()
  }
  alert(`Range is ${low} to ${high}`)
  let stringToPrint = "Numbers in your range: "
  for (let i = low; i < high; i++ ){
    stringToPrint += i + " "
  }
  document.getElementById("body-seed").innerText = stringToPrint
}

function button3Pressed(){
  alert("Look at the console screen")
  let myData = []
  for (let i = 0; i<10; i++){
    myData.push(1)
  }
  console.log(`myData: ${myData}`)
  let newI = prompt("Input a cell index i")
  let newValue = prompt("Input a new Value v")
  if (newI < 10 && newI >= 0){
    myData[newI] = Number(newValue)
  }
  console.log(myData)
}