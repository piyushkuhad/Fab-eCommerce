import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/ok.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

const Header = ({ currentUser, hidden }) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}>
                        SIGN OUT
                    </div>: 
                    <Link className="option" to="/auth">LOG IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? 
                null :
                <CartDropdown />
            }
        </div>
    )
}

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);