const divide = require('../src/index');
const expect = require('chai').expect;

describe.skip('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8,4)).to.eql(2);
  });

  it('should throw an error when divide by zero', () => {
    const a = 1, b = 0;
    const fn = () => { divide(a, b); };
    expect(fn).to.throw();
  });
});