

function Weather(){

    // let input = document.querySelector("#input").value;
    let cityName = document.querySelector("#input").value;
    let xhr = new XMLHttpRequest();
   
    xhr.onload = () =>{
        // console.log(xhr.responseText);
        
        let rjson = JSON.parse(xhr.responseText);
        domopreation(rjson);
        // console.log(rjson);
    };

    // "https://api.openweathermap.org/data/2.5/weather?appid=5389090798ef1290300162481236affc&units=matric&q=" + cityname
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=5389090798ef1290300162481236affc&units=metric&q=" + cityName;
    
    // let url =
    // "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    // cityName;
    xhr.open("GET" , url);

    
    xhr.send();
   
    




  
}

function domopreation(rjson){

    // console.log(rjson.name);
    console.log(rjson.main.temp_max);
    let name = rjson.name;
    let temp = rjson.main.temp_max;
      
    let parent =   document.querySelector("#parent");

    let newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.innerHTML = name + " temp : " + temp;

    parent.insertBefore(newElement , parent.firstChild);
    document.querySelector("#input").value = "";
}