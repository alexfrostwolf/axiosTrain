import React, { Component } from 'react';

export default class Title extends Component {
    constructor(props) {
        super(props)
        this.font = this.props.font
        this.title = this.props.title
        this.class=this.props.class

    }


    render() {
        return (
            <div className="text-right row">
                <h2 
                className={this.class}                
                style={{ fontFamily: this.font }}>
                {this.title}
                </h2>
              
            </div>
        );
    }
}