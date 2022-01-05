//用邻接表的方法表示图

function Graph (){
    let vertices = [];
    let adjlist = new dictionary();
    let initializeColor = () => {
        let color = {};
        for(let i = 0; i < vertices.length; i++){
            color[vertices[i]] = 'white';
        }
        return color;
    };
    let dfsVisit = (u, color, cb) => {
        color[u] = 'gray';
        if(cb){
            cb();
        }
        let neighbors = adjlist.get(u);
        for(let i = 0; i < neighbors.length; i++){
            if(color[neighbors[i]] === 'white'){
                dfsVisit(neighbors[i], color, cb);
            }
        }
        color[u] = 'black';
    };

    this.addVertex = (v) => {
        vertices.push(v);
        adjlist.set(v, []);
    };
    this.addEdge = (v, w) => {
        adjlist.get(v).push(w);
        adjlist.get(w).push(v);
    };
    this.toString = () => {
        let s = '';
        for(let i = 0; i < vertices.length; i++){
            s += vertices[i] + '-->';
            let neighbors = adjlist.get(vertices[i]);
            for(let j = 0; j < neighbors.length; j++){
                s += neighbors[j];
            }
            s += '/n';
        }
        return s;
    };
    //广度优先搜索
    this.bfs = (v, cb) => {
        let color = initializeColor();
        let queue = new Queue();

        queue.enqueue(v);
        while(!queue.isEmpty()){
            let u = queue.dequeue();
            let neighbors = adjlist.get(u);
            color[u] = 'gray';
            for(let i = 0; i < neighbors.length; i++){
                let w = neighbors[i];
                if(color[w] === 'white'){
                    color[w] = 'gray';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if(cb){
                cb(u);
            }
        }
    };
    //深度优先搜索
    this.dfs = (v, cb) => {
        let color = initializeColor();
        for(var i = 0; i < vertices.length; i++){
            if(color[vertices[i]] === 'white'){
                dfsVisit(vertices[i], color, cb);
            }
        }
    };
}