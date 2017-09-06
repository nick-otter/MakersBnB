'use strict'

exports.up = function(knex){
  return knex.schema
  .createTable('listings', function(table){
    table.increments('id').primary();
    table.string('name');
    table.string('description');
    table.string('price per night');
    table.string('available from (DD/MM/YY)');
    table.string('available to (DD/MM//YY)');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('listings');
};
