'use strict';

module.exports = {
  /*
  up: (queryInterface, Sequelize) => {

      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
    'Vegetables',
    'color',
    Sequelize.STRING
  )
},

  /*
  down: (queryInterface, Sequelize) => {

      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    down: function (queryInterface, Sequelize) {
   queryInterface.removeColumn(
     'Vegetables',
     'color'
    )
  }
};
