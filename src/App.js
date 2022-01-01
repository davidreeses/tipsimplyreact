import React, { Component } from 'react';
import Header from './Components/HeaderComponent';
import './App.css';

import Calendar from './Components/CalendarComponent';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Calendar />
            </div>
        );
    }
}

export default App;
