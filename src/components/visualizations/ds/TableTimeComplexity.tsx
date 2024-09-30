import {linkedListComplexity} from "../../../algorithms/data-structures/config";
import {getNameFromProperty} from "../../../utils/string";

type Props = {
    title : string
}

type Complexity = {
    [key: string] : string
}

const TableTimeComplexity = ({title} : Props) => {
    const tableHead  = Object.keys(linkedListComplexity[0]);
    return (
        <div style={{ paddingBottom: '20px', alignItems: "center"}} className="col">
            <h2>{title}</h2>
            <table style={{ width: '100%', borderCollapse: "collapse"}}>
                <thead>
                <tr>
                    {tableHead.map((text) => (
                        <th key={text} style={{border: "1px solid var(--border)", backgroundColor: "var(--primary)", padding: '8px' }}>{getNameFromProperty(text)}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {linkedListComplexity.map((complexity : Complexity, index) => (
                    <tr key={index}>
                    {tableHead.map((head, index1) => (
                        <td key={head + "-" + index + "-" + index1} className={`${index1 == 0 ? "bg-primary bolded" : "bg"}`} style={{ border: "1px solid var(--border)", padding: '8px', textAlign: "center"}}>{complexity[head]}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default TableTimeComplexity;