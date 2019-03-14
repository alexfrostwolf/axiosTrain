import React, { Component } from 'react';
export default class Button extends Component{
    constructor(props) {
        super(props)
        this.class=this.props.class
        this.text=this.props.text
        this.style=this.props.style
    }
    render() {
        return (
            <button className={this.class} style={this.style}>{this.text}</button>
        );
    }
}