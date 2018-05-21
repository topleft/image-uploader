'use strict';

const users = [
  {
    username: 'seedUserOne',
    password: 'seedPasswordOne'
  },
  {
    username: 'seedUserTwo',
    password: 'seedPasswordTwo'
  }
];

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert(users);
  });
};
