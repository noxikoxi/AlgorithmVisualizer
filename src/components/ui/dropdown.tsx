import { ChevronDown } from "lucide-react";
import "../../styles/dropdown.css";
import { useState } from "react";

type Props = {
    text: string
    children: React.ReactNode
}

// Children should be ul tag

const Dropdown = ({text, children} : Props) => {
    const [isOpened, setisOpened] = useState<boolean>(false);

    return (
        <div className="dropdown">
            <button className={`dropdownBtn ${isOpened ? 'active' : ''}`} onClick={() => setisOpened(!isOpened)}>
                {text}
                <ChevronDown size={25} style={{transition: "transform 0.5s ease-in", transform: isOpened ? "rotate(180deg)" : "rotate(0deg)" }}/>
            </button>
            {isOpened && 
                <div className="dropdown-content">
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown;