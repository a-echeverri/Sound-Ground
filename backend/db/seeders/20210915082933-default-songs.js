'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const defaultSongs = [
      {
        userId: 2,
        albumId: 1,
        title: 'Oncle Jazz',
        songUrl:
          'https://mymusicdb.s3.us-east-2.amazonaws.com/songs/defaults/Men+I+Trust+-+Oncle+Jazz+-+01+Oncle+Jazz.mp3',
        imageUrl: 'https://i.ibb.co/w6Z1B6G/a3970465110-16.jpg',
      },
      {
        userId: 2,
        albumId: 1,
        title: 'Norton Commander (Album V)',
        songUrl:
          'https://mymusicdb.s3.us-east-2.amazonaws.com/songs/defaults/Men+I+Trust+-+Oncle+Jazz+-+02+Norton+Commander+(album+v).mp3',
        imageUrl: 'https://i.ibb.co/w6Z1B6G/a3970465110-16.jpg',
      },
      {
        userId: 2,
        albumId: 1,
        title: 'Days Go By',
        songUrl:
          'https://mymusicdb.s3.us-east-2.amazonaws.com/songs/defaults/Men+I+Trust+-+Oncle+Jazz+-+03+Days+Go+By.mp3',
        imageUrl: 'https://i.ibb.co/w6Z1B6G/a3970465110-16.jpg',
      },
      {
        userId: 2,
        albumId: 1,
        title: 'Tailwhip (Album V)',
        songUrl:
          'https://mymusicdb.s3.us-east-2.amazonaws.com/songs/defaults/Men+I+Trust+-+Oncle+Jazz+-+04+Tailwhip+(album+v).mp3',
        imageUrl: 'https://i.ibb.co/w6Z1B6G/a3970465110-16.jpg',
      },
      {
        userId: 2,
        albumId: 1,
        title: 'Found Me',
        songUrl:
          'https://mymusicdb.s3.us-east-2.amazonaws.com/songs/defaults/Men+I+Trust+-+Oncle+Jazz+-+05+Found+Me.mp3',
        imageUrl: 'https://i.ibb.co/w6Z1B6G/a3970465110-16.jpg',
      },
    }

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
};
