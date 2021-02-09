// Can I do with PUG or other PreProcessor, ??????????????????????????????????????????
//????????????????????????????????????????????????????????????????????????????????????
document.getElementById("zero").addEventListener('click', function () { numberClicked(0) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit0" || e.code == "Numpad0") numberClicked(0) })
document.getElementById("one").addEventListener('click', function () { numberClicked(1) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit1" || e.code == "Numpad1") numberClicked(1) })
document.getElementById("two").addEventListener('click', function () { numberClicked(2) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit2" || e.code == "Numpad2") numberClicked(2) })
document.getElementById("three").addEventListener('click', function () { numberClicked(3) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit3" || e.code == "Numpad3") numberClicked(3) })
document.getElementById("four").addEventListener('click', function () { numberClicked(4) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit4" || e.code == "Numpad4") numberClicked(4) })
document.getElementById("five").addEventListener('click', function () { numberClicked(5) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit5" || e.code == "Numpad5") numberClicked(5) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit6" || e.code == "Numpad6") numberClicked(6) })
document.getElementById("seven").addEventListener('click', function () { numberClicked(7) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit7" || e.code == "Numpad7") numberClicked(7) })
document.getElementById("eight").addEventListener('click', function () { numberClicked(8) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit8" || e.code == "Numpad8") numberClicked(8) })
document.getElementById("nine").addEventListener('click', function () { numberClicked(9) })
document.body.addEventListener('keydown', function (e) { if (e.code == "Digit9" || e.code == "Numpad9") numberClicked(9) })
// document.body.addEventListener('keydown', (e) => { console.log(e.code) }) // Great for debugging
document.getElementById("decimal-point").addEventListener('click', function () { decimalPointClicked() })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadDecimal" || e.code == "Period") decimalPointClicked() })
document.getElementById("power-btn").addEventListener('click', function () { powerClicked() })
document.getElementById("log-btn").addEventListener('click', function () { logClicked() })
document.getElementById("clear-btn").addEventListener('click', function () { startOver() })
document.body.addEventListener('keydown', function (e) { if (e.code == "KeyC") startOver() })
document.getElementById("divide-btn").addEventListener('click', function () { functionButtonClicked("/") })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadDivide") functionButtonClicked("/") })
document.getElementById("multiply-btn").addEventListener('click', function () { functionButtonClicked("*") })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadMultiply") functionButtonClicked("*") })
document.getElementById("add-btn").addEventListener('click', function () { functionButtonClicked("+") })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadAdd") functionButtonClicked("+") })
document.getElementById("subtract-btn").addEventListener('click', function () { functionButtonClicked("-") })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadSubtract") functionButtonClicked("-") })
document.getElementById("equals-sign").addEventListener('click', function () { computeFigure() })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadEnter" || e.code == "Equal") computeFigure() })
// Can I do with PUG or other PreProcessor, ??????????????????????????????????????????
//????????????????????????????????????????????????????????????????????????????????????


//Extras
document.getElementById("pi-btn").addEventListener('click', function () { numberClicked(3.142857) })
document.getElementById("e-btn").addEventListener('click', function () { numberClicked(2.71828) })

document.getElementById("rr-btn").addEventListener('click', function () { rr() })




// Can I do without global variables, or in class based architecture?????????????????
//???????????????????????????????????????????????????????????????????????????????????? 
let buffer = 0
let nCount = 0
let dCount = -1
let arg1 = 0
let arg2 = 0
let bDecimalPointJustClicked = false
let bDecimalPointInBuffer = false
let currentOp = null
let bComputedNumberOnScreen = false
let bPowerButtonPressed = false
let bNegativeNumber = false
// Can I do without global variables, or in class based architecture?????????????????
//????????????????????????????????????????????????????????????????????????????????????


function numberClicked(number)
{
  if (bComputedNumberOnScreen == true && currentOp == null)
  {
    startOver() // Assume they want a new calculation without having to explicitly clear screen
  }
  if (bDecimalPointJustClicked == false && bDecimalPointInBuffer == false)
  {
    buffer = number + (buffer * 10)
    nCount++
  }
  else if (bDecimalPointJustClicked || bDecimalPointInBuffer)
  {
    buffer = math.round(buffer + number * Math.pow(10, dCount), (-dCount))
    dCount--
  }
  if (bNegativeNumber){
    buffer = -Math.abs(buffer)
  } 
  outputToScreen(buffer)
}

function decimalPointClicked()
{
  if (!bDecimalPointJustClicked)
  {
    bDecimalPointJustClicked = true
    bDecimalPointInBuffer = true
  }
  console.log(".");
}

function functionButtonClicked(button)
{
  // console.log(bPowerButtonPressed, button)
  if (button == "-" && bPowerButtonPressed)
  {
    // They just want to make the number negative
    //  buffer 
    bNegativeNumber = true
    console.log("We're here")
    return;
  }
  console.log(button, " clicked")
  nCount = 0
  dCount = -1
  bDecimalPointInBuffer = false
  bDecimalPointJustClicked = false
  if (bComputedNumberOnScreen)
  {
    arg2 = buffer
  }
  else
  {
    arg1 = buffer
  }
  buffer = 0
  currentOp = button
}

function powerClicked()
{
  console.log("Power clicked")
  currentOp = "**"
  nCount = 0
  dCount = -1
  bDecimalPointInBuffer = false
  bDecimalPointJustClicked = false
  arg1 = buffer
  buffer = 0
  bPowerButtonPressed = true
}

function logClicked(){
  currentOp = "log"
  nCount = 0
  dCount = -1
  // bDecimalPointInBuffer = false
  // bDecimalPointJustClicked = false
  arg1 = buffer
  // buffer = 0
  computeFigure()
}

function startOver()
{
  arg1 = 0
  bComputedNumberOnScreen = false
  flushTempValues()
  outputToScreen(0)
  powerClicked = false

}

function computeFigure()
{
  console.log("Equals sign (or log) pressed")
  arg2 = buffer
  let finalOutput = 0
  bComputedNumberOnScreen = true
  switch (currentOp)
  {
    case null:
      return;
    case "+":
      console.log(`${currentOp} pressed`)
      finalOutput = addTwoNumbers(arg1, arg2)
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
      break;
    case "-":
      finalOutput = subtractTwoNumbers(arg1, arg2)
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
      break;
    case "/":
      finalOutput = arg1 / arg2
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
      break;
    case "*":
      finalOutput = arg1 * arg2
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
      break;
    case "**":
      console.log(arg1, arg2)
      finalOutput = Math.pow(arg1, arg2)
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
    case "log":
      console.log(arg1)
      finalOutput = math.round(getBaseLog(arg1),5)
      arg1 = finalOutput
      console.log(`final output ${finalOutput}`)
      outputToScreen(finalOutput)
      flushTempValues()
  }
  // value = 88765
  arg1 = finalOutput
  arg2 = 0
  bDecimalPointJustClicked = false
  outputToScreen(finalOutput)

}

function outputToScreen(value)
{
  // value = numeral(value).format('0.00')
  formattedValue = Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20, // Capped off at 20 by JS
  }).format(value)
  document.getElementById("output-screen").innerText = formattedValue
  //  numeral(value).format('0,000.00')

}


function addXNumbers(...zargs)
{
  let tmp = zargs[0]; let i = 0
  while (i < zargs.length - 1)
  {
    tmp = addTwoNumbers(tmp, zargs[i + 1])
    i++
  }
  return tmp
}

function subtractXNumbers(...zargs)
{
  let tmp = zargs[0];
  let i = 0
  while (i < zargs.length - 1)
  {
    tmp = subtractTwoNumbers(tmp, zargs[i + 1])
    i++
  }
  return tmp
}

function addTwoNumbers(a, b)
{
  return a + b
}
function subtractTwoNumbers(a, b)
{
  return a - b
}


sum = addXNumbers(1, 2, 3, 4)
console.log(sum)
minus = subtractXNumbers(5, 5, 4, 3, 2, 1)
console.log(minus)

// function readyForNextRound(){
//   buffer = 0
//   nCount = 0
//   dCount = 0
//   arg2 = 0

// }

function flushTempValues()
{
  buffer = 0
  nCount = 0
  dCount = -1
  arg2 = 0
  bDecimalPointJustClicked = false
  bDecimalPointInBuffer = false
  currentOp = null
  bNegativeNumber = false
}

rr.counter = 0
function rr()
{
  rr.counter++
  if (rr.counter > 2)
  {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }
}

function getBaseLog(x, y=2.71828){
  return Math.log(x) / Math.log(y)
}