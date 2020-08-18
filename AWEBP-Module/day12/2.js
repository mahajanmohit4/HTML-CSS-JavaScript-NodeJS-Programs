
let callAjax = ()=>{

    let xhr = new XMLHttpRequest();

    xhr.onload = () =>{
        // console.log(xhr.responseText);
        let rjson = JSON.parse(xhr.responseText);
        // console.log(rjson);
        demojson(rjson);
    };

    xhr.open("GET" , "https://fakerestapi.azurewebsites.net/api/Authors");
    
    xhr.send();
}

function demojson(rjson){
    console.log(rjson);
    let parent = document.querySelector("#parent");

    for(let i=0 ; i<rjson.length ; i++){
        let item = rjson[i];
        let newElemet = parent.children[0].cloneNode(true);
        parent.insertBefore(newElemet , parent.firstChild);
        // newElemet.innerHTML = "Mohit";
        newElemet.innerHTML = item.FirstName + " " + item.LastName;
    }

   
} 

let callAjaxXML = () =>{
    xhr = new XMLHttpRequest();

    xhr.open("GET" , "https://fakerestapi.azurewebsites.net/api/Authors");
    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () =>{
    
        let rxml = xhr.responseXML;
        // console.log(rxml);
        demoxml(rxml);
    };



    xhr.send();
}

function demoxml(rxml){
    let parent = document.querySelector("#parent");
    // console.log(rxml);
    // console.log(rxml.querySelectorAll("ArrayOfAuthor").children[0])
 
    let parentElement = rxml.querySelector("ArrayOfAuthor");
    // console.log(parentElement.children);
    // console.log(rxml.querySelectorAll("Author"));
    let child = rxml.querySelectorAll("Author");
    console.log(child[1].children[0]);

    for (let i = 0; i < child.length; i++) {
        const item = child[i];
         let a = child[i].children[0].innerHTML;
         let b = child[i].children[3].innerHTML;
        // console.log(item);
        // console.log(a);
        let newElemet = parent.children[0].cloneNode(true);
        parent.insertBefore(newElemet , parent.firstChild);

        newElemet.innerHTML = a + " " + b;

        
        
    }
}