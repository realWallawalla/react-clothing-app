import React, {useState, useEffect} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.util';
import { auth } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }

    }

    const handleChange = event => {
        const { value, name } = event.target; //destructuring value and name from event.target which is the input value itself
        setCredentials({...userCredentials, [name]: value }) //name is variable. can be email or name or whatever from input.
    }

        return (
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        handleChange={handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>
                            {" "} Sign in with Google {" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

export default SignIn;
