import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import "./Navbar.css";

function Navbar(): JSX.Element {
    
    const navigate = useNavigate()
    const role = store.getState().authState.user?.role

    const handleVacations = () => {
        const token = localStorage.getItem("token");
        console.log(token)
        if(token){
            navigate("/vacations");
        }
        else{
            navigate("/login");
        }
    }
    
    return (
        <div className="Navbar">
            <nav className="nav-bar">
            <button onClick={handleVacations}><h2 className="vacations-head-font">Vacations</h2></button>
            <NavLink className="home-head-font"to="/home">Home</NavLink>
            {(role === 'Admin') ? <NavLink to={'/graphs'} className="graph-head">Graphs</NavLink> : <></>}
            {(role === 'Admin' ) ? <NavLink to={'/vacations/new'} className="add-vacation-head">Add vacation</NavLink> : <></>}
            </nav>
        </div>
    );
}

export default Navbar;
