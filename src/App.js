import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';

class App extends Component {
    render() {
        return <>
            <Router>
                <Header />
                <Nav />
                <Route exact path="/" component={CocktailList} />
                <Route exact path="/:category" component={CocktailList} />
            </Router>
        </>;
    }
}

export default App;
