import { Link } from "react-router-dom";
import "../styles/header.css";
import Dropdown from "./ui/dropdown";

const Header = () => {
    return (
        <header>
            <a href="/" id="homeText">Algorithm Visualizer</a>
            <ul id="headerMenu">
                <li>
                    <Dropdown text="Algorithms">
                        <ul>
                            <Link to="/sorting/bubble"><li>Sorting</li></Link>
                        </ul>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown text="Data Structures">
                        <ul>
                            <li>Table</li>
                            <li>List</li>
                        </ul>
                    </Dropdown>
                </li>
            </ul>
        </header>
    )
}

export default Header;
