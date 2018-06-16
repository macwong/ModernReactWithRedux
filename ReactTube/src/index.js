import React from 'react';
import ReactDOM from 'react-dom';
import { Globals } from './helpers/globals';

import SearchBar from './components/search_bar';

// Create a new component that produces html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Add to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));