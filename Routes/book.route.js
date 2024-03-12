
const express = require('express');
const { books } = require("./demo.js");
const router = express.Router();
const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");


router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.post("/", signin);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;

router.get("/", (req, res) => {
    res.send(books);
});

// router.post('/', (req, res, next) => {
//     const newBook = req.body;
//     console.log(newBook);
//     console.log(req.body);

//     let lastID = articles[books.length - 1].id + 1;
//     if (isNaN(lastID))
//         lastID = 100;

//         newBook.id = lastID;
//     books.push(newBook);
//     res.status(201).send(newBook); 
// })

// router.put('/:id', (req, res) => {
//     const id = +req.params.id;

//     if (id !== req.body.id) {
//         return res.status(409).json({ error: 'body.id != parameter id' }); 
//     }

//     const book = books.find(a => a.id === id);

//     if (book) {
//         book.name = req.body.name || book.name;
//         book.type = req.body.type || book.type;
//         book.urlImg = req.body.urlImg || book.urlImg;
//         book.isLend = req.body.isLend || book.isLend;

//         return res.send(book);
//     }

//     res.status(404).json({ error: 'book not found!!!' });
// });


// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     const bookById = books.find((a) => a.id == id);
//     if (bookById)
//         res.send(bookById);
//     else
//         res.status(404).json({ error: 'books not found!!!' });

// });
// router.delete('/:id', (req, res) => {
//     const id = +req.params.id;

//     const index = books.findIndex(a=> a.id === id);
//     books.splice(index, 1);

//     res.send({ massage: "successfull" })
// })
module.exports = router;

