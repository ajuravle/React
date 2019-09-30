import React, { Component } from 'react';
import Cocktail from './Cocktail';
import axios from 'axios'

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '30px'
}

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

class CocktailList extends Component {

    constructor(props) {
        super(props);

        this.state = { list: [] };
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(res => {
                this.setState({ list: res.data.drinks });
            })
    }

    render() {
        return <div style={style}>
            {this.state.list
                .filter(co => !this.props.searchText || co.strDrink.indexOf(this.props.searchText) != -1)
                .map((co) => <Cocktail key={co.idDrink}
                    name={co.strDrink}
                    img={co.strDrinkThumb} />
                )}
        </div>
    }
}

export default CocktailList;