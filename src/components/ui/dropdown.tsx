import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
    text: string,
    children: React.ReactNode,
    styled?: boolean,
    className?: string
}

// Children should be ul tag

const Dropdown = ({text, children, className, styled=true} : Props) => {
    const [isOpened, setisOpened] = useState<boolean>(false);

    return (
        <div className={`dropdown ${className}`}>
            <button className={`dropdownBtn ${styled ? "btnStyled" : "" } ${isOpened ? 'active' : ''}`} onClick={() => setisOpened(!isOpened)}>
                {text}
                <ChevronDown size={25} style={{transition: "transform 0.5s ease-in", transform: isOpened ? "rotate(180deg)" : "rotate(0deg)" }}/>
            </button>
            {isOpened && 
                <div className={`dropdown-content ${styled ? "contentStyled" : "" }`}>
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown;