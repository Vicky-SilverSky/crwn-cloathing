import React from "react";
import { googleSignin } from "../../utils/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { email, password } = this.state

        const signInRes = await signInWithEmailAndPassword(getAuth(), email, password)

        if (signInRes.user.uid) {
            alert('Sign-in success.')
        }

        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    render() {
        return (
          <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                />
                <div className="buttons">
                    <CustomButton
                        type='submit'
                    >
                        {"SIGN IN"}
                    </CustomButton>
                    <CustomButton
                        type='button'
                        isGoogleSignin
                        onClick={googleSignin}
                    >
                        {"Signin With Google"}
                    </CustomButton>
                </div>
            </form>
          </div>  
        )
    }
}

export default SignIn
