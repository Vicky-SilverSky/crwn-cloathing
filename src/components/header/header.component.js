import React from "react";

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { getAuth, signOut } from 'firebase/auth'
import { connect } from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { cartHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer, LinkOption, LogoContainer, OptionsContainer } from "./header.styles";

const HeaderComponent = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer
            to={'/'}
        >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <LinkOption to={'/shop'}>SHOP</LinkOption>
            <LinkOption to={'/contact'}>CONTACT</LinkOption>
            {
                currentUser
                ?
                    <LinkOption to={'/'} onClick={() => signOut(getAuth())}>
                        SIGN OUT
                    </LinkOption>
                :
                    <LinkOption to={'/signin'}>
                        SIGN IN
                    </LinkOption>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden
            ?
                null
            :
                <CartDropDown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: cartHidden
})

export default connect(mapStateToProps)(HeaderComponent)
