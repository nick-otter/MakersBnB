'use string';

var bookshelf = require('../bookshelf');
var requests = bookshelf.Model.extend({
  tableName: 'requests',
});

module.exports = requests;
