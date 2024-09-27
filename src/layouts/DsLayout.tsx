import {ReactNode} from "react";
import Header from "../components/Header";

type Props = {
    children : ReactNode
}

const DsLayout = ({children} : Props) => {
    return (
        <div id="main">
            <Header/>
            {children}
        </div>
    )
}

export default DsLayout;