import { ChevronDown } from "lucide-react";
import React, {ReactNode, useState} from "react";

type Props = {
    text: ReactNode,
    children: React.ReactNode,
    styled?: boolean,
    className?: string
    relative? : boolean
}

// Children should be ul tag

const Dropdown = ({text, children, className, styled=true, relative=false} : Props) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div className={`dropdown ${className}`}>
            <button className={`dropdownBtn ${styled ? "btnStyled" : "" } ${isOpened ? 'active' : ''}`} onClick={() => setIsOpened(!isOpened)}>
                {text}
                <ChevronDown size={25} style={{transition: "transform 0.5s ease-in", transform: isOpened ? "rotate(180deg)" : "rotate(0deg)" }}/>
            </button>
            {isOpened && 
                <div className={`dropdown-content ${styled ? "contentStyled" : "" }`} style={{animation: "slideIn 0.5s ease-out forwards", position: relative ? "relative" : "absolute"}}>
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown;