// declare array
let array:number[] = [1, 2, 3, 4, 5]

// demonstrate in place forEach
array.forEach((v, i, a) =>
{
  a[i] = v + 1
})
console.log(array)

// Demonstrate map 
new_array = array.map((v, i, a) =>
{
  return v + 1
})

console.log(array)
console.log(new_array)

