import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={ this.onInputChange } />;
    }

    onInputChange(evt) {
        console.log(evt.target.value);
    }
}

export default SearchBar;