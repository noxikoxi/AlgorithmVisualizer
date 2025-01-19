import {getNameFromProperty} from "../../../utils/string";

type Complexity = {
    [key: string] : string
}

type Props = {
    title : string,
    tableObject: Complexity[]
}

const TableTimeComplexity = ({title, tableObject} : Props) => {
    const tableHead  = Object.keys(tableObject[0]);
    return (
        <div style={{ paddingBottom: '20px', alignItems: "center"}} className="col">
            <h2>{title}</h2>
            <table>
                <thead>
                <tr>
                    {tableHead.map((text) => (
                        <th key={text}>{getNameFromProperty(text)}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableObject.map((complexity : Complexity, index) => (
                    <tr key={index}>
                    {tableHead.map((head, index1) => (
                        <td key={head + "-" + index + "-" + index1} className={`${index1 === 0 ? "bg-primary bolded" : "bg"}`}>{complexity[head]}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default TableTimeComplexity;