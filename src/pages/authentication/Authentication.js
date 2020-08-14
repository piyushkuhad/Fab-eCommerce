import React from 'react';

import SignIn from '../../components/signIn/SignIn';
import './Authentication.scss';
import SignUp from '../../components/signUp/SignUp';

const Authentication = () => {
    return(
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication