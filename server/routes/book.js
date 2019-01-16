const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book');


router.post('', bookCtrl.saveBooks);

router.get('', bookCtrl.getBooks);

router.patch('/:id', bookCtrl.updateBooks);

router.delete('/:id', bookCtrl.deleteBooks);

module.exports = router;