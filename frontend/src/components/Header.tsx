import {Link} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="header">

            <p></p>
            <Link to="/">
                Home
            </Link>
            <Link to="/todo">
                All ToDos
            </Link>
            <Link to="/add">
                Add ToDo
            </Link>

        </div>
    );
}

export default Header;