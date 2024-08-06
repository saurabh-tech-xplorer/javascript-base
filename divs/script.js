document.querySelector('.container').addEventListener('click', function(e){
    e.stopPropagation();
    alert(e.target.innerText.split('\n')[0]);
})