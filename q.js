function logger(func, logFunc) {
  return (item) => () => logFunc(func(item));
}
const cosLogger = logger(Math.cos, console.log);
const result = cosLogger(Math.PI);

// log from console.log:
// * cos(3.141592653589793) starts
// * cos(3.141592653589793) ends
//*
//* /
result();
console.log(['expected', 'test', 1]);
