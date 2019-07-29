const Joi = require("joi");

const schema = Joi.string().uri({
  scheme: ["http", "https"]
  // allowRelative: true
});

const values = [
  "johnwoolee@gmail.com",
  "google.com",
  "www.google.com",
  "http**:/www.google.com",
  "http/**www.google.com",
  "http:/www.google.com",
  "http:www.google.com",
  "http://www.google.com"
];
values.map(value => {
  console.log(value);
  schema.validate(value).error &&
    console.log(schema.validate(value).error.message);
});
