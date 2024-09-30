import { Link } from "react-router-dom";
import Dropdown from "./ui/dropdown";
import MobileNav from "./MobileNav";
import {DS} from "../algorithms/data-structures/config";

const Header = () => {
    return (
        <header>
            <a href="/" id="homeText">Algorithm Visualizer</a>
            <ul id="headerMenu" className="md-flex">
                <li>
                    <Dropdown text="Algorithms">
                        <ul>
                            <li><Link to="/sorting/bubble">Sorting</Link></li>
                        </ul>
                    </Dropdown>
                </li>
                 <li>
                    <Dropdown text="Data Structures">
                        <ul>
                            {DS.map((elem, index) => (
                                <Link key={elem + index.toString()} to={`/ds/${elem.toLowerCase()}`}><li >{elem}</li></Link>
                            ))}
                        </ul>
                    </Dropdown>
                </li>
            </ul>
            <MobileNav className="sm-block"/>
        </header>
    )
}

export default Header;
