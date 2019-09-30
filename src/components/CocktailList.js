import React, { Component } from 'react';
import Cocktail from './Cocktail';
import Search from './Search';
import axios from 'axios'

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '30px'
}

const ALL_COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

class CocktailList extends Component {

    constructor(props) {
        super(props);
        this.state = { list: [], currentText: null };
    }

    componentDidMount() {
        this.getCocktails();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.getCocktails();
        }
    }

    setSearchText = (text) => this.setState({ currentText: text });

    render() {
        return <>
            <Search searchText={this.setSearchText} />
            <div style={style}>
                {this.state.list
                    .filter(co => !this.state.currentText || co.strDrink.indexOf(this.state.currentText) !== -1)
                    .map((co) => <Cocktail key={co.idDrink}
                        name={co.strDrink}
                        img={co.strDrinkThumb} />
                    )}
            </div>
        </>
    }

    getCocktails() {
        const url = this.props.match.params.category ? `${API_URL}${this.props.match.params.category}` : ALL_COCKTAILS_URL;
        axios.get(url)
            .then(res => {
                this.setState({ list: res.data.drinks });
            })
    }
}

export default CocktailList;