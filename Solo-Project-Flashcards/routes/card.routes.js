const express = require('express');
const router = express.Router();

const CardController = require('../controllers/card.controller');
module.exports = (app) => {
    app.post('/api/cards', CardController.createCard); 
    app.get('/api/cards', CardController.getAllCards);
    app.get('/api/cards/:id', CardController.getCardById);    
    app.put('/api/cards/:id', CardController.updateCard); 
    app.delete('/api/cards/:id', CardController.deleteCard); 
}


