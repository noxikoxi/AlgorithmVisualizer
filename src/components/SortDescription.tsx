import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

type Props = {
    title: string,
    description: string,
    todo: string[],
    timeComplexity: ReactNode,
    spaceComplexity: ReactNode,
    additional? : string,
    funcs: {[key: string]: string}[],
    children?: ReactNode
}

const SortDescription = ({title, description, todo, funcs, timeComplexity, spaceComplexity, children, additional} : Props) => {
    return (
    <div id="info">
        <div className="description">
            <p className="title">
                {title}
            </p>
            <span style={{textAlign: "justify"}}>
                {description}
            </span>
            {additional ? <div style={{textAlign: "justify"}} dangerouslySetInnerHTML={{__html : additional}}></div>: ""}
            <div id="complexity">
                {timeComplexity}
                {spaceComplexity}
            </div>
            <div id="todo">
                <span>How {title.toLowerCase()} works:</span>
                <ol>
                    {todo.map((item, index) => (
                        <li key={item.slice(10)}><pre>{item}</pre></li>
                    )) }
                </ol>
            </div>
            <div className="code">
                {funcs.map((codePair, index) => (
                    <CodeBlock key={index} codePair={codePair} />
                ))}
            </div>
            {children}
        </div>
    </div>
    )
}

export default SortDescription;