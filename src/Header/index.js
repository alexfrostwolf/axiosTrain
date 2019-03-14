import React, { Component } from 'react';
import Title from './Title';
import SearchInput from './Search_input';
import Button from './Button';
import SlideBar from './slidebar';


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }





    render() {


        return (
            <div>

                <div className="container mt-3 align-items-center justify-content-between d-flex " style={{ direction: "rtl" }}>
                    <div className="align-items-center justify-content-between d-flex col-4">
                        <Title
                            font={"IranNastaliq Regular"}
                            title={"لیارا شاپ"}
                            class={""}

                        />
                        <SearchInput
                            width={"200px"}
                            class={"d-flex "}
                            placeholder={"جستوجو"}

                        />
                    </div>
                    <div className=" col-4">
                        <div className="align-items-center  d-flex ">
                            <Button class={"btn btn-success mx-3 px-4"} text={"خرید اشتراک"} />
                            <Button class={"btn btn-info  mx-3 px-4"} text={"اتصال"} />


                        </div>
                    </div>
                </div>
                <div className="col-12 h-25">
                    <SlideBar
                        
                        data={this.state.liaraitem}
                    />
                </div>
            </div>
        )
    }

}