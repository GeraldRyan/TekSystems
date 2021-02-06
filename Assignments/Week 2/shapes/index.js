let activeClass = null
function repeatStringNTimes(char, n)
{
  if (n == 0){
    return ""
  }
  return char + repeatStringNTimes(char, n - 1)
}
function toggleDisplay(className)
{
  // $(".instructions").removeClass().addClass("instructions").addClass("content").addClass(className)
  className != activeClass ? $("#world-seed").empty() : 
  $(".form").removeClass("invisible")
  $(".result-shape").removeClass("invisible")
  $(".content").addClass("invisible")
  $(`.${className}`).removeClass("invisible")
  activeClass = className
}

const renderShape = () =>
{
  $("#world-seed").empty()
  width = $("#width-input").val();
  height = $("#height-input").val();
  shapeSize = $("#shape-size-input").val();
  sideLength = $("#side-length-input").val();
  // alert(`Rendering Shape of width: ${width} and height: ${height} and shape-size: ${shapeSize} and side length ${sideLength}`)
  switch (activeClass)
  {
    case "box":
      console.log(`expect box, got ${activeClass}`)
      $(".width-value").text(width)
      $(".height-value").text(height)

      for (i = 0; i < height; i++)
      {
        $("#world-seed").append(`<p>${repeatStringNTimes('*', width)}</p>`)
      }
      break;
    case "checkerboard":
      $(".width-value").text(width)
      $(".height-value").text(height)
      break;
    case "cross":
      $(".shape-size-value").text(shapeSize)
      break;
    case "lower-triangle":
      $(".side-length-value").text(sideLength)
      break;
    case "upper-triangle":
      $(".side-length-value").text(sideLength)
      break;
    case "upside-down-trapezoid":
      $(".width-value").text(width)
      $(".height-value").text(height)
      break;
  }
}