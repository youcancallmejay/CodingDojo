import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cards')
            .then(res => {
                setCards(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (card) => {
        axios.delete(`http://localhost:8000/api/cards/${card._id}`)
            .then(() => {
                setCards(cards.filter(c => c._id !== card._id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Header title="Learn Thai" rightButtonLink="/" rightButtonText="Study" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%', marginBottom: '5px'}}>
            <Link to='/addcard'>
                <button>Add Card</button>
            </Link>
        </div>
            <div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {cards.map(card => (
                        <li key={card._id} style={{ marginBottom: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.5rem', color: 'white', marginRight: '1rem' }}>{card.word}</span>
                                <div>
                                    <Link to={`/edit/${card._id}`} style={{ marginRight: '10px' }}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(card)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardList;
