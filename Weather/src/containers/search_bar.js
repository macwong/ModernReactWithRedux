import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };

        this.onInputChanged = this.onInputChanged.bind(this);
    }

    onInputChanged(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log("Submit");
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get 5 day forecast per city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChanged}    
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}