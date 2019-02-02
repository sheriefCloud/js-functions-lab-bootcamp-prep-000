// write your code below!


function happyHollidays() {
  return "happy holidays!"
}

function happyHolidaysTo(name){
  return 'Happy holidays, ${name}'
}

function happyHolidayTo(holiday,name){
  return 'Happy ${holiday}, ${name}'
}

function holidayCountdown(holiday,days){
  return 'It\'s ${days} until ${holiday}!'
}

console.log ( happyHollidays() happyHolidaysTo("You") happyHolidayTo('Independence Day', 'you') holidayCountdown("Mother's Day", 20))
