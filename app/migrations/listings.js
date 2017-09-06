'use strict'

exports.up = function(knex){
  return knex.schema
  .createTable('listings', function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('description');
    table.string('price');
    table.string('startDate');
    table.string('endDate');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('listings');
};
