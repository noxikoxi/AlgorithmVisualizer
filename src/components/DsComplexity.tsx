import {ReactNode} from "react";

type Props = {
    access: ReactNode,
    search: ReactNode,
    insertion: ReactNode,
    deletion: ReactNode
}
const DsComplexity = ({access, search, insertion, deletion} : Props) => {

    const operations = ['Access', "Search", "Insertion", "Deletion"];
    const complexity = [access, search, insertion, deletion];

    return (
        <div className="bg-primary" style={{margin: 10, fontSize: "x-large", padding: 10 ,borderRadius: 10, display:"flex", flexDirection: "column", alignItems: "center", gap:"10px"}}>
            <span >Time Complexity</span>
            {operations.map((elem, index) => (
                <div key={elem} style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                    <span>{elem}:</span>
                    {complexity[index]}
                </div>
            ))}
        </div>
    )

}

export default DsComplexity;