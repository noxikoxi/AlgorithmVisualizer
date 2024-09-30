import { sorts } from "../algorithms/sorting/config";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import {ReactNode} from "react";

type Props = {
    children : ReactNode
}
const SortLayout = ({children} : Props) => {
    
    const links = sorts.map((item) =>  "/sorting/" + item.split(" ")[0].toLowerCase())
    return (
        <div id ="main" style={{position: 'relative'}}>
            <Header/>
            <TopNav text={sorts} links={links}/>
            {children}
        </div>
    )
}

export default SortLayout;