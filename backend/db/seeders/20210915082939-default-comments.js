'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert( 'Comments',
			[
				{ userId: 7, songId: 1, body: 'This first' },
				{ userId: 7, songId: 1, body: 'Test comment' },
				{ userId: 1, songId: 1, body: 'Test comment' },
				{ userId: 1, songId: 1, body: 'Test comment' },
				{ userId: 1, songId: 1, body: 'Test comment' },
				{ userId: 1, songId: 1, body: 'Test comment' },
				{ userId: 1, songId: 1, body: 'Test comment' },
			],
			{}
		);
	},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('Comments', null, {});
    
  },
};
