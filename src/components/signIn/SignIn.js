import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignIn.scss';

//import { auth, signInWithGoogle } from '../../firebase/firebase';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userActions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }

  const [usercredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = usercredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);

    //No more setState. Redux will handle the state from here on out with sagas
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...usercredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            //onClick={signInWithGoogle}
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
