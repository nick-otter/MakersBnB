
knex.schema.createTable('spaces', function(table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.string('price per night');
    table.string('available from (DD/MM/YY)');
    table.string('available to (DD/MM//YY)');
    table.timestamps();
});
