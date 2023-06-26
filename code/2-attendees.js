function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''

  while (count < numOfAttendees) {
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
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
    total = total + whatever
    count = count + 1
  }

  alert('Total' + total)
}