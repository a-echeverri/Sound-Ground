'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Albums',
			[
				{
					userId: 2,
					title: 'On Letting Go',
					imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71H9DG-pFEL._SL1500_.jpg',
				},
			],
		{}
	);
},

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Albums', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
