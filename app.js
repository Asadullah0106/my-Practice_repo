let div = document.querySelector(".container");
let para = document.querySelector("p");


para.addEventListener('dragstart', function(e){
    e.dataTransfer.setData('Text', e.target.id);
})

div.addEventListener('dragover', function(e){
    e.preventDefault();
})

div.addEventListener('drop', function(e){
    let p = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(p));
})