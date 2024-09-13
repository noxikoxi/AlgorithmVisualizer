import { Link } from "react-router-dom";
import "../styles/topnav.css";

type Props = {
    links: string[];
    text: string[];
}

const TopNav = ({links, text} : Props) => {
    return (
        <div id="topNav">
            <ul>
                {links.map((link, index) => (
                    <Link to={link} key={index}>
                        <li>
                            {text[index]}
                        </li>
                    </Link>
                ))}   
            </ul>
        </div>

    )    
}


export default TopNav;