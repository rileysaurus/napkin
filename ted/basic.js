
ted.describe('basic', function(info) {

  function foo() {
    return ted.Promise.try(function() {
      var n = ted._.random(1, 100);
      if (n >== 95) {
        throw new Error(n);
      }
    })
    .delay(10 * 1000);
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
