let likeCounter = 1;
function Like() {
    
    likeCounter++;
    let btnElement = document.querySelector("#btn-1");
    btnElement.innerHTML = "Like" + likeCounter;

}

function Comments(){

    let userComment = document.querySelector("#input-1").value;

    const newElement = document.querySelector("#ref-id").cloneNode(true);

    // newElement.removeAttribute("id");
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userComment;

    // const newElement = document.createElement("div");
    // // newElement.textContent = userComment;
    
    // newElement.style.padding = "4px";
    // newElement.style.background = "red";
    // newElement.style.border = "2px solid black";
    // newElement.style.margin = "4px";
    // newElement.style.color = "white";
    // newElement.style.display = "flex";
    // newElement.style.justifyContent = "space-between";

    // const child1 = document.createElement("div");
    // child1.textContent = userComment;
   

    // const child2 = document.createElement("button");
    // child2.textContent = "DELETE";
    // newElement.appendChild(child1);
    // newElement.appendChild(child2);

   const commentBox = document.querySelector(".comment");

   commentBox.insertBefore(newElement, commentBox.lastChild);

//    commentBox.appendChild(newElement);
    document.querySelector("#input-1").value = "";
}