// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name)
{
  kittens = kittens.concat(name)
  return kittens
}
function destructivelyPrependKitten(name)
{
  kittens = [name, ...kittens]
  return kittens
}
function destructivelyRemoveLastKitten()
{
  kittens = kittens.slice(0, kittens.length)
  return kittens
}
funtion destructivelyRemoveFirstKitten()
{
  kittens = kittens.slice(1)
  return kittens
}