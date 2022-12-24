function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i++) {
    if ((str.slice(i + 1).indexOf(str[i]) === -1) && (str.slice(0, i).indexOf(str[i]) === -1)) {
      return str[i];
    }
  }
}
 console.log(findFirstSingleChar('abcdae'));

console.log('34567'.slice(3 + 1));
console.log('34567'.slice(0, 3));
