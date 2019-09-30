import React, { Component } from 'react';
import NavItem from './NavItem';

const style = {
    display: 'flex',
    justifyContent: 'space-around'
};

class Nav extends Component {

    render() {
        return <div style={style}>
            <NavItem text="Alcoholic" />
            <NavItem text="Non Alcoholic" />
            <NavItem text="Ordinary drink" />
            <NavItem text="Cocktail glass" />
            <NavItem text="Champagne flute" />
        </div>
    }
}

export default Nav;