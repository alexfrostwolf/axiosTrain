import React, { Component } from 'react';


export default class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.width = this.props.width
        this.class=this.props.class
        this.placeholder=this.props.placeholder
    }

    render() {
        return (
            <input
                className={this.class}
                style={{ width: this.width }}
                placeholder={this.placeholder}
            />
        );
    }
}