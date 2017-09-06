"use strict";

process.env.NODE_ENV = 'test';
// get the application server module

var http = require("http");
var app = require('../app');

var expect = require('chai').expect;
var Browser = require('zombie');

describe('listings', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('listings/new', done);
  });

  describe('page', function() {
    it('should not be empty', function() {
      expect(this.browser.html()).to.not.be.empty;
    });
    it('should display header', function() {
      expect(this.browser.html()).to.have.string('header-wrapper');
    });
  });

  describe('header wrapper', function() {
    it('should display spaces header', function() {
      expect(this.browser).to.contain('spaces');
    });
    it('should display requests header', function() {
      expect(this.browser).to.contain('requests');
    });
    it ('should display logout header', function() {
      expect(this.browser).to.contain('logout');
    });
  });

  describe('List a space form', function() {
    it('should display List a space header', function() {
      expect(this.browser.html()).to.have.string('List A Space')
    });
    it('should display name field', function() {
      expect(this.browser.html()).to.have.string('Name:')
    });
    it('should display available from: field', function() {
      expect(this.browser.html()).to.have.string('Available from:');
    });
    it('should display available to: field', function() {
      expect(this.browser.html()).to.have.string('Available to:');
    });
    it('should display price per night: fields', function() {
      expect(this.browser.html()).to.have.string('Price per night:');
    });
    it('should display description field', function() {
      expect(this.browser.html()).to.have.string('description');
    });
  });

  after(function(done) {
    this.server.close(done);
  });
});
