import React from 'react';
import { Link } from "react-router-dom";

const divStyle = {
    flex: '0 0 25%',
    textAlign: 'center'
}

const imgStyle = {
    width: '100px',
    height: '100px'
}

const Cocktail = (props) => {

    return <div style={divStyle}>
        <Link to={{
            pathname: '/cocktail',
            state: props
        }}>
            <img src={props.img} alt={props.name} style={imgStyle} />
            <h3>{props.name}</h3>
        </Link>
    </div>

}

export default Cocktail;