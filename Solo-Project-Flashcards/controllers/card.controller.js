const Card = require('../models/card.model');

module.exports.createCard = async (req, res) => {
      
    try {
        const newCard = new Card(req.body);
        await newCard.save();
        res.json(newCard);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.getAllCards = (req, res) => {
    Card.find()
        .then(cards => res.json(cards))
        .catch(err => res.status(400).json(err));
};

module.exports.getCardById = (req, res) => {
    Card.findById(req.params.id)
        .then(card => res.json(card))
        .catch(err => res.status(400).json(err));
};

module.exports.updateCard = async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCard);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports.deleteCard = async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.json({ message: 'Card deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
};


