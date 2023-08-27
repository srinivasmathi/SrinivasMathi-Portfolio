import {NavLink,Outlet} from "react-router-dom"
import { useEffect,useState } from "react";
import { ColorRing } from "react-loader-spinner";
import "./layout.css"

export default function() {

    const [isLoading, setLoading ] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000)

    },[isLoading])

    return (
        <>
            <header>
                <h1>Srinvas M</h1>
                <nav>
                    <NavLink className="nav-item" to="/" onClick={() => setLoading(true)}>Home</NavLink>
                    <NavLink className="nav-item" to="/about" onClick={() => setLoading(true)}>About</NavLink>
                    <NavLink className="nav-item" to="/skill" onClick={() => setLoading(true)}>Skill</NavLink>
                    <NavLink className="nav-item" to="/mywork" onClick={() => setLoading(true)}>My Works</NavLink>
                    <NavLink className="nav-item" to="/contact" onClick={() => setLoading(true)}>Contact</NavLink>
                </nav>
            </header>
            {
                isLoading ? <div className="loader"><ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            /></div>: <Outlet />
            }
        </>
    );
}