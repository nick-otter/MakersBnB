"use strict";

process.env.NODE_ENV = 'test';
// get the application server module

var http = require("http");
var app = require('../app');

var expect = require('chai').expect;
var Browser = require('zombie');

describe('home page', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should not be empty', function() {
    expect(this.browser.html()).to.not.be.empty;
  });

  after(function(done) {
    this.server.close(done);
  });
});
