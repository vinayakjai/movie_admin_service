'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      movie_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      movie_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      certificate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      available: {
        type: Sequelize.ENUM,
        values: ['open', 'not_open'],
        allowNull: false,
        defaultValue: 'not_open',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};
