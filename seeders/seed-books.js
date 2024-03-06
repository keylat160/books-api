//import books model
const Books = require("../models/books.js");

//dependencies
const mongoose = require("mongoose");

//config
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

//db connection
mongoose.connect(MONGO_URI).then(() => {
  console.log(`Connected to mongo: ${MONGO_URI}`);
});

//seed
Books.insertMany([
      {
        title: "The Shinobi Initiative",
        description:
          "The reality-bending adventures of a clandestine service agency in the year 2166",
        year: 2014,
        quantity: 10,
        imageURL: "https://imgur.com/LEqsHy5.jpeg",
      },
      {
        title: "Tess the Wonder Dog",
        description: "The tale of a dog who gets super powers",
        year: 2007,
        quantity: 3,
        imageURL: "https://imgur.com/cEJmGKV.jpg",
      },
      {
        title: "The Annals of Arathrae",
        description:
          "This anthology tells the intertwined narratives of six fairy tales.",
        year: 2016,
        quantity: 8,
        imageURL: "https://imgur.com/VGyUtrr.jpeg",
      },
      {
        title: "Wâˆ€RP",
        description:
          "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        year: 2010,
        quantity: 4,
        imageURL: "https://imgur.com/qYLKtPH.jpeg",
      }
    ])
    .then(() => {
      console.log('Successfully created books!')
    })
    .catch(err => {
        console.log('Failed to create books: ', err)
    })