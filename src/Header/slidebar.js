import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Axios from 'axios';


export default class SlideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            liaraitem: []
        }



    }


    async componentDidMount() {
        try {

            const result = await Axios.get('https://newsapi.org/v2/everything?sources=fox-sports&apiKey=09be89f62f014f97b0c57af904e91117')
            this.setState({ liaraitem: result.data.articles }, () => console.log(this.state.liaraitem))

        } catch (error) {
            alert("اتصال به سرور برقرار نیست")

        }

    }


    render() {




        return (


            <div >
                <Carousel>
                    {this.state.liaraitem.map(pro =>
                        <Carousel.Item style={{height:"550px"}} key={Math.random()}>
                            <img className="d-block w-100 h-100 " src={pro.urlToImage} alt="First slide" />
                            <Carousel.Caption className="image-title">
                                <h3 >{pro.title}</h3>
                                <p >{pro.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>

        );
    }
}