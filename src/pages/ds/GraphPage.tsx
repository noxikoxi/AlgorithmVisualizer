import TableTimeComplexity from "../../components/visualizations/ds/TableTimeComplexity";
import {GraphComplexity} from "../../algorithms/data-structures/config";
import GraphVisualization from "../../components/visualizations/ds/GraphVisualization";
import GraphAdjacencyMatrixVisualization from "../../components/visualizations/ds/GraphAdjacencyMatrixVisualization";
import GraphAdjacencyListVisualization from "../../components/visualizations/ds/GraphAdjacencyListVisualization";

const GraphPage = () => {
    return(
        <>
            <span className="text-block">A Graph is a data structure used to represent a collections of objects where a pair of objects can be connected. We call those objects vertices (V) and connection between them edges (E). Therefore a Graph contains a set of edges and a set of vertices. An intuition here could be representing vertices as cities and edges as roads, then a passage is possible from city A to City B if there exists road between them.</span>
            <span className="text-block">An Edge can be one directional (meaning going from city A to B without possibility to comeback using the same road) or two directional (from A to B and from B to A using one edge), it can have a weight (then we have a weighted Graph).</span>
            <span className="text-block">Each vertex has a degree - number of edges that start or end in it. </span>

            <p>Graph visualization</p>
            <GraphVisualization/>

            <span className="text-block">The most common graph representations are <span className="bolded">Adjacency Matrix</span> and <span className="bolded">Adjacency List.</span></span>
            <span className="text-block">
                <ul>
                    <li><span className="bolded">Adjacency Matrix</span> - 2D matrix where each cell at position (i,j) represents an edge between vertex i and vertex j. The value in specific cell determines if an edge exist (1) or not (0). In case of weighted graph this value would be weight of the edge (then it can have any value). Easy approach to implement, fast to check if an edge between vertices exists, however unnecessary information about not existing edges is stored.</li>
                    <li><span className="bolded">Adjacency List</span> - Collection of lists or any data structures where each index represents a vertex and has a list of edges. For weighted graph each edge would be a pair of weight and vertex. The list holds information about any vertex neighbours. Here checking if an edge exist between two vertices can take linear time, but we store only information about existing edges.</li>
                </ul>
            </span>
            <span className="text-block">Another idea could be to use <span className="bolded">Incidence Matrix</span> where each row would be a vertex, columns would be edges. Values between vertex i and edge j could be -1 or 1; 1 meaning start of an edge and -1 meaning the end. </span>

            <h2>Adjacency Matrix of above Graph</h2>
            <GraphAdjacencyMatrixVisualization/>

            <h2>Adjacency List of above Graph</h2>
            <GraphAdjacencyListVisualization/>

            <span className="text-block">
                Typical operation that you can do on a graph are:
                <ul>
                    <li><span className="bolded">For Vertex: Add/Remove/Get Every Edge</span></li>
                    <li><span className="bolded">For Edge: Add/Remove/Check if exists</span></li>
                </ul>
            </span>
            <span className="text-block">With just a simple check of every edge from a specific vertex various algorithms are possible such as checking if there is a cycle between two vertices or finding shortest path between them,</span>
            <TableTimeComplexity title="Time Complexity of Operations on Graph" tableObject={GraphComplexity}/>

            <span className="text-block">One of the most crucial operation that we can perform on a Graph is traversal. To move between vertices we can use DFS (Depth First Search) or BFS (Breath First Search).</span>
        </>
    )
}

export default GraphPage;