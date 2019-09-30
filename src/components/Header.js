import React from 'react';
import { Link } from "react-router-dom";

const style = {
    textAlign: 'center'
};

const Header = () => {
    return <h2 style={style}>
        <Link to='/'>Cocktails</Link>
    </h2>
}

export default Header;