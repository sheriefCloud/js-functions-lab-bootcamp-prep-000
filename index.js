// write your code below!


function happyHollidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return 'Happy holidays. ${name}'
}

function happyHolidayTo(holiday,name){
  return 'Happy ${holiday}, ${name}'
}

function holidayCountdown(holiday,days){
  return 'It\'s ${days} until ${holiday}!'
}

console.log ( happyHollidays())
console.log(happyHolidaysTo("You"))
console.log(happyHolidayTo('Independence Day', 'you'))
console.log(holidayCountdown("Mother's Day", 20))
