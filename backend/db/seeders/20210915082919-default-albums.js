'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Albums',
			[
				{
					userId: 7,
					title: 'Juturna',
					imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Mmx9dUE8L._SL1500_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					userId: 7,
					title: 'On Letting Go',
					imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71H9DG-pFEL._SL1500_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					userId: 8,
					title: 'Violent Waves',
					imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Violent_Waves_cover.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					userId: 8,
					title: 'Decensus',
					imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91eO2ke%2BiSL._SL1425_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					userId: 9,
					title: 'The Amulet',
					imageUrl: 'https://mk0getalternatib4105.kinstacdn.com/wp-content/uploads/2017/10/csamulet.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					userId: 9,
					title: 'Blue Sky Noise',
					imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81RbKmLETnL._SL1425_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
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
