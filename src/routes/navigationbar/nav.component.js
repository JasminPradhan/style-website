import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import logo from "../../components/images/logo.png";
import "./nav.component.scss";

const Navbar = () => {

    const {currentUser,setCurrentUser}= useContext(UserContext);
    
    const signOutHandler = async()=>{
        await signOutUser();
        setCurrentUser(null);
    }

    return (
    <div>
        <nav className="nav">
            <Link className="logo" to='/'>
                <img src={logo} />
            </Link>
            <div className="links">
                <Link className="li" to='/shop'>Shop</Link>
                {
                    currentUser?
                    (<Link className="li" to='/auth'>Sign out</Link>)
                    :
                    (<Link className="li" to='/auth'>Sign in</Link>)
                }
                <span className="li" onClick={signOutHandler}>user</span>
            </div>
        </nav>
        <Outlet />
    </div>
    );
};
export default Navbar;