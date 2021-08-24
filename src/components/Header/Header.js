import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlagIcon from '@material-ui/icons/Flag';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';


export default class Header extends React.Component {
    // This is the class constructor where we defined the component's state
    constructor(props) {
        super(props);
        // This is the component's state
        this.state = {
            // apiResult will eventually contain the result from the call we make with fetch
            Result: {},
            id: "",
            address: "",
            username: "",
            mainURL: ""
        }
    }

    componentDidMount() {

        let url = "https://ushop-gcp.uc.r.appspot.com/api/search/";
        axios.get(url + "amazon")
            .then(response => {
                console.log(response.data.id)
                console.log(response.data.username)
                console.log(response.data.address)
                console.log(response.data.mainImgUrl)
                console.log(response.data.results)

                this.setState({
                    id: response.data.id,
                    username: response.data.username,
                    address: response.data.address,
                    mainURL: response.data.mainImgUrl,
                    Result: response.data.results
                })


            })

            .catch(error => {

                console.log(error)

            })

    }

    render() {
        return (
            <div className="header">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

                <div className="header__optionLocation">
                    <LocationOnIcon fontSize="small" />
                </div>
                <div className="header__option_l">

                    <span className="header__optionLineOne">Enviar a</span>
                    <span className="header__optionLineTwo">{this.state.address}</span>
                </div>

                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>

                <div className="header__nav">

                    <div className="header__optionFlag">
                        <FlagIcon />
                    </div>

                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {this.state.username}</span>
                        <span className="header__optionLineTwo">Account and Lists </span>
                    </div>



                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>






                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            0
                        </span>
                    </div>

                </div>
            </div>
        );
    }
}
