import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.state = {
            count: 0
        };
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        })
        // console.log(this.state.count);
    }

    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton addOne={this.addOne} />
            </div>
        );
    }
}
