import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Transaction from './components/Transaction/Transaction';
import ContextHandler from './context/Context'

/// fasdfsadfsaddf
const App = () => {
    return (
        <ContextHandler>
            <div className='container'>
                <Header />
                <Transaction />
            </div> 
        </ContextHandler>
    )
}

export default App


