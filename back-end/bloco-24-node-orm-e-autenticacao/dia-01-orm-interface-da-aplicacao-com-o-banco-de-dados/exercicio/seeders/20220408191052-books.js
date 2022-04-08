'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', 
    [
      {
        title: 'Dragon Ball Z',
        author: 'Akira Toriyama',
        pageQuantity: 965,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Naruto',
        author: 'Criador de Naruto',
        pageQuantity: 965,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'One Piece',
        author: 'Alguma coisa Oda',
        pageQuantity: 965,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Atack on Titan',
        author: 'Criador de Atack on Titan',
        pageQuantity: 965,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Pokemon',
        author: 'Criador de Pokemon',
        pageQuantity: 965,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {})
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Books', null, {})
  }
};
