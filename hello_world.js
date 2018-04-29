function helloWorld() {
  return 'Hello World'
}

exports.hello = function() {
  console.log(helloWorld())
}

exports.customHello = function(planet) {
 console.log('Hello' + planet ); 
}

// module.exports = hello;