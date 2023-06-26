// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10

  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }

  alert('Lift Off!')
}

function make1() {
  let stop = prompt('aye bro give me a number to count up to 🙏')

  let increment = prompt('n another number to count up in')

  let count = 0

  stop = Number(stop)
  increment = Number(increment)

  while (count < stop) {
    count = count + increment
    alert(count)
  }

}