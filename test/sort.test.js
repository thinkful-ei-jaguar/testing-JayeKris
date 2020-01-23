const sort = require('../src/sort');
const expect = require('chai').expect;

describe.skip('Sort function', () => {
  it('should sort a positive array correctly', () => {
    const unOrdered = [4,5,3,2,7];
    const ordered = [2,3,4,5,7];
    const arr1 = sort(unOrdered);
    expect(arr1).to.deep.equal(ordered);
  });

  it('should sort a mixed int array correctly', () => {
    const unOrdered = [4,-5,3,2,-7];
    const ordered = [-7,-5,2,3,4];
    const arr1 = sort(unOrdered);
    expect(arr1).to.deep.equal(ordered);
  });


});