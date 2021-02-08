// document.getElementById("one").addEventListener()





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