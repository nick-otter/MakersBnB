exports.up = function(knex){
  return knex.schema
  .createTable('bookings', function(table){
    table.increments('id').primary();
    table.string('listinguserid');
    table.string('bookinguserid');
    table.string('listingid');
    table.string('date');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('bookings');
};
