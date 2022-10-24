import { useState,useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './signin.style.scss'

const formDefaultFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [fields, setFields] = useState(formDefaultFields);
    const { email, password,} = fields;

    const formHandler = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value })
    }


    useEffect(() => {
        const data = async()=>{
            const response = await getRedirectResult(auth);

            if(response){
                await createUserDocFromAuth(response.user);
            }
        }
        data();
    }, []);


    const submitHandler = async (e) => {
        e.preventDefault();

        const reset = ()=>{
            setFields(formDefaultFields);
        }

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);

            

            reset();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Wrong Password...Try again later or click on Forgot Password to reset password");
                    break;

                case 'auth/user-not-found':
                alert("User not found..SignUp or Sign in with google");
                break;

                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className='sign-in'>

            <h2>Already have an account ?</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={submitHandler}>

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
                <div className='btns'>
                <Button type="submit" props='Sign in' />
                <Button type='button' btnType='google' props='sign in with google' onClick={signInWithGoogleRedirect}></Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm