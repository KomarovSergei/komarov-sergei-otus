const assert = chai.assert

describe('getPath', () => {
  it('should return full path to element', () => {
    assert.equal(runPath(), "body div div p")
  })
})
