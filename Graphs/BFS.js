const { createGraph } = require('./AdjacencyList')
function BFS() {
    const graph = createGraph()

    let queue = [0]
    let visits = [0]

    while(queue.length > 0){
        console.log(queue,'queue')
        const node = queue[0]
        console.log('index to check in graph ',node)
        queue.shift()
        console.log('deleting first index ',queue)
        const siblings = graph[node]
        console.log('node ',node,'siblings ',siblings )
        for(let i = 0;i < siblings.length;i++){
            if(!visits.includes(siblings[i])){
                visits.push(siblings[i])
                queue.push(siblings[i])
                console.log(visits,'visits')
                console.log(queue,'queue after')
            } else {
                
               console.log('siblings already exist ',siblings[i])
            }
        }
 
    }

}
BFS()
