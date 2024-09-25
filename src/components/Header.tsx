import { Link } from "react-router-dom";
import Dropdown from "./ui/dropdown";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header>
            <a href="/" id="homeText">Algorithm Visualizer</a>
            <ul id="headerMenu" className="md-flex">
                <li>
                    <Dropdown text="Algorithms">
                        <ul>
                            <Link to="/sorting/bubble"><li>Sorting</li></Link>
                        </ul>
                    </Dropdown>
                </li>
                {/* <li>
                    <Dropdown text="Data Structures">
                        <ul>
                            <li>Table</li>
                            <li>List</li>
                        </ul>
                    </Dropdown>
                </li> */}
            </ul>
            <MobileNav className="sm-block"/>
        </header>
    )
}

export default Header;
