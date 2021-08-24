import React from "react";
import "./Home.css";
import Product from "../Product/Product";
//import { Component } from "react";
import Header from "../Header/Header";


class Home extends Header {

    constructor(props) {
        super(props);
        // This is the component's state
        this.state = {
            // apiResult will eventually contain the result from the call we make with fetch
            Result: [],
            id: [],
            address: "",
            username: "",
            mainURL: ""
        }
    }

    render() {
        
        return (
            
            <div className="home">
                <div className="home__container">
                    <img
                        className="home__image"
                        src={this.state.mainURL}
                        alt=""
                    />
                  
                    <div className="home__row">
                    {this.state.Result.map((result, i)=> (
                        <Product key = {i}
                            title={result.title}
                            price={result.priceRange}
                            rating={5}
                            image= {result.imgUrl}
                        /> )
                        )}
                    </div>

                </div>
            </div>
                   
        );
    }
}

export default Home;