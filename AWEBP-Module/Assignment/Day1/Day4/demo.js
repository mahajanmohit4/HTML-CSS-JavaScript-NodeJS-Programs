// function demo()
// {
//     alert('External css');
// }
let counter=1;

function increment()
{
  let counterele=document.querySelector("#counterid")// here id will go in counterele
  
  counter=counter+1;
       counterele.innerHTML=counter;
       
      
    //   counterele=document.write("counterele.innerHTML")
}
function decrement()
{
  let counterele=document.querySelector("#counterid")
      counter=counter-1;
      counterele.innerHTML=counter;
}
