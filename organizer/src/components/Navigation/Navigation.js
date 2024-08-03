import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {

    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li"><Link to="/login">Login</Link></li>
                <li className="navbar-li"><Link to="/register">Register</Link></li>
                <li className="navbar-li"><Link to="/logout">Logout</Link></li>
                <li className="navbar-li"><Link to="/tasks">My Tasks</Link></li>
            </ul>
        </div>
    )
};