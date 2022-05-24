import { NavLink } from 'react-router-dom'
import './MainHeader.css'

function MainHeader() {
    return (
        <header>
            <ul>
                <li><NavLink to="/welcome">Welcome</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </header>
    );
}

export default MainHeader;