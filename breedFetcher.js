const request = require('request');

// need to include callback because async
const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      // body is a JSON string - need to turn it into an object
      const data = JSON.parse(body);
      // data is an array
      if (data.length === 0) {
        error = "The requested breed was not found";
        callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
