// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let num = prompt('Give me a number')
  let start = 1
  let squares = ''

  while (num >= start) {
    // alert("We're in the loop right now. start is " + start + " and squares is " + squares + ' and num is ' + num + "and num > start is " + (num >= start))
    let square = start * start
    squares = squares + square
    start = start + 1
    squares = squares + ', '
  }

  alert(squares)
}
