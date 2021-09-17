'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'Songs', [
      {
        userId: 7,
        albumId: 31,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Thriller%2BRemix+-+Eric+Prydz.mp3',
        title: 'Thriller Remix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        albumId: 32,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Thriller%2BRemix+-+Eric+Prydz.mp3',
        title: 'Killing In The Name Of Remix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        albumId: 33,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Killing%2BIn%2BThe%2BName%2B(RATM%2BRemix)+-+deadmau5.mp3',
        title: 'Living Together',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        albumId: 34,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Killing%2BIn%2BThe%2BName%2B(RATM%2BRemix)+-+deadmau5.mp3',
        title: 'Test1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        albumId: 35,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Killing%2BIn%2BThe%2BName%2B(RATM%2BRemix)+-+deadmau5.mp3',
        title: 'Test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        albumId: 36,
        url: 'https://hosted-songs.s3.us-west-1.amazonaws.com/Thriller%2BRemix+-+Eric+Prydz.mp3',
        title: 'Test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
 },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};