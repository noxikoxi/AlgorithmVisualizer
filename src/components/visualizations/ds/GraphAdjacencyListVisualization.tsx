import {graphVisualizationEdgesList, graphVisualizationNodes} from "../../../algorithms/data-structures/config";

const GraphAdjacencyListVisualization = () => {
    return (
        <div>
            <table>
                <tbody>
                    {graphVisualizationNodes.map((vertex, idx) => (
                        <tr key={vertex.label + idx.toString()}>
                            <td className="bg-primary bolded">{vertex.label}</td>
                            {graphVisualizationNodes.map((vertex2, idx1) => (
                                <>
                                    {graphVisualizationEdgesList[idx].includes(idx1) && (
                                            <td key={vertex.label + "-" + vertex2.label} className="bg">{vertex2.label}</td>
                                    )}
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    )
}

export default GraphAdjacencyListVisualization;