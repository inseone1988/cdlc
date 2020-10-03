const {DB} = require("../database/connection");
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get('/books',bookController.getBooks);

module.exports = router;