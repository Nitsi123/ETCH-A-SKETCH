function constructGrid(size){
container.setAttribute("style", `display: grid; grid-template-columns: repeat(${size},1fr)`);
    for(let i =0; i< size*size; i++)
    {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        childDiv.addEventListener("mouseover", ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);

            childDiv.setAttribute("style", `background-color: #${randomColor};`);
        })
        container.appendChild(childDiv);

    }
}

function clearGrid(parentNode){
    const childNodeList = Array.from(parentNode.childNodes)
    childNodeList.forEach(element => {
        parentNode.removeChild(element);
        
    });
}


// Initially create a grid 0f size 16x16
const container = document.querySelector(".main-container");
const button = document.querySelector(".button");

constructGrid(16);

button.addEventListener("click", ()=>{
    size = prompt("Enter new size");
    if (size == "")
    {
        alert("enter a size between 1 & 64");
    }
    else if (size < 1 || size > 64)
    {
        alert("enter a size between 1 & 64");
    }
    else{
        clearGrid(container);
        constructGrid(size);
    }
    

});
