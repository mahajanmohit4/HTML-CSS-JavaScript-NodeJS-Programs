console.log("js is running");

// let parentBox = document.querySelector("#parentBox");
// console.log(parentBox);

// addEventListener("load", () => {

function loading(){
    console.log("load");

    let parent = document.querySelector("#parentBox");
    // parent.children[0].style.display = "flex";
    // console.log("load parent" ,parentBox);
    let list = [
        { id: 1, title: "Javascript" },
        { id: 2, title: "HTML" },
        { id: 2, title: "CSS" },
        { id: 1, title: "DOM" },
        { id: 2, title: "AJAX" },
        { id: 2, title: "XML" },
        { id: 2, title: "JSON" },
    ];



    for (let i = 0; i < list.length; i++) {
        item = list[i];

        let newElement = parent.children[0].cloneNode(true);
        // parent.children[0].style.display = "flex";
        newElement.style.display = "flex";


        // parent.appendChild(newElement);
        parent.insertBefore(newElement, parent.firstChild);

        parent.children[0].innerHTML = item.title;
    }

}
// });