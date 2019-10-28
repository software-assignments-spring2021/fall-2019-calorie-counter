const assert = require('assert')

//a useless test to see the mocha was configured correctly
it('should return true; otherwise, mocha was not configured correctly', () => {
  assert.equal(true, true)
})


const square = (x) => x*x

it('correctly computes the square of a number', () => {
	assert.equal(square(4), 16)
})


//some more usefull tests (i.e., pertinent to the project)

