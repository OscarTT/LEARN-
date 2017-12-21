'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
      contactId: {   // <- This is the new section to add
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Contacts',
          key: 'id',
          as: 'contactId'
      }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Phones');
  }
};
