import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../App.css';
import '../global.css'


const CardReview = () => {
    const [cards, setCards] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cards`)
            .then(response => setCards(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleNextClick = () => {
        setCurrentIndex(previousIndex => (previousIndex + 1) % cards.length)
    }


    const handlePreviousClick = () => {
        setCurrentIndex(previousIndex => (previousIndex - 1) % cards.length)
    }

    const handleToggleTranslation = () => {
        setShowTranslation(!showTranslation)
    }

    return (
        <div>
            <Header title="Learn Thai" rightButtonLink="/cards" rightButtonText="Edit Cards" />
            <h1 style={{color: 'white', display: 'flex', margin: 'auto', justifyContent: 'center'}}>Thai Consonants</h1>
            <div style={{color: 'white', display: 'flex', marginRight: '1rem', justifyContent: 'end', alignItems: 'center'}}>
            <input 
                type='checkbox'
                checked={showTranslation}
                onChange={handleToggleTranslation}
            />
            <label style={{marginLeft: '8px', display: 'flex', alignItems: 'center'}}>Toggle English Translation</label>
        </div>
            {cards.length > 0 ? (
                    <div className='cardContainer'>
                        <div key={cards[currentIndex]._id} className='cardInformation'>
                            <p>{cards[currentIndex].word}</p>
                            <p>{cards[currentIndex].example}</p>
                            {showTranslation && <p>{cards[currentIndex].translation}</p>}
                            {currentIndex >= 1 && <button onClick={handlePreviousClick}>Previous</button>}
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
            ) : (
                <p style={{color: 'red'}}>Error loading cards...</p>
            )}
        </div>
    );
};

export default CardReview;
