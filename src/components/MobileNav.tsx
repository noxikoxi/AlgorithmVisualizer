import { Menu } from "lucide-react";
import SideMenu from "./ui/sidemenu";
import { Link } from "react-router-dom";
import Dropdown from "./ui/dropdown";

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
                    <Dropdown text={"Sorting"} styled={false} className="w-full">
                        <ul style={{width: "100%"}}>
                            <Link to="/sorting/bubble"><li>Bubble Sort</li></Link>
                            <Link to="/sorting/selection"><li>Selection Sort</li></Link>
                            <Link to="/sorting/insertion"><li>Insertion Sort</li></Link>
                            <Link to="/sorting/merge"><li>Merge Sort</li></Link>
                            <Link to="/sorting/quick"><li>Quick Sort</li></Link>
                            <Link to="/sorting/heap"><li>Heap Sort</li></Link>
                        </ul>
                    </Dropdown>
                </div>
            </nav>
        </SideMenu>       
    )

}

export default MobileNav;