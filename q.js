function getDigitalRoot(num) {
  const sum = String(num).split('').reduce((a, b) => +a + +b);
  console.log(sum);
  return String(sum).split('').reduce((s, digit) => +s + +digit);
}

console.log(getDigitalRoot(1349));
