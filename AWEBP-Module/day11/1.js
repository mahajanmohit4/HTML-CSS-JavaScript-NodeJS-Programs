console.log("js is running");

let parentBox = document.querySelector("#parentBox");
console.log(parentBox);

addEventListener("load", () => {
    console.log("load");
    /* 
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
 
 
         parent.insertBefore(newElement, parent.firstChild);
 
         parent.children[0].innerHTML = item.title;
         }
         */

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.onreadystatechange = () => {

        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            let obj = JSON.parse(xhr.responseText);
            console.log(xhr.responseText);
            console.log(obj.data);

            printobj(obj.data);
        }

    }


    xhr.send();

});

let printobj = (obj) => {
    let parent = document.querySelector("#parentBox");

    for (let i = 0; i < obj.length; i++) {
        item = obj[i];

        let newElement = parent.children[0].cloneNode(true);
        // parent.children[0].style.display = "flex";
        newElement.style.display = "flex";


        parent.insertBefore(newElement, parent.firstChild);

        parent.children[0].innerHTML = item.last_name;
    }

}




//     Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.