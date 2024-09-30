import {ReactNode} from "react";
import Header from "../components/Header";
import TopNav from "../components/TopNav";
import {DS} from "../algorithms/data-structures/config";
import {useLocation} from "react-router-dom";

type Props = {
    children : ReactNode
}

const DsLayout = ({children} : Props) => {

    const links = DS.map((elem) => `/ds/${elem.toLowerCase()}`);
    const location = useLocation();

    return (
        <div id="main">
            <Header/>
            <TopNav text={DS} links={links} className="bg-primary"/>
            <div className="centered h-full" style={{overflow: "auto"}}>
                <div className="md-w-80 centered bg-secondary h-full" style={{overflow: "auto", width: "100%"}}>
                    <span className="title" style={{display: "flex", gap:10}}><span className="md-block">Data Structures - </span><span className="capitalized">{location.pathname.split("/")[2]}</span></span>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DsLayout;