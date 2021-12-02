const request = require("request");

const input = process.argv.slice(2);
// const breed = input[0];
const fetchBreedDescription = (breed, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        return callback(`Failed to request details: ${error}`, null);
      }
      // console.log(data);
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
      } else {
        callback(`Failed to find breed ${breed}`, null);
      }
    }
  );
};
module.exports = { fetchBreedDescription };
