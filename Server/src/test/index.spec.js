const expect = require('chai').expect
const server = require('../../server.js');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});