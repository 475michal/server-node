const express = require('express');
const { users } = require("./demo.js");

const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAllUsers,
  addUser,
  updateUser,
  signin,
} = require("../controllers/user.controller");


router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.post("/", signin);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;




router.get("/", (req, res) => {
    res.send(users);
});

router.post('/sign-up', (req, res, next) => {
    const newUser = req.body;
    console.log(newUser);
    console.log(req.body);

    let lastID = users[users.length - 1].id + 1;
    if (isNaN(lastID))
        lastID = 100;

    newUser.id = lastID;
    users.push(newUser);
    res.status(201).send(newUser); 
})
router.post('/sign-in', (req, res, next) => {
    const { id } = req.params;
    const users = users.find((a) => a.id == id);
    if (users)
        res.send(users);
    else
        res.status(404).json({ error: 'books not found!!!' });

})

module.exports = router;