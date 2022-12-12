function angleBetweenClockHands(date) {
  let agl = 0.5 * (60 * date.getHours() - 11 * date.getMinutes());
  agl = (agl <= 360 ? agl : agl - 360 - 180);
  return ((Math.abs(agl) * Math.PI) / 180);
}

console.log(angleBetweenClockHands(new Date(2016, 2, 5, 0, 0)));
console.log(angleBetweenClockHands(new Date(2016, 3, 5, 3, 0)));
console.log(angleBetweenClockHands(new Date(2016, 3, 5, 18, 0)));
console.log(angleBetweenClockHands(new Date(2016, 3, 5, 21, 0)));
