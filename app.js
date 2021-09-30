var links = document.querySelector('.links');

console.log(links);

links.addEventListener('click',function(e){
    if(e.target.className == 'box')
    {
        const remBox=e.target;
        links.removeChild(remBox);
    }
})