const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getContacts);
router.post('/', contactController.createContact);
router.delete('/:id', contactController.deleteContact);
router.put('/:id', contactController.updateContact);

module.exports = router;
