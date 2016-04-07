function dieToss() {
  console.log("die toss!")
  return Math.floor(Math.random() * 6) + 1;
}

console.log('1');

var promise = new Promise(function(fulfill, reject) {
  var n = dieToss();
  if (n === 6) {
    fulfill(n);
  } else {
    reject(n);
  }
  console.log('2');
});

promise.then(function(toss) {
  console.log('Ya, threw a ' + toss + '.');  
}, function(toss) {
  console.log('Oh no, threw a ' + toss + '.');  
});

console.log('3');

