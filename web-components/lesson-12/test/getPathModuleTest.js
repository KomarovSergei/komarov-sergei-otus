const assert = chai.assert

describe('getPath', () => {
  it('should return full path to element', () => {
    assert.equal(runPath(), "body div:nth-child(5) p:nth-child(1)")
  })
})
