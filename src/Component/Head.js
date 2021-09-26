import "./Head.css"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserIcon from '@material-ui/icons/AddAlertRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'
import OrderIcon from '@material-ui/icons/CallToActionRounded'
import HeartIcon from '@material-ui/icons/FavoriteBorderRounded'
import RewardIcon from '@material-ui/icons/PaymentRounded'
import GiftIcon from '@material-ui/icons/Redeem'

import NotifyIcon from '@material-ui/icons/NotificationsRounded'
import SellIcon from '@material-ui/icons/BusinessCenterRounded'
import HelpIcon from '@material-ui/icons/LiveHelpRounded'
import AdvertiseIcon from '@material-ui/icons/TrendingUpRounded'
import DownloadIcon from '@material-ui/icons/GetAppRounded'
import Close from '@material-ui/icons/Close'
import { useSelector } from "react-redux"
import Logo from "../imgs/title_image.png"
import ShoppingCart from '@material-ui/icons/ShoppingCart'
// import Login from "../imgs/login.png"
export default function Home() {

    let [dropdown1, setDropdown1] = useState(false)
    let [dropdown2, setDropdown2] = useState(false)
    let [login, setLogin] = useState(false)
    let basket = useSelector(state => state.basket);
    let wish = useSelector(state => state.wish)
    return (
        <div className="Header">

            <div className="Header_main">

                <div className="Header_sec1">
                    <div className="Head_logo">
                        <Link to="/"><img className='header__logo' src={Logo} alt="img14" /></Link>
                        <p className="Explore"><small>Explore All</small></p>

                    </div>


                </div>


                <div className="Header_sec2">
                    <input type='text' placeholder="Search for Gadgets, Cloths, Electronic devices & Groceries etc" />

                </div>
                <div className="Header_sec3">
                    <div className="sec3">
                        <p className='header__option2 login' onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)} onClick={() => setLogin(true)}>Log in </p>

                    </div>
                    <div className="sec3">
                        <p className='header__option2' onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)} >More</p>

                    </div>
                    <div className="header__cart">
                        <div className="header__carticon">
                            <ShoppingCart style={{ fontSize: 30 }}></ShoppingCart>
                        </div>
                        <div classname="cartflex">
                            <Link to="/cart"><span className="colorcart"><small>{basket.length} Cart</small></span></Link>
                        </div>
                    </div>




                </div>

            </div>
            <div className={dropdown1 ? "drop_down1_on" : "drop_down1_off"} onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)}>
                <div className="drop_down1">
                    <div className="drop_down1_header">
                        <span>New Customer?</span>
                        <span onClick={() => setLogin(true)}>SIGN UP</span>
                    </div>
                    <div className="drop_down1_body">
                        <ul>
                            <li><UserIcon className="dropdown1_icon" /> My Profile</li>
                            <li><PlusIcon className="dropdown1_icon" />Flipkart Plus Zone</li>
                            <li><OrderIcon className="dropdown1_icon" />Orders</li>
                            <Link to="/wishlist"><li><HeartIcon className="dropdown1_icon" />Wishlist{wish.length}</li></Link>
                            <li><RewardIcon className="dropdown1_icon" />Rewards</li>
                            <li><GiftIcon className="dropdown1_icon" />Gift Cards</li>
                        </ul>
                    </div>
                    <div className="dropdown1_triangle">

                    </div>
                </div>

            </div>

            <div className={dropdown2 ? "drop_down2_on" : "drop_down2_off"} onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}>
                <div className="drop_down2">
                    <div className="drop_down2_body">
                        <ul>
                            <li><NotifyIcon className="dropdown2_icon" /> Notification Prefences</li>
                            <li><SellIcon className="dropdown2_icon" /> Sell On Flipkart</li>
                            <li><HelpIcon className="dropdown2_icon" /> 24X7 customer care</li>
                            <li><AdvertiseIcon className="dropdown2_icon" /> Advertise</li>
                            <li><DownloadIcon className="dropdown2_icon" /> Download App</li>
                        </ul>
                    </div>
                    <div className="drop_down2_triangle">

                    </div>
                </div>

            </div>

            {/**log in form  */}

            <div className={login ? "login_form_on" : "login_form_off"}>
                <div className="login_main">

                    <div className="login_home">
                        <Close className="login_close" onClick={() => setLogin(false)} />
                        <div className="login_part1">
                            <div className="login_part1_info">
                                <p>Login</p>
                                <span>Get Access to Your order, wishlist and recommendation</span>
                            </div>
                            <div className="login_part1_pic">
                                <img src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"} alt="img1" />
                            </div>
                        </div>
                        <div className="login_part2">
                            <div className="login_credentials">
                                <input type="email" placeholder="Enter Email" />
                            </div>
                            <div className="login_credentials">
                                <input type="password" placeholder="Enter Email" />
                                <span className="forgot">forgot?</span>
                            </div>
                            <p>By continuing, you agree to Flipkart <span className="color_blue">terms of use</span> and <span className="color_blue">privacy policy</span></p>
                            <button className="login_button"> Log in </button>
                            <div className="login_or">
                                <span>or</span>
                                <p className="color_blue">New to Flipkart? Create New Account</p>
                            </div>
                            <button className="createacc_button">Create New Account</button>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}