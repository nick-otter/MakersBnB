"use strict";

var expect = require('chai').expect;
var Browser = require('zombie');
var browser = new Browser();

describe('signup page', function() {

  before(function() {
    browser.visit('/')
  });

  it('it throws an error if the email is not unique', function() {
    expect(browser.html()).to.be.empty;
  });
});
