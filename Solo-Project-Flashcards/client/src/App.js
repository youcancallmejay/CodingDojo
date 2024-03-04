// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import CardReview from './components/CardReview';
import CardEdit from './components/CardEdit';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<><CardReview /></>} /> 
                    <Route path="/cards" element={<CardList />} />
                    <Route path="/edit/:id" element={<CardEdit />} />
                    <Route path="/addcard" element={<CardForm />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
