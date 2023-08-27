import {NavLink,Outlet} from "react-router-dom"
import "./layout.css"

export default function() {
    return (
        <>
            <header>
                <h1>Srinvas M</h1>
                <nav>
                    <NavLink className="nav-item" to="/">Home</NavLink>
                    <NavLink className="nav-item" to="/about">About</NavLink>
                    <NavLink className="nav-item" to="/skill">Skill</NavLink>
                    <NavLink className="nav-item" to="/mywork">My Works</NavLink>
                    <NavLink className="nav-item" to="/contact">Contact</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
}