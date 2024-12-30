const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Route to submit a contact form
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting contact form', error: err });
    }
});

module.exports = router;
