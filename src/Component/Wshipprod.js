import './Checkout.css'
import Star from "@material-ui/icons/Star"
import { useDispatch } from "react-redux"
import assure from "../imgs/assured.png"
export default function Checkout({ id, prdName, img, price, review }) {
    let dispatch = useDispatch();
    return (

        <div className="stdiv">
            {/* <div><img className="add" src={add} />
            </div> */}
            <div className="checkout">
                <div className="checkout__img">
                    <img className="img1" src={img} alt="img12" />
                </div>
                <div className="section2">
                    <span><strong>{prdName}</strong></span>
                    <div className="checkout__star">
                        <span className="checkout__review"><strong>{review} </strong></span><Star className="star" />
                        <span className="checkout__items">(1524)</span>
                        <span className="fassured"><img src={assure} alt="img22" /></span>


                    </div>
                    <div className="checkout__price">
                        <span><strong>{price}</strong> <del>₹3,399</del>    <b>55% off</b></span>
                        <span className="fassured"><img src={assure} alt="img23" /></span>
                    </div>
                    <span className="checkout_cart"><button className='prd4_btn' onClick={() => dispatch({ type: "REMOVE_FROM_WISH", id: id })} >Remove from Wish</button></span>
                </div>
            </div>





        </div>

    )
}