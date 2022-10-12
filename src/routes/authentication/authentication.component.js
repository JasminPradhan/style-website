

import SignUpForm from '../../components/signup/signup.component';
import SignInForm from '../../components/signin/signin.component';
import './sign-in.styles.scss'


const Authentication = () => {


    
    
    // Google Popup Login
    // const logGoogleUser = async (e) => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocFromAuth(user);
    // };
    
    // Google Redirect Login

    
    return (
        <div className='auth'>
            
            <SignInForm className='signin user'/>
            <SignUpForm className='signup user'/>
        </div>
    );
};

export default Authentication