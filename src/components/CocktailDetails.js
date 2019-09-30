import React from 'react';
import { Link } from 'react-router-dom'

const divStyle = {
    flex: '0 0 25%',
    textAlign: 'center'
}

const imgStyle = {
    width: '300px',
    height: '300px'
}

const CocktailDetails = (props) => {
    debugger
    return <div style={divStyle}>
        <img src={props.location.state.img} alt={props.location.state.name} style={imgStyle} />
        <h1>{props.location.state.name}</h1>
        <button>
            <Link to="/">Back</Link>
        </button>
    </div>
}

export default CocktailDetails;