
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('notes').insert({body: 'test1'}),
        knex('notes').insert({body: 'test2'}),
        knex('notes').insert({body: 'test3'})
      ]);
    });
};
