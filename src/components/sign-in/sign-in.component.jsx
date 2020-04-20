import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
    }

    handleChange = event => {
        const { value, name } = event.target; //destructuring value and name from event.target which is the input value itself
        this.setState({ [name]: value }) //name is variable. can be email or name or whatever from input.
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="Password"
                        required />

                    <input type="submit" value="submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn;
