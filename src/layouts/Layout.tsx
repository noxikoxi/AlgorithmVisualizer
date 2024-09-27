import {ReactNode} from "react";

type Props = {
    children : ReactNode
}
const Layout = ({children} : Props) => {
    return (
        <div id ="main">

            {children}
        </div>
    )
}

export default Layout;