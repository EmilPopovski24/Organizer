import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {

    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li"><Link to="/login">Login</Link></li>
                <li className="navbar-li"><Link to="/register">Register</Link></li>
                <li className="navbar-li"><Link to="/logout">Logout</Link></li>
                <li className="navbar-li"><Link to="/tasks">My Tasks</Link></li>
                <li className="navbar-li"><Link to="/new-task">Add New Task</Link></li>
                {/* <li className="navbar-li"><Link to="/profile">My Profile</Link></li> */}
                <li className="navbar-li"><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
};