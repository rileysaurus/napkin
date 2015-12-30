
ted.describe('basic', function(info) {

  function foo() {
    return ted.Promise.delay(30 * 1000);
  }

  describe('Test A', function() {
    it('should work 1', function() {
      return foo();
    });
    it('should work 2', function() {
      return foo();
    });
  });

});
