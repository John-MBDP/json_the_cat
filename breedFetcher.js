const request = require("request");

const input = process.argv.slice(2);
const breed = input[0];
console.log(breed);
request(
  `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`,
  (error, response, body) => {
    if (error) {
      console.log("We have an error: ", error);
      return error;
    }
    // console.log(data);
    const data = JSON.parse(body);
    console.log(data[0].breeds[0]);
  }
);
