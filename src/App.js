import React, { Component } from 'react';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import './App.css';
import Calendar from './Components/CalendarComponent';


class App extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="App">
                <Header />
                <Calendar />
                <Footer />
            </div>
            </React.Fragment>
        );
    }
}

export default App;
