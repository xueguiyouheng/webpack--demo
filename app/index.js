import React from 'react';
import ReactDOM from 'react-dom';
import Children from './src/home';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            start:'open'
        }
    }

    render () {
        const { start } = this.state;
        return <div>
            { start }
            <Children />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));