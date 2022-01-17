import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { createUserDocument } from '../../utils/firebase.utils'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confPassword: '',
            displayName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { email, confPassword, displayName, password } = this.state

        if (password !== confPassword) {
            alert(`Passwords doesn't match`)
            return
        }

        const createUserRes = await createUserWithEmailAndPassword(getAuth(), email, password)
        console.log(createUserRes)

        await createUserDocument({
            email,
            displayName,
            createdAt: new Date()
        })
        alert('Signup Success')

        this.setState({
            email: '',
            password: '',
            confPassword: '',
            displayName: ''
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
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    value={this.state.displayName}
                    handleChange={this.handleChange}
                />
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
                <FormInput
                    type="password"
                    name="confPassword"
                    label="Confirm Password"
                    value={this.state.confPassword}
                    handleChange={this.handleChange}
                />
                <div className="buttons">
                    <CustomButton
                        type='submit'
                    >
                        {"SIGN UP"}
                    </CustomButton>
                </div>
            </form>
          </div>  
        )
    }
}

export default SignUp
