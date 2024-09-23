import { ArrowRight } from "lucide-react";
import { relative } from "path";
import { ReactNode, useRef, useState } from "react";

type Props = {
    triggerButton: ReactNode,
    children: ReactNode,
    triggerClassName: string,
}

const SideMenu = ({triggerButton, children, triggerClassName} : Props) => {

    const [isShowed, setIsShowed] = useState<boolean>(false);
    const sideMenuContent = useRef<HTMLDivElement | null>(null);

    const show = () => {
        sideMenuContent.current?.classList.remove("hide");
        sideMenuContent.current?.classList.add("show");
        setIsShowed(true)
    }

    const hide = () => {
        sideMenuContent.current?.classList.remove("show");
        sideMenuContent.current?.classList.add("hide");
        setIsShowed(false)
    }

    return (
        <>
            <button className={"trigger " + triggerClassName} onClick={() => show()}>
                {triggerButton}
            </button>
            {isShowed &&<div className="blackout"></div>}
            <div id="sideMenuContent" ref={sideMenuContent}>
                <div style={{display: "flex", gap: 10, paddingBottom: 10, borderBottom: "2px solid white"}}>
                    <button className="trigger" onClick={() => hide()}>
                        <ArrowRight size={32} strokeWidth={2} />
                    </button>
                    <div style={{display:"flex",justifyContent: "center", alignItems: "center", width: "100%"}}>
                        <span style={{fontSize: "22px", letterSpacing: 2}}>Navigation</span>
                    </div>
                </div>
                {children}
            </div>
        </>
    )

}

export default SideMenu;