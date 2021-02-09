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



document.body.addEventListener('keydown', (e) => { console.log(e.code) })



document.getElementById("decimal-point").addEventListener('click', function () { decimalPointClicked() })
document.body.addEventListener('keydown', function (e) { if (e.code == "NumpadDecimal" || e.code == "Period") decimalPointClicked() })

document.getElementById("double-zero").addEventListener('click', function () { doubleZeroClicked() })

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


let buffer = 0
let nCount = 0
let dCount = -1
let arg1 = 0
let arg2 = 0
let bDecimalPointJustClicked = false
let bDecimalPointInBuffer = false
let currentOp = null
let bComputedNumberOnScreen = false

function numberClicked(number)
{
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
  outputToScreen(buffer)
}

// function buildInts(buffer, newNumber){

// }

// function buildDecimals(buffer, newNumber){

// }

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

function startOver()
{
  arg1 = 0
  bComputedNumberOnScreen = false
  flushTempValues()
  outputToScreen(0)
}

function computeFigure()
{
  console.log("Equals sign pressed")
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

      break;
    case "*":

      break;
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


function doubleZeroClicked()
{
  console.log(0, 0)
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
}
