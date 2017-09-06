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
    this.browser.visit('/', done);
  });


  describe('page when logged in', function() {
    it('should not be empty', function() {
      expect(this.browser.html()).to.not.be.empty;
    });
    it('should display header', function() {
      expect(this.browser.html()).to.have.string('header-wrapper');
    });
    it('should show log in form by default', function() {
      expect(this.browser.html()).to.have.string('log-in-form')
    });
  });

  describe('header wrapper', function() {
    it('should display spaces header', function() {
      expect(this.browser.html()).to.have.string('spaces');
    });
    it('should display requests header', function() {
      expect(this.browser.html()).to.have.string('requests');
    });
    it ('should display logout header', function() {
      expect(this.browser.html()).to.have.string('logout');
    });
  });

  describe('log in form', function() {
    it('should display log in header', function() {
      expect(this.browser.html()).to.have.string('Log In')
    });
    it('should display email field', function() {
      expect(this.browser.html()).to.have.string('Email:')
    });
    it('should display password field', function() {
      expect(this.browser.html()).to.have.string('Password:');
    });
    it('should be able to switch to sign up form', function() {
      this.browser.pressButton("Sign Up")
      expect(this.browser.html()).to.have.string('Log In')
      expect(this.browser.html()).to.have.string('Confirm Password:')
    });
  });

  describe('sign up', function() {
    it('should display email field', function() {
      this.browser.pressButton("Sign Up")
      expect(this.browser.html()).to.have.string('Email:')
    });
    it('should display password field', function() {
      this.browser.pressButton("Sign Up")
      expect(this.browser.html()).to.have.string('Password:')
    });
    it('should display password confirm field', function() {
      this.browser.pressButton("Sign Up")
      expect(this.browser.html()).to.have.string('Confirm Password:')
    });
    it('should be able to switch to log in form', function() {
      this.browser.pressButton("Log In")
      expect(this.browser.html()).to.have.string('Log In')
    });
  });

  describe('logging in', function() {
    it('log in successful', function() {
      this.browser
        .fill('email', 'test@test.com')
        .fill('password', '123')
        .pressButton('submit');
      this.browser.assert.success();
    });
  });

  describe('signing up', function() {
    it('sign up successful', function() {
      this.browser
        .fill('email', 'test@test.com')
        .fill('password', '123')
        .fill('confim password', '123')
        .pressButton('submit');
      this.browser.assert.success();
    });
  });

  after(function(done) {
    this.server.close(done);
  });
});
