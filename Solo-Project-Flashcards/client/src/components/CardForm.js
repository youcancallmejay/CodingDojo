import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../App.css';


const CardForm = (props) => {
    
    const navigate = useNavigate();
   
    const [word, setWord] = useState('')
    const [example, setExample] = useState('')
    const [translation, setTranslation] = useState('')
    const [errorWord, setErrorWord] = useState('')
    const [errorExample, setErrorExample] = useState('')
    const [errorTranslation, setErrorTranslation] = useState('')


    const validateWord = (word) => {
        const thaiUniBlock = /^[\u0E00-\u0E7F]+$/;
        if (!word) return "An input is required";
        if (!thaiUniBlock.test(word)) return "Must use Thai alphabet";
        return "";

    }

    const validateExample = (example) => {
        if(!example) return "Must add an example";
        if(example.length > 120) return "Example be longer than 120 characters";
        return ""
    }

    const validateTranslation = (translation) => {
        if (!translation) return "Must add a translation"
        if(translation.length > 120) return "Translation cannot be longer than 120 characters"
        return ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        const wordError = validateWord(word);
        const exampleError = validateExample(example);
        const translationError = validateTranslation(translation)


        if(translationError){
            setErrorTranslation(translationError)
            valid = false; 
        } else {
            setErrorTranslation("")
        }

        if (wordError){
            setErrorWord(wordError)
            valid = false;
        } else {
            setErrorWord("")
        }

        if(exampleError){
            setErrorExample(exampleError);
            valid = false;
        } else {
            setErrorExample("")
        }

      
        if (valid) {
            axios.post('http://localhost:8000/api/cards', {
                word,
                example, 
                translation
            })
            .then(() => navigate('/cards'))
            .catch(err => console.error(err));
        }
    };

    return (
        <div>
            <Header title="Learn Thai" rightButtonLink="/" rightButtonText="Study" />
            <h1 style={{color: 'white', display: 'flex', margin: 'auto', justifyContent: 'center'}}>Add Card</h1>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        {errorWord && <div style={{color: 'red'}}>{errorWord}</div>}
                        <label>Consonant/Word</label>
                        <input 
                        type='text'
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        />
                    </div>

                    <div>
                        {errorExample && <div style={{color: 'red'}}>{errorExample}</div>}
                        <label>Example</label>
                        <input 
                        type="text"
                        value={example}
                        onChange={(e) => setExample(e.target.value)}
                        />
                    </div>

                    <div>
                        {errorTranslation && <div style={{color: 'red'}}>{errorTranslation}</div>}
                        <label>English Translation</label>
                        <input 
                        type='text'
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                        />
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default CardForm;