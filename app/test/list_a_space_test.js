
var Browser = require('zombie');
Browser.localhost(3000)
// var expect = require('expectations');


describe('list a space page', function() {

  describe('testing', function() {

    const browser = new Browser()

    before(function(done) {
      browser.visit('/', done);
    });

    it('should see welcome page', function() {
      browser.assert.text('title', 'Welcome To Express');
    });
  });

  describe('4. user can provide a description of space', function() {
    it('should show a name field');
    it('should show an available from field');
    it('should show an available to field');
  });

   describe('5. user can provide a price per night of space', function() {
     it('should show a price per night field');
   });
  });
