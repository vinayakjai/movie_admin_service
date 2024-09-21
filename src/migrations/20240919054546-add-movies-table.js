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
        unique:true,
      },
      movie_image: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      certificate: {
        type: Sequelize.ENUM(
          'G',       // General Audiences (USA)
          'PG',      // Parental Guidance (USA)
          'PG-13',   // Parents Strongly Cautioned (USA)
          'R',       // Restricted (USA)
          'NC-17',   // Adults Only (USA)
          'U',       // Universal (India, UK)
          'UA',      // Parental Guidance (India)
          'A',       // Adults Only (India)
          'S',       // Special Category (India)
          '12A',     // 12 Accompanied (UK)
          '15',      // 15 and above (UK)
          '18'       // Adults Only (UK)
        ),
        allowNull: false,
        
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      available: {
        type: Sequelize.ENUM,
        values: ['open', 'not_open','closed'],
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
