import React from 'react'
import shoppingLogo from './Image/shop-logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <nav className="header">
            <img className="header_logo" src={shoppingLogo} alt="logo" />
            <div className="header_search">
                <input type="text" placeholder="Search on ShopEaZy" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Hello Debiprasad</span>
                        <span className="header_optionLine2">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Returns</span>
                        <span className="header_optionLine2">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLine1">Your</span>
                        <span className="header_optionLine2">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className="header_link">
                <div className="header_optionCart">
                    <ShoppingCartOutlinedIcon/>
                    <span className="header_cartCount">2</span>
                </div>
            </Link>    
        </nav>
    )
}

export default Header