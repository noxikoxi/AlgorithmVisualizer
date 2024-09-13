import Header from "../components/Header";

type Props = {
    children : React.ReactNode
}
const Layout = ({children} : Props) => {
    return (
        <div id ="main">
            <Header/>
            {children}
        </div>
    )
}

export default Layout;