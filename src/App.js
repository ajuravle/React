import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Search from './components/Search';
import CocktailList from './components/CocktailList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentText: null };
  }

  setSearchText = (text) => this.setState({ currentText: text });

  render() {
    return <>
      <Header />
      <Nav />
      <Search searchText={this.setSearchText} />
      <CocktailList searchText={this.state.currentText}/>
    </>;
  }
}

export default App;
