function timeOfDay(name) {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 4 && hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night'
  }

  return `Good ${timeOfDay}, ${name}!`
}

console.log(timeOfDay('yzer'));