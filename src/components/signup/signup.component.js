import { useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './signup.style.scss'

const formDefaultFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [fields, setFields] = useState(formDefaultFields);
    const { displayName, email, password, confirmPassword } = fields;


    const formHandler = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const reset = ()=>{
            setFields(formDefaultFields);
        }
        if (password != confirmPassword) {
            alert("Passwords dont match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocFromAuth(user, {displayName});

            reset();
        } catch (error) {
            if(error.code==='auth/email-already-in-use')
            {
                alert('Email already exists');
            }
            else
            console.log("user creation returns error", error);
        }
    }

    return (
        <div className='sign-up'>

            <h2>Don't have an account ?</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={submitHandler}>

                <FormInput
                    label='Name'
                    type="text"
                    required onChange={formHandler}
                    name='displayName'
                    value={displayName}
                />

                <FormInput
                    label='Email'
                    type="email"
                    required onChange={formHandler}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={formHandler}
                    name='password'
                    value={password}
                />

                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    onChange={formHandler}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type="submit" props='Sign up'/>
            </form>
        </div>
    )
}

export default SignUpForm