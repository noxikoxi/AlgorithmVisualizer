import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

type Props = {
    title: string,
    description: string,
    todo: string[],
    timeComplexity: ReactNode,
    spaceComplexity: ReactNode,
    sortFunc: string
}

const SortDescription = ({title, description, todo, sortFunc, timeComplexity, spaceComplexity} : Props) => {
    return (
    <div id="info">
        <div id="description">
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
                <span>How bubble sort works:</span>
                <ol>
                    {todo.map((item, index) => (
                        <li key={item.slice(10)}><pre>{item}</pre></li>
                    )) }
                </ol>
            </div>
            <div id ="code">
                <CodeBlock code = {sortFunc} language="javascript"/>
            </div>
        </div>
    </div>
    )
}

export default SortDescription;