class Graph {
  constructor(paths) {
    this.graph = paths.reduce(
      (graph, path) => this.constructor.populate(graph, path),
      {}
    );
  }

  static populate(graph, path) {
    return path.reduce((graph, vertex, idx) => {
      graph[vertex] = graph[vertex] || new Set();
      const nextVertex = path[idx + 1];

      if (nextVertex !== undefined) {
        graph[vertex].add(nextVertex);
        graph[nextVertex] = graph[nextVertex] || new Set();
        graph[nextVertex].add(vertex);
      }

      return graph;
    }, graph);
  }

  isAdjacent(vertexA, vertexB) {
    return this.graph[vertexA].has(vertexB);
  }

  // array is an adjacency list
  addVertex(vertex, array) {
    this.graph[vertex] = new Set(array);

    array.forEach((adjacency) => {
      this.graph[adjacency] = this.graph[adjacency] || new Set();
      this.graph[adjacency].add(vertex);
    });
  }
}

if (require.main === module) {
  // add your own tests in here
  let graph = new Graph([]);

  console.log("Expecting: {}");
  console.log(graph.graph);

  console.log("");

  graph = new Graph([
    ["a", "b", "c"],
    ["b", "d"],
  ]);

  console.log(
    'Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}'
  );
  console.log(graph.graph);

  console.log("");

  console.log("Expecting: true");
  console.log(graph.isAdjacent("a", "b"));

  console.log("");

  console.log("Expecting: false");
  console.log(graph.isAdjacent("a", "c"));

  console.log("");

  graph.addVertex("e", ["a", "d"]);
  console.log(
    'Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }'
  );
  console.log(graph.graph);

  console.log("");
}

module.exports = Graph;

// Please add your pseudocode to this file
// And a written explanation of your solution
