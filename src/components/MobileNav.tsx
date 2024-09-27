import { Menu } from "lucide-react";
import SideMenu from "./ui/sidemenu";
import { Link } from "react-router-dom";
import Dropdown from "./ui/dropdown";
import {sorts} from "../algorithms/sorting/config";
import {DS} from "../algorithms/data-structures/config";

type Props = {
    className: string
}

const MobileNav = ({className} : Props) => {
    return (
        <SideMenu
            triggerButton={<Menu size={25}/>}
            triggerClassName={className}
        >
            <nav id="mobileNavContainer">
                <div className="mobileNavContent">
                    <p>Algorithms</p>
                    <Dropdown text={"Sorting"} styled={false} className="w-full" relative={true}>
                        <ul>
                            {sorts.map((elem, index) => (
                                <Link key={elem + index.toString()} to={`/sorting/${elem.split(" ")[0].toLowerCase()}`}><li>{elem}</li></Link>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
                <div className="mobileNavContent">
                    <Dropdown text={<span style={{fontWeight: "bold"}}>Data Structures</span>} styled={false} className="w-full">
                        <ul>
                            {DS.map((elem, index) => (
                                <Link key={elem + index.toString()} to={`/ds/${elem.split(" ")[0].toLowerCase()}`}><li>{elem}</li></Link>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </nav>
        </SideMenu>       
    )

}

export default MobileNav;