import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../App.css';

const CardEdit = () => {
   
    const [word, setWord] = useState('')
    const [example, setExample] = useState('')
    const [translation, setTranslation] = useState('')

    const [errorWord, setErrorWord] = useState('')
    const [errorExample, setErrorExample] = useState('')
    const [errorTranslation, setErrorTranslation] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cards/${id}`)
            .then(res => {
               

                setWord(res.data.word);
                setExample(res.data.example);
                setTranslation(res.data.translation);
            })
            .catch(err => console.error(err));
    }, [id]);


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
            axios.put(`http://localhost:8000/api/cards/${id}`, {
                word,
                example,
                translation
            })
            .then(() => navigate('/cards'))
            .catch(err => console.error(err));
        }
    };

    return (
        <div >
            <Header title="Learn Thai" rightButtonLink={`/`} rightButtonText="Study" />
            <h1 style={{color: 'white', display: 'flex', margin: 'auto', justifyContent: 'center'}}>Edit Card</h1>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>


                    <div>
                       {errorWord && <div style={{color: 'red'}}>{errorWord}</div>}
                        <label>Word</label>
                        <input 
                        type='text'
                        value={word}
                        onChange={(e) => setWord(e.target.value)}/>
                    </div>

                    <div>
                        {errorExample && <div style={{color: 'red'}}>{errorExample}</div>}
                        <label>Example</label>
                        <input 
                        type='text'
                        value={example}
                        onChange={(e) => setExample(e.target.value)}/>
                    </div>

                    <div>
                        {errorTranslation && <div style={{color: 'red'}}>{errorTranslation}</div>}
                        <label>Translation</label>
                        <input
                        type='text'
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)} />
                    </div>
                    
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default CardEdit;
