function getElementsByClassName(){
    var inClass = [];
    var body = document.body;
 
    function findClass(element){
        if(!element.tagName){
            return;
        }
        const styles = window.getComputedStyle(element);
        if(styles.display === 'flex'){
            inClass.push(element);
        }
    }
 
    function testNodes(node,test){
        
        test(node);
        node = node.firstChild;
        while(node){
            testNodes(node,test);
            node=node.nextSibling;
        }
    }
 
    testNodes(body,findClass);
    return inClass;
}