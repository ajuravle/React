import React from 'react';

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
        <img src={props.img} alt={props.name} style={imgStyle}/>
        <h3>{props.name}</h3>
    </div>
}

export default Cocktail;