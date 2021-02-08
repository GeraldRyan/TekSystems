document.getElementById("zero").addEventListener('click', function () { numberClicked(0) })
document.getElementById("one").addEventListener('click', function () { numberClicked(1) })
document.getElementById("two").addEventListener('click', function () { numberClicked(2) })
document.getElementById("three").addEventListener('click', function () { numberClicked(3) })
document.getElementById("four").addEventListener('click', function () { numberClicked(4) })
document.getElementById("five").addEventListener('click', function () { numberClicked(5) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("seven").addEventListener('click', function () { numberClicked(7) })
document.getElementById("eight").addEventListener('click', function () { numberClicked(8) })
document.getElementById("nine").addEventListener('click', function () { numberClicked(9) })
document.getElementById("double-zero").addEventListener('click', function () { doubleZeroClicked() })

document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })
document.getElementById("six").addEventListener('click', function () { numberClicked(6) })


document.getElementById("equals-sign").addEventListener('click', function () { computeFigure() })

// document.getElementById("output-screen").addEventListener('click', function () { doSomethingExtraordinary() })



function computeFigure()
{
  console.log("Equals sign pressed")
  value = 88765.215
  outputToScreen(value)

}

function outputToScreen(value)
{
  // value = numeral(value).format('0.00')
  document.getElementById("output-screen").innerText = numeral(value).format('0,000.00')

}

function numberClicked(number)
{
  console.log(number);
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