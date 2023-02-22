const express = require("express");
const nameRouter = express.Router();
const faker = require("faker");
//import { faker } from "@faker-js/faker";
//const faker = require("@faker-js/faker");

//baseurl= /api/name/firstName
// nameRouter.get("/firstName", (req, res) => {
//   //Address = faker.address.city();

//    firstname=faker.name.firstName()
//   res.json({ firstname: firstname });
// });

// nameRouter.get("/firstname/:count?", (req, res) => {
//   let { count } = req.params;
//   let firstNames = [];
//   if (count) {
//     count = parseInt(count);
//     for (let i = 0; i < count; i++) {
//       firstNames.push(faker.name.firstName());
//     }
//   } else {
//     firstNames.push(faker.name.firstName());
//   }

//   res.json({ firstNames });
// });

nameRouter.get("/firstname/:count?", (req,res) => {
  let count = parseInt(req.params.count);

 const firstNames = new Array(count ? count : 1)
  .fill()
  .map(e=>faker.name.firstName())


  res.json({firstNames})
});

//api/name/gender/10
nameRouter.get("/gender/:count?", (req, res) => {
  let count = parseInt(req.params.count);

  const genders = new Array(count ? count : 1)
    .fill()
    .map(e => faker.name.gender());

  res.json({ genders });
});



nameRouter.get("/lastname/:count?", (req, res) => {
  let count = parseInt(req.params.count);

  const lastNames = new Array(count ? count : 1)
    .fill()
    .map((e) => faker.name.lastName());

  res.json({ lastNames });
});

module.exports = { nameRouter };
