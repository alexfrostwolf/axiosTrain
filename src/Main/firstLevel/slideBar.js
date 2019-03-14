import React, { Component } from 'react';
import Axios from 'axios';
import Slider from "react-slick";
import {BrowserRouter,Route,Link} from "react-router-dom"


export default class MultipleItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mostSold: []
        }
    }

    async componentDidMount() {
        try {
            const result = await Axios.get('https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=09be89f62f014f97b0c57af904e91117')
            this.setState({ mostSold: result.data.articles }, () => console.log(this.state.mostSold))

        } catch (error) {
            console.log(error)
        }


    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };

        return (
            <div className="container">
                <Slider {...settings}>
                    {
                        this.state.mostSold.map(sold =>
                            <div className="DIS d-flex flex-column justify-content-between border " key={Math.random()}>
                                <div>
                                    <div style={{ background: `url(${sold.urlToImage})` ,height:"10px",width:"310px",margin:'0 auto' ,  opacity: ".4" }}> </div>
                                    <div style={{ background: `url(${sold.urlToImage})` ,height:"10px",width:"320px",margin:'0 auto' , opacity: ".6" }}> </div>
                                    <img  className="image-slide-bar img-thumbnail p-0 rounded-0" src={sold.urlToImage} />



                                    <h5>{sold.title}</h5>
                                    <p>{sold.content}</p>
                                    <a href={sold.url} target="_blank" rel="noopener noreferrer">More infomation</a>
                                </div>
                                <div className="d-flex justify-content-between" >
                                    <div>Author:
                                    <div>{sold.author}</div></div>
                                    <div>Publish Time:
                                    <div>{sold.publishedAt}</div></div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        );
    }
}








