import React, { useState }  from 'react'
import './App.css'
import Header from './components/Header/Header';
import Transaction from './components/Transaction/Transaction';
import ToggleMode from './components/ToggleMode/ToggleMode';
import ContextHandler from './context/Context';

const App = () => {
    const [theme, setTheme] = useState("#f7f7f7");
    document.body.style.backgroundColor = theme;

    return (
        <ContextHandler>
            <ToggleMode theme={theme} setTheme={setTheme}/>
            <div className='container' style={theme==="#f7f7f7" ? {color:"#15202b"} : {color:"#f7f7f7"}}>
                <Header />
                <Transaction />
            </div> 
        </ContextHandler>
    )
}

export default App


