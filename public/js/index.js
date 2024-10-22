// const indiaAirportGraph = {
//     'Delhi': {
//         'Mumbai': { time: 135, cost: 100 },
//         'Bangalore': { time: 155, cost: 120 },
//         'Lucknow': { time: 55, cost: 50 },
//         'Chandigarh': { time: 45, cost: 45 }
//     },
//     'Mumbai': {
//         'Delhi': { time: 135, cost: 100 },
//         'Hyderabad': { time: 75, cost: 70 },
//         'Chennai': { time: 95, cost: 80 },
//         'Ahmedabad': { time: 50, cost: 60 }
//     },
//     'Bangalore': {
//         'Delhi': { time: 155, cost: 120 },
//         'Hyderabad': { time: 65, cost: 60 },
//         'Cochin': { time: 50, cost: 50 },
//         'Pune': { time: 80, cost: 70 }
//     },
//     'Hyderabad': {
//         'Mumbai': { time: 75, cost: 70 },
//         'Bangalore': { time: 65, cost: 60 },
//         'Chennai': { time: 60, cost: 55 },
//         'Nagpur': { time: 60, cost: 50 }
//     },
//     'Chennai': {
//         'Mumbai': { time: 95, cost: 80 },
//         'Hyderabad': { time: 60, cost: 55 },
//         'Kolkata': { time: 110, cost: 90 },
//         'Bhubaneswar': { time: 75, cost: 70 }
//     },
//     'Kolkata': {
//         'Chennai': { time: 110, cost: 90 },
//         'Bhubaneswar': { time: 45, cost: 50 },
//         'Guwahati': { time: 70, cost: 60 },
//         'Patna': { time: 50, cost: 55 }
//     },
//     'Ahmedabad': {
//         'Mumbai': { time: 50, cost: 60 },
//         'Pune': { time: 60, cost: 55 },
//         'Indore': { time: 70, cost: 65 },
//         'Goa': { time: 80, cost: 75 }
//     },
//     'Pune': {
//         'Bangalore': { time: 80, cost: 70 },
//         'Ahmedabad': { time: 60, cost: 55 },
//         'Jaipur': { time: 95, cost: 85 },
//         'Goa': { time: 75, cost: 70 }
//     },
//     'Jaipur': {
//         'Pune': { time: 95, cost: 85 },
//         'Lucknow': { time: 75, cost: 65 },
//         'Chandigarh': { time: 60, cost: 60 },
//         'Delhi': { time: 55, cost: 50 }
//     },
//     'Lucknow': {
//         'Delhi': { time: 55, cost: 50 },
//         'Jaipur': { time: 75, cost: 65 },
//         'Varanasi': { time: 45, cost: 40 },
//         'Patna': { time: 55, cost: 50 }
//     },
//     'Cochin': {
//         'Bangalore': { time: 50, cost: 50 },
//         'Goa': { time: 60, cost: 55 },
//         'Chennai': { time: 80, cost: 75 },
//         'Kolkata': { time: 120, cost: 95 }
//     },
//     'Guwahati': {
//         'Kolkata': { time: 70, cost: 60 },
//         'Bhubaneswar': { time: 85, cost: 75 },
//         'Patna': { time: 75, cost: 70 },
//         'Srinagar': { time: 115, cost: 105 }
//     },
//     'Bhubaneswar': {
//         'Kolkata': { time: 45, cost: 50 },
//         'Chennai': { time: 75, cost: 70 },
//         'Guwahati': { time: 85, cost: 75 },
//         'Hyderabad': { time: 105, cost: 95 }
//     },
//     'Chandigarh': {
//         'Delhi': { time: 45, cost: 45 },
//         'Jaipur': { time: 60, cost: 60 },
//         'Indore': { time: 75, cost: 65 },
//         'Srinagar': { time: 90, cost: 85 }
//     },
//     'Patna': {
//         'Kolkata': { time: 50, cost: 55 },
//         'Lucknow': { time: 55, cost: 50 },
//         'Guwahati': { time: 75, cost: 70 },
//         'Varanasi': { time: 60, cost: 55 }
//     },
//     'Indore': {
//         'Ahmedabad': { time: 70, cost: 65 },
//         'Chandigarh': { time: 75, cost: 65 },
//         'Nagpur': { time: 90, cost: 80 },
//         'Goa': { time: 90, cost: 85 }
//     },
//     'Nagpur': {
//         'Hyderabad': { time: 60, cost: 50 },
//         'Indore': { time: 90, cost: 80 },
//         'Mumbai': { time: 75, cost: 65 },
//         'Goa': { time: 85, cost: 75 }
//     },
//     'Goa': {
//         'Pune': { time: 75, cost: 70 },
//         'Indore': { time: 90, cost: 85 },
//         'Cochin': { time: 60, cost: 55 },
//         'Ahmedabad': { time: 80, cost: 75 }
//     },
//     'Srinagar': {
//         'Chandigarh': { time: 90, cost: 85 },
//         'Guwahati': { time: 115, cost: 105 },
//         'Delhi': { time: 60, cost: 55 },
//         'Patna': { time: 100, cost: 90 }
//     },
//     'Varanasi': {
//         'Lucknow': { time: 45, cost: 40 },
//         'Patna': { time: 60, cost: 55 },
//         'Delhi': { time: 75, cost: 65 },
//         'Hyderabad': { time: 90, cost: 80 }
//     }
// };


// Select elements
const mobileMenuButton = document.querySelector('button[type="button"]');
const mobileMenu = document.querySelector('.lg\\:hidden[role="dialog"]');
const closeMenuButton = mobileMenu.querySelector('button[type="button"]');

// Toggle the visibility of the mobile menu
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Add event listeners
mobileMenuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);

// Main logic starts from here. Data of indian airports
const indiaAirportGraph = {
    'Delhi': {
        'Mumbai': { time: 135, cost: 5000 },
        'Bangalore': { time: 155, cost: 5500 },
        'Lucknow': { time: 55, cost: 2000 },
        'Chandigarh': { time: 45, cost: 1500 }
    },
    'Mumbai': {
        'Delhi': { time: 135, cost: 5000 },
        'Hyderabad': { time: 75, cost: 3000 },
        'Chennai': { time: 95, cost: 3500 },
        'Ahmedabad': { time: 50, cost: 2500 }
    },
    'Bangalore': {
        'Delhi': { time: 155, cost: 5500 },
        'Hyderabad': { time: 65, cost: 2500 },
        'Cochin': { time: 50, cost: 2000 },
        'Pune': { time: 80, cost: 3000 }
    },
    'Hyderabad': {
        'Mumbai': { time: 75, cost: 3000 },
        'Bangalore': { time: 65, cost: 2500 },
        'Chennai': { time: 60, cost: 2200 },
        'Nagpur': { time: 60, cost: 2000 }
    },
    'Chennai': {
        'Mumbai': { time: 95, cost: 3500 },
        'Hyderabad': { time: 60, cost: 2200 },
        'Kolkata': { time: 110, cost: 4000 },
        'Bhubaneswar': { time: 75, cost: 3200 }
    },
    'Kolkata': {
        'Chennai': { time: 110, cost: 4000 },
        'Bhubaneswar': { time: 45, cost: 1800 },
        'Guwahati': { time: 70, cost: 3000 },
        'Patna': { time: 50, cost: 2000 }
    },
    'Ahmedabad': {
        'Mumbai': { time: 50, cost: 2500 },
        'Pune': { time: 60, cost: 2700 },
        'Indore': { time: 70, cost: 2800 },
        'Goa': { time: 80, cost: 3500 }
    },
    'Pune': {
        'Bangalore': { time: 80, cost: 3000 },
        'Ahmedabad': { time: 60, cost: 2700 },
        'Jaipur': { time: 95, cost: 3700 },
        'Goa': { time: 75, cost: 3200 }
    },
    'Jaipur': {
        'Pune': { time: 95, cost: 3700 },
        'Lucknow': { time: 75, cost: 3000 },
        'Chandigarh': { time: 60, cost: 2700 },
        'Delhi': { time: 55, cost: 2000 }
    },
    'Lucknow': {
        'Delhi': { time: 55, cost: 2000 },
        'Jaipur': { time: 75, cost: 3000 },
        'Varanasi': { time: 45, cost: 1500 },
        'Patna': { time: 55, cost: 2500 }
    },
    'Cochin': {
        'Bangalore': { time: 50, cost: 2000 },
        'Goa': { time: 60, cost: 2500 },
        'Chennai': { time: 80, cost: 3500 },
        'Kolkata': { time: 120, cost: 4500 }
    },
    'Guwahati': {
        'Kolkata': { time: 70, cost: 3000 },
        'Bhubaneswar': { time: 85, cost: 3500 },
        'Patna': { time: 75, cost: 3000 },
        'Srinagar': { time: 115, cost: 5000 }
    },
    'Bhubaneswar': {
        'Kolkata': { time: 45, cost: 1800 },
        'Chennai': { time: 75, cost: 3200 },
        'Guwahati': { time: 85, cost: 3500 },
        'Hyderabad': { time: 105, cost: 4500 }
    },
    'Chandigarh': {
        'Delhi': { time: 45, cost: 1500 },
        'Jaipur': { time: 60, cost: 2700 },
        'Indore': { time: 75, cost: 3200 },
        'Srinagar': { time: 90, cost: 4000 }
    },
    'Patna': {
        'Kolkata': { time: 50, cost: 2000 },
        'Lucknow': { time: 55, cost: 2500 },
        'Guwahati': { time: 75, cost: 3000 },
        'Varanasi': { time: 60, cost: 2800 }
    },
    'Indore': {
        'Ahmedabad': { time: 70, cost: 2800 },
        'Chandigarh': { time: 75, cost: 3200 },
        'Nagpur': { time: 90, cost: 4000 },
        'Goa': { time: 90, cost: 3700 }
    },
    'Nagpur': {
        'Hyderabad': { time: 60, cost: 2000 },
        'Indore': { time: 90, cost: 4000 },
        'Mumbai': { time: 75, cost: 3500 },
        'Goa': { time: 85, cost: 3200 }
    },
    'Goa': {
        'Pune': { time: 75, cost: 3200 },
        'Indore': { time: 90, cost: 3700 },
        'Cochin': { time: 60, cost: 2500 },
        'Ahmedabad': { time: 80, cost: 3500 }
    },
    'Srinagar': {
        'Chandigarh': { time: 90, cost: 4000 },
        'Guwahati': { time: 115, cost: 5000 },
        'Delhi': { time: 60, cost: 2800 },
        'Patna': { time: 100, cost: 4500 }
    },
    'Varanasi': {
        'Lucknow': { time: 45, cost: 1500 },
        'Patna': { time: 60, cost: 2800 },
        'Delhi': { time: 75, cost: 3500 },
        'Hyderabad': { time: 90, cost: 4000 }
    }
};


// Updated Dijkstra's algorithm to find the shortest path considering intermediate nodes
function dijkstra(source, destination) {
    const costs = {};
    const times = {};
    const previous = {};
    const queue = new Set();

    // Initialize all airports with infinity costs and times
    for (const airport in indiaAirportGraph) {
        costs[airport] = Infinity;
        times[airport] = Infinity;
        previous[airport] = null;
        queue.add(airport);
    }

    // Start with the source airport
    costs[source] = 0;
    times[source] = 0;

    while (queue.size) {
        // Find the airport with the lowest cost
        const current = [...queue].reduce((minNode, node) => {
            return costs[node] < costs[minNode] ? node : minNode;
        }, [...queue][0]);

        // If we reached the destination, construct the path
        if (current === destination) {
            const path = [];
            let temp = destination;
            while (temp) {
                path.unshift(temp);
                temp = previous[temp];
            }
            return {
                path,
                time: times[destination],
                cost: costs[destination],
            };
        }

        // Remove the current airport from the queue
        queue.delete(current);

        // Explore all neighbors (connected airports) of the current airport
        for (const neighbor in indiaAirportGraph[current]) {
            const travelInfo = indiaAirportGraph[current][neighbor];
            const newCost = costs[current] + travelInfo.cost;
            const newTime = times[current] + travelInfo.time;

            // If the new cost is lower, update the neighbor's cost and time
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
                times[neighbor] = newTime;
                previous[neighbor] = current;
            }
        }
    }

    // If no path was found, return null (but this case should never occur in a fully connected graph)
    return null;
}

// Function to find the shortest path and display the result
function findShortestPath() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;

    const result = dijkstra(source, destination);

    const resultDiv = document.getElementById("result");
    if (result) {
        resultDiv.innerHTML = `Travel Time: ${result.time} minutes<br>Cost: ₹${result.cost}`;
        drawGraph(result.path);
    } else {
        resultDiv.innerHTML = 'No path found.';
    }
}

// Function to visualize the route on the graph
function drawGraph(path) {
    const nodes = new vis.DataSet();
    const edges = new vis.DataSet();
    const uniqueAirports = new Set(path);

    // Add nodes for the path
    uniqueAirports.forEach((airport) => {
        nodes.add({ id: airport, label: airport });
    });

    // Add edges for the path
    for (let i = 0; i < path.length - 1; i++) {
        edges.add({ from: path[i], to: path[i + 1] });
    }

    const container = document.getElementById("network");
    const data = { nodes, edges };
    const options = {
        edges: {
            arrows: 'to'
        }
    };
    const network = new vis.Network(container, data, options);
}

