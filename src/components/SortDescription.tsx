import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

type Props = {
    title: string,
    description: string,
    todo: string[],
    timeComplexity: ReactNode,
    spaceComplexity: ReactNode,
    funcs: string[],
    children?: ReactNode
}

const SortDescription = ({title, description, todo, funcs, timeComplexity, spaceComplexity, children} : Props) => {
    return (
    <div id="info">
        <div className="description">
            <p className="title">
                {title}
            </p>
            <span>
                {description}
            </span>
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
            <div className ="code">
                {funcs.map((text, index) => (
                    <CodeBlock key={index} code = {text} language="javascript"/>
                ))}
            </div>
            {children}
            
        </div>
    </div>
    )
}

export default SortDescription;