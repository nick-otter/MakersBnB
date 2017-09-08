'use string';

var bookshelf = require('../bookshelf');
var Listing = bookshelf.Model.extend({
  tableName: 'requests',
});

module.exports = Request;
