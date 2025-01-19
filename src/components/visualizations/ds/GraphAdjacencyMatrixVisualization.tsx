import {graphVisualizationEdgesList, graphVisualizationNodes} from "../../../algorithms/data-structures/config";

const GraphAdjacencyMatrixVisualization = () => {
    return (
        <div>
            <table id="adjacencyTable">
                <thead>
                    <tr>
                        <th></th>
                        {graphVisualizationNodes.map((vertex) => (
                            <th key={vertex.label}>{vertex.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {graphVisualizationNodes.map((vertex, idx) => (
                    <tr key={vertex.label + idx.toString()}>
                        <td className="bg-primary bolded">{vertex.label}</td>
                        {graphVisualizationNodes.map((vertex2, idx1) => (
                        <td key={vertex.label + "-" + vertex2.label} className="bg">
                            {1 && graphVisualizationEdgesList[idx].includes(idx1) ? 1 : 0}
                        </td>
                        ))}
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )
}


export default GraphAdjacencyMatrixVisualization;