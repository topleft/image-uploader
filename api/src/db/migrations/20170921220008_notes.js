
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table.string('body').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
