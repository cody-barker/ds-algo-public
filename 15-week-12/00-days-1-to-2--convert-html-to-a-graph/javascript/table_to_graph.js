// function tableToGraph(friends) {
//   const dataString = friends.slice(55, -18).replace(/<\/tr><tr>/g, "");
//   const data = dataString.split("</td><td>");
//   const graph = {};

//   for (let idx = 0; idx < data.length; idx += 2) {
//     const vertex = data[idx];
//     const friendsList = data[idx + 1] !== "" ? data[idx + 1].split(", ") : [];

//     graph[vertex] = friendsList;

//     friendsList.forEach((friend) => {
//       if (!graph[friend]) {
//         graph[friend] = [];
//       }

//       if (!graph[friend].includes(vertex)) {
//         graph[friend].push(vertex);
//       }
//     });
//   }

//   return graph;
// }

function tableToGraph(friends) {
  //create a const called dataString and slice it from the first friend to the end of the friends list
  //use a regex to replace every instance of </tr><tr> with an empty string to separate our each row in the table
  const dataString = friends.slice(55, -18).replace(/<\/tr><tr>/g, "");
  //create a const called data and split the dataString on each </td><td> to separate friends and friends from friends lists
  const data = dataString.split("</td><td>");
  //initilize an empty graph
  const graph = {};

  //iterate over the data

  for (idx = 0; idx < data.length; idx += 2) {
    const vertex = data[idx];
    const friendsList = data[idx + 1] !== "" ? data[idx + 1].split(", ") : [];

    graph[vertex] = friendsList;

    friendsList.forEach((friend) => {
      if (!graph[friend]) {
        graph[friend] = [];
      }

      if (!graph[friend].includes(vertex)) {
        graph[friend].push(vertex);
      }
    });
  }
  //set vertex equal to data[idx]
  //ternary for friends list checking if data[idx + 1] === "" or not, (is there a friends list? or is it empty) : if there are friends, split them on ", " to create an array of friend strings, otherwise an empty array
  //create a key of graph[vertex] = friendsList (array of friends)

  //for each friend in the friends list, if the graph doesn't have that key, create it and set it to an empty array
  //if the friend in the graph doesn't include that vertex yet, push the vertex into that key

  //return graph
  return graph;
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // add your own tests in here
  const friends =
    "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  const result = {
    Fred: ["Jane", "Carol", "Anesh", "Xi"],
    Jane: ["Fred"],
    Carol: ["Fred", "Anesh", "Janelle"],
    Anesh: ["Fred", "Carol"],
    Xi: ["Fred"],
    Janelle: ["Carol"],
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
// And a written explanation of your solution
