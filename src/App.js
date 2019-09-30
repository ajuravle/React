import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';

class App extends Component {
    render() {
        return <>
            <Router>
                <Header />
                <Nav />
                <Route path="/cocktail" component={CocktailDetails} />
                <Route path="/list/:category" component={CocktailList} />
                <Route path="/list" component={CocktailList} />
                <Route exact path="/">
                    <Redirect to="/list" />
                </Route>
            </Router>
        </>;
    }
}

export default App;
