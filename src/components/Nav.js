import React, { Component } from 'react';
import NavItem from './NavItem';

const style = {
    display: 'flex',
    justifyContent: 'space-around'
};

class Nav extends Component {

    render() {
        return <div style={style}>
            <NavItem text="Alcoholic" link="a=Alcoholic" />
            <NavItem text="Non Alcoholic" link="a=Non_Alcoholic" />
            <NavItem text="Ordinary drink" link="c=Ordinary_Drink" />
            <NavItem text="Cocktail glass" link="g=Cocktail_glass" />
            <NavItem text="Champagne flute" link="g=Champagne_flute" />
        </div>
    }
}

export default Nav;