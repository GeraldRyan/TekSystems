import {repeatStringNTimes, checkeredString, crossMaker, lowerTriangleMaker, upsideDownTrapezoidMaker} from './modules/stringFunctions.js';

let activeClass = null
$("#render").bind('click', renderShape())
$("#clear").bind('click', clearContent())
$("#input-random").bind('click', inputRandomInts())
$("#n-box").bind('click'), toggleDisplay("box")
$("#n-checkerboard").bind('click'), toggleDisplay("box")
$("#n-cross").bind('click'), toggleDisplay("box")
$("#n-lower-triangle").bind('click'), toggleDisplay("box")
$("#n-upside-down-trapezoid").bind('click'), toggleDisplay("box")
// $("#n-upper-triangle").bind('click'), toggleDisplay("box")


function toggleDisplay(className)
{
  // $(".instructions").removeClass().addClass("instructions").addClass("content").addClass(className)
  className != activeClass ? $("#world-seed").empty() :
  $(".result-shape").removeClass("invisible")
  $(".content").addClass("invisible")
  $(".form").removeClass("invisible")
  $(`.${className}`).removeClass("invisible")
  activeClass = className
}

function renderShape()
{
  $("#world-seed").empty()
  width = $("#width-input").val();
  height = $("#height-input").val();
  shapeSize = $("#shape-size-input").val();
  sideLength = $("#side-length-input").val();
  $(".inner-content").scrollTop();
  switch (activeClass)
  {
    case "box":
      console.log(`expect box, got ${activeClass}`)
      $(".width-value").text(width)
      $(".height-value").text(height)
      for (let i = 0; i < height; i++)
      {
        $("#world-seed-box").append(`<p>${repeatStringNTimes('*', width)}</p>`)
      }
      break;
    case "checkerboard":
      $(".width-value").text(width)
      $(".height-value").text(height)
      console.log(`Height value: ${height} width value: ${width}`)
      for (i = 0; i < height; i++)
      {
        $("#world-seed-checkerboard").append(`<p>${checkeredString('*', width, i % 2)}</p>`)
      }
      $("#world-seed-checkerboard").append("<br>")
      $("#world-seed-checkerboard p").css("font-weight", "bold").css("letter-spacing", "5px").css("font-size", "2rem").css("line-height",".1")
      break;
    case "cross":
      $(".shape-size-value").text(shapeSize)
      $("#world-seed-cross").append(`<p><pre>${crossMaker(shapeSize)}</pre></p>`)
      break;
    case "lower-triangle":
      $(".side-length-value").text(sideLength)
      $("#world-seed-lower-triangle").append(`<p><pre>${lowerTriangleMaker(sideLength)}</pre></p>`).css("text-align", "left").css("display", "flex").css("justify-content", "center")
      break;
    case "upper-triangle":
      $(".side-length-value").text(sideLength)
      $("#world-seed-upper-triangle").append(`<p><pre>${lowerTriangleMaker(sideLength)}</pre></p>`).css("text-align", "left").css("display", "flex").css("justify-content", "center").css("transform", "rotate(180deg)")
      break;
    case "upside-down-trapezoid":
      $(".width-value").text(width)
      $(".height-value").text(height)
      $("#world-seed-upside-down-trapezoid").append(`<p><pre>${upsideDownTrapezoidMaker(width, height)}</pre></p>`).css("text-align", "center").css
      break;
  }
  console.log( $("#world-seed-checkerboard").scrollTop())
  // $("html, body").animate({ scrollTop: $("#content-parent").scrollTop() }, 1000);
  $("html, body").animate({ scrollTop: 500 }, 0);
}

function clearContent(){
  $(".world-seed").empty()
  $("input").val("")
}

function inputRandomInts(){
  for (let i=0; i<4; i++){
    $("#width-input").val(getRandomInt(1,100));
    $("#height-input").val(getRandomInt(1,100));
    $("#side-length-input").val(getRandomInt(1,100));
    $("#shape-size-input").val(getRandomInt(1,100));
  }
}


// function repeatStringNTimes(char, n)
// {
//   if (n == 0)
//   {
//     return ""
//   }
//   return char + repeatStringNTimes(char, n - 1)
// }
// function checkeredString(char, n, offset = 0)
// {
//   string = ""
//   spacer = " "
//   if (offset !== 0)
//   {
//     spacer = char
//     char = " "
//   }

//   for (let i = 0; i < n; i++)
//   {
//     if (i % 2 == 0)
//     {
//       string += char
//     }
//     else string += spacer
//   }
//   return string
// }

// function crossMaker(shapeSize)
// {
//   string = ""
//   intHalfShapeSize = Math.floor(shapeSize / 2)
//   for (let i = 0; i < (intHalfShapeSize); i++)
//   {
//     for (let j = 0; j < shapeSize - (i * 2); j++)
//     {
//       j == 0 || (j == shapeSize - (i * 2) - 1) ? string += "*" : string += " "
//     }
//     string += "\n"
//   }
//   // Reflection
//   for (let i = 0; i < (intHalfShapeSize); i++)
//   {
//     for (let j = 0; j < shapeSize; j++)
//     {
//       j == shapeSize - (intHalfShapeSize) - i - 1 || (j == intHalfShapeSize + (i)) ? string += "*" : string += " "
//     }
//     string += "\n"
//   }
//   return string
// }

// function lowerTriangleMaker(sideLength)
// {
//   string = ""
//   for (let i = 1; i <= sideLength; i++)
//   {
//     string += repeatStringNTimes("*", i) + "\n"
//   }
//   return string
// }

// function upsideDownTrapezoidMaker(width, height)
// {
//   console.log(height, width)
//   if (parseInt(height) > parseInt(width)/2 )
//   {
//     console.log("Height:", height, "width", width, "height>width?", height > width)
//     errorMSG = "   ___                                  ___  \n(o o)                                (o o)\n (  V  )    Impossible Shape lol    (  V  )\n--m-m----------------------------------m-m--"
//     return errorMSG
//   }
//   string = ""
//   for (let i = 0; i < height; i++)
//   {
//     string += repeatStringNTimes("*", width - (i * 2)) + "\n"
//   }
//   string += "\n"
//   return string
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$( document ).ready(function() {
  toggleDisplay("box")
});