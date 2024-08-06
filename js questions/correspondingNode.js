function correspondingNode(root1, root2, node){
    var current = node;
    var path = []
    while(current!==root1){
        const index = Array.prototype.indexof.call(current.parentElement.children, current);
        path.push(index);
        current = current.parentElement;
    }
    current = root2;
    while(path.length>0){
        current = current.children(path.pop());
    }

    return current;
}