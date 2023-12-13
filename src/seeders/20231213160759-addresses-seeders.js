'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('addresses', [{
    number: 17,
    owner: 1,
    city: 'Maceió',
    state: 'Alagoas',
    country: 'Brazil',
   }, {
    number: 18,
    owner: 1,
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
