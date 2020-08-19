import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/ok.svg';

const Header = ({currentUser}) => {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);