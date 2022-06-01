'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campsites', [
      {
        name: 'Camp Phoenix',
        description: 'stay at a lovely campsite tonight with one or more guests',
        guestsAllowed: 5,
        totalRating: null,
        pricePerNight: 150.00,
        city: 'Phoenix',
        state: 'Arizona',
        image1: 'https://s3.us-west-1.amazonaws.com/aot-2020/images/Main-Images/_1200x630_crop_center-center_82_none/Patagonia-Lake-State-Park-campsite_lead.jpg?mtime=1606842939', 
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        userId: 1
      },
      {
        name: 'Rio Rancho Stay',
        description: 'A great place to stay for up to 4 people a night in Rio Rancho, New Mexico',
        guestsAllowed: 4,
        totalRating: null,
        pricePerNight: 200.00,
        city: 'Rio Rancho',
        state: 'New Mexico',
        image1: 'https://globalnews.ca/wp-content/uploads/2017/06/camping-in-bc.jpg?quality=85&strip=all&w=1200',
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        userId: 1
      },
      {
        name: 'Irving Campgrounds',
        description: 'Great stay for up to 3 people a night!',
        guestsAllowed: 3,
        totalRating: null,
        pricePerNight: 150.00,
        city: 'Irving',
        state: 'Texas',
        image1: 'https://media.glampinghub.com/CACHE/images/accommodations/tentrr-signature-site-beautiful-campsite-fishing-hiking-horseback-riding-2-glamping-4de28b43-0408-4fd2-bbc1-2964ff3de6a7/cff23f510eb76b86a123b7aa69200a97.jpeg',
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        userId: 1
      },
      {
        name: 'Tucson Outdoors',
        description: 'Great stay for up to 8 people a night!',
        guestsAllowed: 8,
        totalRating: null,
        pricePerNight: 250.00,
        city: 'Tucson',
        state: 'Arizona',
        image1: 'https://www.planetware.com/photos-large/USAZ/arizona-tucson-general-hitchcock-campground.jpg',
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        userId: 1
      },
      {
        name: 'Oshkosh Staying Grounds',
        description: 'Great stay for up to 4 people a night!',
        guestsAllowed: 4,
        totalRating: null,
        pricePerNight: 135.00,
        city: 'Oshkosh',
        state: 'Wisconsin',
        image1: 'https://photos.thedyrt.com/stock/states/wi.jpg?width=1200&height=630&fit=crop&auto=webp',
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        userId: 1
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Campsites', null, {});
  }
};
