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
  
}