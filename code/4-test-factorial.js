// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let factorial = prompt('give me a number')
  let count = factorial
  let total = 1

  while (count > 1) {
    total = total * count
    count = count - 1
  }

  alert('The factorial of ' + factorial + ' is ' + total)
}
