// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name)
{
  kittens = kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name)
{
  kittens = kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten()
{
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}
function destructivelyRemoveFirstKitten()
{
  kittens = kittens.slice(1)
  return kittens
}
function appendKitten(name)
{
  kittens = kittens.concat(name)
  return kittens
}
function prependKitten(name)
{
  kittens = [name, ...kittens]
  return kittens
}
function removeLastKitten()
{
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}
function removeFirstKitten()
{
  kittens = kittens.slice(1)
  return kittens
}