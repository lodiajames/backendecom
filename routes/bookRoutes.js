const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel.js");

const seedDatabase = async () => {
  try {
    await Book.deleteMany();

    const books = [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Novel",
        description: "A class novel about the American Dream",
        price: 20,
        image: "https://m.media-amazon.com/images/I/818WtBh1ZEL._SL1500_.jpg",
      },
      {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        description: "A powerful story of racial injustice and moral growth",
        price: 15,
        image: "https://m.media-amazon.com/images/I/51tDHl8Z7cL.jpg",
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        description: "A dystopian vision of a totalitarian future society",
        price: 255,
        image: "https://m.media-amazon.com/images/I/713WiEEttdL._SL1119_.jpg",
      },
      {
        title: "When breath becomes air",
        author: "Paul kalanithi",
        genre: "Biography",
        description: "What makes life worth living in the face of death",
        price: 20,
        image:
          "https://m.media-amazon.com/images/I/61jERfrSKsL._AC_UY436_FMwebp_QL65_.jpg",
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        description: "A Fable About Following Your Dream",
        price: 20,
        image: "https://m.media-amazon.com/images/I/71zHDXu1TaL._SL1500_.jpg",
      },
      {
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        genre: "Fiction",
        description: "A class novel about the American Dream",
        price: 25,
        image: "https://m.media-amazon.com/images/I/61UZS3QA1UL._SL1500_.jpg",
      },
      {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        description:
          "A landmark volume in science writing by one of the great minds of our time",
        price: 20,
        image: "https://m.media-amazon.com/images/I/91ebghaV-eL._SL1500_.jpg",
      },
      {
        title: "The Art of Being Alone",
        author: "Renuka Gavrani ",
        genre: "Story",
        description:
          "The fear of loneliness was injected into our minds since we were kids",
        price: 35,
        image: "https://m.media-amazon.com/images/I/51Eh8yMbhmL._SL1500_.jpg",
      },
      {
        title: "The Laws of Human Nature",
        author: "Robert Greene",
        genre: "Novel",
        description:
          "We are social animals. Our very lives depend on our relationships with people...",
        price: 27,
        image: "https://m.media-amazon.com/images/I/41y1paqEhmL._SL500_.jpg",
      },
      {
        title: "The Muslim Entrepreneur",
        author: "Oumar Soule",
        genre: "Novel",
        description:
          "I am going to introduce to you some of the world's most brilliant Muslim Entrepreneurs. They have opened up and shared their secrets",
        price: 35,
        image: "https://m.media-amazon.com/images/I/719jIDxSsIL._SL1360_.jpg",
      },
    ];
    await Book.insertMany(books);
    console.log("Database seeded successfully");
  } catch (error) {
    console.log("Error seeding database:", error);
  }
};

router.get("/books", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.json(allBooks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  seedDatabase,
  router,
};
