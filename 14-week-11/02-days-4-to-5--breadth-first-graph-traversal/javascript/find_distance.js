function findDistance(graph, vertexA, vertexB) {
  //create a queue of arrays of [distance, vertex]
  const queue = [[0, vertexA]];
  //keep track of nodes which have already been seen in a visited Set
  const visited = new Set();

  //if there is no queue anymore, return -1, indicating no path/no distance to other node
  while (queue.length > 0) {
    //create a new array to test by removing the first array from the queue
    const [distance, vertex] = queue.shift();

    //if the vertex is equal to the target vertexB, and has at least some distance (ie it's not itself), return the distance
    if (vertex === vertexB && distance > 0) {
      return distance;
    }

    // if the vertex has already been seen, skip any further processing for it and move to the next item in the queue
    if (visited.has(vertex)) {
      continue;
    }

    //if the vertex isn't in visited, move to the next level of the graph, increase the distance by one, and add each node of that level to the queu
    graph[vertex].forEach((adj) => {
      queue.push([distance + 1, adj]);
    });

    //add the vertex we just tested to visited so we don't test it again
    visited.add(vertex);
  }

  //return -1 if there is no path from vertexA to vertexB
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: [],
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
