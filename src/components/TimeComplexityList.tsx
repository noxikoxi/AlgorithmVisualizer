type Props = {
    complexity: string[],
    operations: string[],
}
const TimeComplexityList = ({complexity, operations} : Props) => {
    return (
        <>
            <span className="bolded" style={{fontSize: "large"}}>Time Complexity</span>
            <ul style={{listStyleType: "circle", paddingLeft: 40, margin: 0, fontSize: "large", width: 200}}>
                {operations.map((operation, index) => (
                    <li key={operation}><span className="justify-between"><span>{operation}</span><span>{complexity[index]}</span></span></li>
                ))}
            </ul>
        </>
    )
}


export  default TimeComplexityList;