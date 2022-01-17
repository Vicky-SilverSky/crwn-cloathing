import React from "react";

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth'
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";

const HeaderComponent = ({ currentUser, hidden }) => (
    <div className="header">
        <Link
            to={'/'}
            className="logo-container"
        >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link
                to={'/shop'}
                className="option"
            >
                SHOP
            </Link>
            <Link
                to={'/contact'}
                className="option"
            >
                CONTACT
            </Link>
            {
                currentUser
                ?
                    <div className="option" onClick={() => signOut(getAuth())}>
                        SIGN OUT
                    </div>
                :
                    <Link
                        to={'/signin'}
                        className="option"
                    >
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {
            hidden
            ?
                null
            :
                <CartDropDown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHidden
})

export default connect(mapStateToProps)(HeaderComponent)
