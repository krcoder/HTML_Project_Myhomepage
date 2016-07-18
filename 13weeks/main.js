function allowDrop(e){
    e.preventDefault();
}
function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("Text", e.target.id);
}

function handleDrop(e) {
    e.preventDefault();
    var src = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(src));
}