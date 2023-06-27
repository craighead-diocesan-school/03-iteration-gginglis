



function attendees() {
  let numOfAttendees = prompt('how many people are coming?')
  let count = 0
  // let numOfAttendees = 5
  let attendeeList = ''

  while (count < numOfAttendees) {
    let attendee = prompt('enter a name')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }

  alert(attendeeList)
}

function make2() {
  let numOfNumbers = prompt('How many numbers do you wanna add?')

  let count = 0
  let total = 0


  while (count < numOfNumbers) {
    let whatever = prompt('Next number')
    whatever = Number(whatever)
    total = Number(total)
    total = total + whatever
    count = count + 1
  }

  alert('Total ' + total)
}