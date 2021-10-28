import React, { Component } from 'react';
// import * as d3 from 'd3';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: null,
        };
    }

    componentDidMount() {
        this.getGreeting();
    }

    getGreeting() {
        this.setState({ greeting: "Hello World" });
    }

    render() {
        return (
            <div className="Greeting">
                { this.state.greeting }
            </div>
        );
    }
}

export default App;
