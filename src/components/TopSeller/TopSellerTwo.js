import React, { Component } from 'react';
import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/seller";

const data = {

    preHeading: "Creative Artist",
    heading: "Top Sellers"
     
}

const sellerData = [
    {
      id: 1,
      img: "/img/avatar_1.jpg",
      seller: "@Richard",
      price: "1.5 BNB"
    },
    {
      id: 2,
      img: "/img/avatar_2.jpg",
      seller: "@JohnDeo",
      price: "2.3 BNB"
    },
    {
      id: 3,
      img: "/img/avatar_3.jpg",
      seller: "@Junaid",
      price: "2.5 BNB"
    },
    {
      id: 4,
      img: "/img/avatar_4.jpg",
      seller: "@Yasmin",
      price: "1.9 BNB"
    },
    {
      id: 5,
      img: "/img/avatar_5.jpg",
      seller: "@ArhamH",
      price: "3.2 BNB"
    },
    {
      id: 6,
      img: "/img/avatar_6.jpg",
      seller: "@Sara",
      price: "4.7 BNB"
    }
  ]

class TopSeller extends Component {
    state = {
        data: {},
        sellerData: []
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             sellerData: res.data.sellerData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
        this.setState({
            data: data,
            sellerData: sellerData
        })
    }
    render() {
        return (
            <section className="top-seller-area pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" >View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.sellerData.map((item, idx) => {
                            return (
                                <div key={`ts_${idx}`} className="col-12 col-sm-6 col-lg-4 item">
                                    {/* Single Seller */}
                                    <div className="card no-hover">
                                        <div className="single-seller d-flex align-items-center">
                                            <a >
                                                <img className="avatar-md rounded-circle" src={item.img} alt="" />
                                            </a>
                                            {/* Seller Info */}
                                            <div className="seller-info ml-3">
                                                <a className="seller mb-2" >{item.seller}</a>
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default TopSeller;