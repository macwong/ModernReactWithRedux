import React from 'react'
import ReactDOM from 'react-dom'

// Create a new component that produces html
const App = () => {
    return <div>Hi!</div>;
}

// Add to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));