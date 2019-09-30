import React, { Component } from 'react';

const style = {
    textAlign: 'center'
};

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = { text: null };
    }

    handleInputChange = (event) => {
        if (!event.target.value) {
            this.props.searchText(null);
        }

        this.setState({ text: event.target.value });
    }

    updateParrent = () => {
        this.props.searchText(this.state.text);
    }

    render() {
        return <div style={style}>
            <input onChange={this.handleInputChange}/>
            <button onClick={this.updateParrent}>Search</button>
        </div>
    }
}

export default Search;