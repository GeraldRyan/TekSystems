function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


// Synchronous request - Read Local Text File
function readTextFile(file = "./foo/bar.txt")
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.send(null);
  return rawFile.responseText
}


// Allowed characters in a string - does not filter. Just accepts or rejects
function validateString(string)
{
  const regexPattern = new RegExp("[^a-zA-Z']") // Also works
  if (/[^a-zA-Z']/.test(string))
  {
    return true;
  }
  return false;
}

// log current timestamp in millseconds
console.log("Before function call:  timestamp in millseconds", window.performance.now())
console.log("after function call: timestamp in millseconds", window.performance.now())
