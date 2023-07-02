// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let number = prompt('what number do you want it to go up to')
  number = Number(number)


  let count = 0
  count = Number(count)

  let red = 0
  let violet = 1
  let green = ''


  let sequence = 'the fibonacci sequence is '
  while (count < number) {
    green = red + violet
    red = violet
    violet = green
    sequence = sequence + ' ' + green
    count = green
  }

  alert(sequence)



}
