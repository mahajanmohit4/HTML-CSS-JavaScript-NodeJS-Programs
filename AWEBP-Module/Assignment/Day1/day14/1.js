

function Weather(){

    // let input = document.querySelector("#input").value;
    let cityName = document.querySelector("#input").value;
    // let xhr = new XMLHttpRequest();
    
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=5389090798ef1290300162481236affc&units=metric&q=" + cityName ;
    

    $.ajax(url).done((data) => {
        console.log(data);
        domopreation(data);
        // dom(data);
    });

   

    // "https://api.openweathermap.org/data/2.5/weather?appid=5389090798ef1290300162481236affc&units=matric&q=" + cityname
    
   
    // "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    // cityName;
    // xhr.open("GET" , url);

    
    // xhr.send();
   
    




  
}

function domopreation(rjson){

    // console.log(rjson.name);
    console.log(rjson.main.temp_max);
    let name = rjson.name;
    let temp = rjson.main.temp_max;
      console.log(name + " temp " + temp);
    // let parent =   document.querySelector("#parent");
    // let parent = $("#parent")


    // const newElement = $("#parent :nth-child(1)").clone(true);

//   newElement.html(data1.name + " " + data1.main.temp_max);

  


    let newElement = $("#parent :nth-child(1)").clone(true);
    // let newElement = parent.children[0].cloneNode(true);
    console.log(newElement);
    newElement.html(name + " temp " + temp );
  
    // newElement.insertBefore($("#parent :nth-child(1)"));
    newElement.insertBefore($("#parent :nth-child(1)"));
    
    

    $("#input").val("");
    // newElement.style.display = "flex";
    // newElement.innerHTML = name + " temp : " + temp;

    // parent.insertBefore(newElement , parent.firstChild);
    // document.querySelector("#input").value = "";
}

function dom(data1){
   const newElement = $("#parent :nth-child(1)").clone(true);

  newElement.html(data1.name + " " + data1.main.temp_max);

  newElement.insertBefore($("#parent :nth-child(1)"));
}