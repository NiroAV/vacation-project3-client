import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <AuthMenu />
            <Navbar />
        </div>
    );
}


export default Header;
