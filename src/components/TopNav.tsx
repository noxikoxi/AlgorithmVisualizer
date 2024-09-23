import { Link, useLocation } from "react-router-dom";

type Props = {
    links: string[];
    text: string[];
}

const TopNav = ({links, text} : Props) => {
    const location = useLocation();

    return (
        <div id="topNav" className="md-block">
            <ul>
                {links.map((link, index) => (
                    <Link to={link} key={index} className={location.pathname === link ? "active" : "" }>
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