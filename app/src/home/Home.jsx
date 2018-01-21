import React from 'react';
import './home.less';
export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            children:'children',
        }
    }

    render () {
        const { children } = this.state;

        return <div className="home">
            { children }
        </div>
    }
}