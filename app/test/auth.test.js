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
      // var component = '<button class="tablinks" id="default-tab" onclick="showForm(event, \'log-in\')">Log In</button>'
      // const button = findRenderedDOMComponentWithTag(component);
      // expect(button).to.be.ok;
      // Simulate.click(button);
      // expect(this.browser.html()).to.have.string('Confirm Password:')
    });
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
