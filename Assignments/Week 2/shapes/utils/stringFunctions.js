export function repeatStringNTimes(char, n)
{
  if (n == 0){
    return ""
  }
  return char + repeatStringNTimes(char, n - 1)
}