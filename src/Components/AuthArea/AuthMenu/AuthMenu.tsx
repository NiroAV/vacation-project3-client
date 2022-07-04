import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel|null>(null);

    // Register 
    useEffect(() => {

    
        setUser(store.getState().authState.user);

       
        const unsubscribeMe = store.subscribe(() => {
            setUser(store.getState().authState.user);
        });

      
        return () => unsubscribeMe();

    }, []);

    return (
        <div className="AuthMenu">
            {user === null ?
                <>
                    <span>Hello Guest</span>
                    <span> | </span>
                    <NavLink className="auth-font"to="/login">Login</NavLink>
                    <span> | </span>
                    <NavLink className="auth-font" to="/register">Register</NavLink>
         
                </>
                :
                <>
                    <span>Hello, {user.firstName} {user.lastName}</span>
                    <span> | </span>
                    <NavLink className="auth-font" to="/logout">Logout</NavLink>
                </>
            }
        </div>
    );
}

export default AuthMenu;
