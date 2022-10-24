import SignUpForm from '../../components/signup/signup.component';
import SignInForm from '../../components/signin/signin.component';
import './sign-in.styles.scss'


const Authentication = () => {
    return (
        <div className='auth'>
            
            <SignInForm className='signin user'/>
            <SignUpForm className='signup user'/>
        </div>
    );
};

export default Authentication