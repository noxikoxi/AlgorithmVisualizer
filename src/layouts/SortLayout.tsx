import Header from "../components/Header";
import TopNav from "../components/TopNav";

type Props = {
    children : React.ReactNode
}
const SortLayout = ({children} : Props) => {
    const sorts = ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"]
    const links = sorts.map((item) =>  "/sorting/" + item.split(" ")[0].toLowerCase())
    return (
        <div id ="main" style={{display: "flex", flexDirection: 'column'}}>
            <Header/>
            <TopNav text={sorts} links={links}/>
            {children}
        </div>
    )
}

export default SortLayout;