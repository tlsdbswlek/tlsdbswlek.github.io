function return_test() {
  return;
  console.log('실행되지 않는 코드');
}

function print(msg) {
  console.log('in');
  console.log(msg);
  console.log('out');
}

function sum(arg1, arg2) {
  var result = arg1 + arg2;
  return result;
}
