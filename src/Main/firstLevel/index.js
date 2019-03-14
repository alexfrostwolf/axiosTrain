import React, { Component } from 'react';
import Title from '../../Header/Title';
import UnevenSetsInfinit from './slideBar';

export default class FirstLevel extends Component {
    render() {
        return (
            <div>
                <div className="container border-bottom border-dark mt-3">
                    <Title
                        font={"Iranian Sans Regular" }
                        title={" لیست محصولات پرفروش"}
                        class={"h3"}
                    />

                    <UnevenSetsInfinit/>
                </div>
            </div>
        );
    }
}