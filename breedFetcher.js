const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  // body is a JSON string - need to turn it into an object
  const data = JSON.parse(body);
  // data is an array

  if (data.length === 0) {
    console.log("The requested breed was not found");
  } else {
    console.log(data[0].description);
  }
});