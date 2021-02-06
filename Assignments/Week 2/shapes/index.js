function toggleDisplay(className)
{
  // $(".instructions").removeClass().addClass("instructions").addClass("content").addClass(className)

  $(".content").addClass("invisible")
  $(`.${className}`).removeClass("invisible")
}

