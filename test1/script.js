var jsonData = {
    tab1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    tab2: "has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    tab3: "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    tab4: "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
}

var currentIndex = 0;

var tabs = Object.keys(jsonData);
var tabContainer = document.querySelector('.tabs');
var currentIndex = 0;


for(let i=0;i<tabs.length;i++){
    var span = document.createElement('span');
    span.classList.add('tab-item');
    span.setAttribute('tab-index', 0);
    span.setAttribute('normal-index', i);
    span.setAttribute('aria-label', tabs[i]);
    span.innerText = tabs[i];
    tabContainer.appendChild(span);
}

var all_tabs = document.querySelectorAll('.tab-item');
// console.log('all_tabs', all_tabs);
// for(let i=0;i< all_tabs.length;i++){
    all_tabs[currentIndex].classList.add('active');
    document.querySelector('.content').innerText = Object.values(jsonData)[currentIndex];
    // all_tabs[i].onclick = function(e){
    //     e.stopPropagation();
    //     e.preventDefault();
    //     currentIndex = i;
    //     all_tabs.forEach((innerTabs)=>{
    //         innerTabs.classList.remove('active');
    //     })
    //     all_tabs[i].classList.add('active');
    //     document.querySelector('.content').innerText = Object.values(jsonData)[i];
    // }
// }


document.addEventListener('click', function(e){
    if(e.target.classList.contains('tab-item')){
        var index = e.target.getAttribute('normal-index');
        if(index || index===0){
            currentIndex = index;
            all_tabs.forEach((innerTabs)=>{
                innerTabs.classList.remove('active');
            })
            all_tabs[index].classList.add('active');
            document.querySelector('.content').innerText = Object.values(jsonData)[index];
        }
        
    }
});

document.addEventListener('keyup', function(e){
    if(e.keyCode === 37){
        currentIndex = currentIndex - 1;
        
    }else if(e.keyCode === 39){
        currentIndex = currentIndex + 1;
    } else if(e.keyCode === 69){ //e--> end
        currentIndex = tabs.length-1;
    } else if(e.keyCode === 72){ //h--> home
        currentIndex = 0;
    }
    if(currentIndex>=0 && currentIndex <= all_tabs.length-1){
        all_tabs.forEach((innerTabs)=>{
            innerTabs.classList.remove('active');
        })
        all_tabs[currentIndex].classList.add('active');
        document.querySelector('.content').innerText = Object.values(jsonData)[currentIndex];
    }
});


