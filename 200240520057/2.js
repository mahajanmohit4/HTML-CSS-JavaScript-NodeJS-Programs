console.log("js file inculued");
const name = document.getElementById('name');
const email = document.getElementById('email');

const password = document.getElementById('password');
let validEmail = false;

let validUser = false;
let validpassword = false;

function names(){
    console.log("name is blurred");
   
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        // console.log('Your name is valid');
       
        validUser = true;
    }
    else{
        // console.log('Your name is not valid');
       
        validUser = false;
        
    }
}

function emails(){
    console.log("email is blurred");
    
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
       
        validEmail = false;
    }
}




function pass(){
    console.log("password is blurred");
    // (?=.[a-z])(?=.*[A-Z]).{8,}
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = password.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your password is valid');
        validpassword = true;
    }
    else{
        console.log('Your password is not valid');
      
        validpassword = false;
        
    }

}



function Submit(){
    if(validEmail && validUser && validpassword){
        alert("validation successful");
       
    }
    else{ 
        alert("validation is unsucessful");
      
    }

    let user1 = document.querySelector("#user1");
    let email = document.querySelector("#email1");
    let password1 = document.querySelector("#password1");
    
    let containerbox = document.querySelector(".containerbox").cloneNode(true);
   
    user1.innerHTML = name.value;
    email.innerHTML = email.value;
    password1.innerHTML = password.value;
    console.log( containerbox.children[0]);
  
}




