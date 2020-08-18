window.addEventListener("load" , ()=>{

});

let callAjax = function() {
    let xhr = new XMLHttpRequest();

    //handle reponse , initilizing
    xhr.onload = () =>{  //dafault value 4 x
        // console.log(xhr.responseText);
        // console.log(xhr.responseXML);
        let obj = JSON.parse(xhr.responseText);
        console.log(obj);
        const data = obj.data;
        domlogic(data);
    }

    xhr.open("GET" , "https://reqres.in/api/users?page=2");
    xhr.send();

    xhr.onerror = () => {
        console.log("Getting error");
    }

    
}
let domlogic = (obj) => {
    let parent = document.querySelector("#parent");
    
    for(let i=0 ; i<obj.length ;i++){
        item = obj[i]
        let newElement = parent.children[0].cloneNode(true);
        parent.insertBefore(newElement, parent.firstChild);

        parent.children[0].innerHTML = item.last_name;
        newElement.innerHTML= item.first_name + " " + item.last_name;
    }

}
// JSON.parse('{"id":1}');
