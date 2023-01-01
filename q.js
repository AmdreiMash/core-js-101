function memoize(func) {
  const result = func();
  return () => result;
}
const memoizer = memoize(() => Math.random());
console.log(memoizer());
console.log(memoizer());
