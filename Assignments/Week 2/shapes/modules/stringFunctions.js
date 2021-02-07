export function repeatStringNTimes(char, n)
{
  if (n == 0)
  {
    return ""
  }
  return char + repeatStringNTimes(char, n - 1)
}
export function checkeredString(char, n, offset = 0)
{
  string = ""
  spacer = " "
  if (offset !== 0)
  {
    spacer = char
    char = " "
  }

  for (let i = 0; i < n; i++)
  {
    if (i % 2 == 0)
    {
      string += char
    }
    else string += spacer
  }
  return string
}

export function crossMaker(shapeSize)
{
  string = ""
  intHalfShapeSize = Math.floor(shapeSize / 2)
  for (let i = 0; i < (intHalfShapeSize); i++)
  {
    for (let j = 0; j < shapeSize - (i * 2); j++)
    {
      j == 0 || (j == shapeSize - (i * 2) - 1) ? string += "*" : string += " "
    }
    string += "\n"
  }
  // Reflection
  for (let i = 0; i < (intHalfShapeSize); i++)
  {
    for (let j = 0; j < shapeSize; j++)
    {
      j == shapeSize - (intHalfShapeSize) - i - 1 || (j == intHalfShapeSize + (i)) ? string += "*" : string += " "
    }
    string += "\n"
  }
  return string
}

export function lowerTriangleMaker(sideLength)
{
  string = ""
  for (let i = 1; i <= sideLength; i++)
  {
    string += repeatStringNTimes("*", i) + "\n"
  }
  return string
}

export function upsideDownTrapezoidMaker(width, height)
{
  console.log(height, width)
  if (parseInt(height) > parseInt(width)/2 )
  {
    console.log("Height:", height, "width", width, "height>width?", height > width)
    errorMSG = "   ___                                  ___  \n(o o)                                (o o)\n (  V  )    Impossible Shape lol    (  V  )\n--m-m----------------------------------m-m--"
    return errorMSG
  }
  string = ""
  for (let i = 0; i < height; i++)
  {
    string += repeatStringNTimes("*", width - (i * 2)) + "\n"
  }
  string += "\n"
  return string
}