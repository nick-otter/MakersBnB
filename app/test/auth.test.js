"use strict";

process.env.NODE_ENV = 'test';
// get the application server module

var http = require("http");
var app = require('../app');

var expect = require('chai').expect;
var Browser = require('zombie');

describe('auth', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/auth', done);
  });


  describe('page', function() {
    it('should not be empty', function() {});
    it('should display header', function() {});
    it('should show log in form by default', function() {});
  });

  describe('log in', function() {
    it('should display email field', function() { });
    it('should display password field', function() { });
    it('should be able to switch to log in form', function() { });
  });

  describe('sign up', function() {
    it('should display email field', function() { });
    it('should display password field', function() { });
    it('should display password confirm field', function() { });
    it('should be able to switch to register form', function() { });
  });

  after(function(done) {
    this.server.close(done);
  });
});
