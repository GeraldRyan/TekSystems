let primesTo1000 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]

function print_even_between(ceiling)
{
  for (let i = 1; i < ceiling; i++)
  {
    if (i % 2 == 0)
    {
      console.log(i)
    }
  }
}
function print_odd_between(ceiling)
{
  for (let i = 1; i < ceiling; i++)
  {

    if (i % 2 !== 0)
    {
      console.log(i)
    }
  }
}

const check_if_prime = (number) =>
{
  if (number <= 3)
  {
    return true
  }
  for (let i = 2; i < number; i++)
  {
    if (number % i == 0)
    {
      return false
    }
  }
  return true
}

function isModXY(a, x, y)
{
  if (a % x == 0 && a % y == 0)
  {
    return true
  }
  return false
}

function printAllDivisibleBy(ceiling, x, y)
{
  console.log(`Numbers divisible by ${x} and ${y}`)
  for (let i = 0; i < ceiling; i++)
  {
    isModXY(i, x, y) ? console.log(i) : console.log()
  }
}

print_even_between(30)
print_odd_between(50)
check_if_prime(7) ? console.log("Yes it's prime") : console.log("Not prime")
printAllDivisibleBy(100, 4, 6)



  // password = prompt("Enter your password")
  // if (password === "123")
  // {
  //   newDiv = document.createElement("div")
  //   newDiv.appendChild(document.createTextNode("Secret Content"))
  //   document.body.appendChild(newDiv)
  // }
  // else{
  //   alert("denied");
  // }

// listofPrimeNumbers = []
// for (let i = 1; i < 100; i++)
// {
//   if (i % 2 == 0)
//   {
//     console.log(`No, ${i} is not a prime`)
//   }
//   else
//   {
//     listofPrimeNumbers.map((element) =>
//     {
//       if (i % element == 0)
//       {
//         console.log(`No ${i} is not a prime`)
//         break;
//       }
//     })

//     console.log(`Yes ${i} is a prime`)
//     listofPrimeNumbers.push(i)
//     // console.log(listofPrimeNumbers)
//   }
// }