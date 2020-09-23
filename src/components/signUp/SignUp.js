import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './SignUp.scss';

//import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { signUpStart } from '../../redux/user/userActions';

const SignUp = ({ signUpStart }) => {
  // constructor() {
  //   super();

  // this.state = {
  //   displayName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // };
  // }

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    signUpStart({ displayName, email, password });

    //Commented to use sagas
    //No more setState. Redux will handle the state from here on out with sagas
    //try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //       this.setState({
    //         //this will clear our form on successful user creation
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //       });
    //     } catch (error) {
    //       console.error(error);
    //     }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // this.setState({
    //   [name]: value,
    // });
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
