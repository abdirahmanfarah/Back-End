
exports.seed = function(knex) {
  return knex('user-workouts').truncate()                          // deletes all existing entries
    .then(function () {
      return knex('user-workouts').insert([                        // inserts seed data into local development sqlite3 database
        {
          id: 1,
          user_id: 1,
          workout_id: 2,
          date: 'today'
        },
        {
          id: 2,
          user_id: 2,
          workout_id: 1,
          date: 'tomorrow'
        },
        {
          id: 3,
          user_id: 3,
          workout_id: 3,
          date: 'yesterday'
        },
      ]);
    });
};
