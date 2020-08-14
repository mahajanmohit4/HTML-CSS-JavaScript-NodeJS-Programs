var count=1;
var count1=1;
function handlelike()
{
     var ele=document.querySelector('#likeid')
     ele.innerHTML="like " + count;
     count++;
     

}
function HandleComment()
{
    var ele1=document.createElement("div")
    ele1.textContent="comment " + count1;// for append assigning value is must
    ele1.style.background="red";
    ele1.style.margin="4px";
     //alert("Just checking");
    let commentParent=document.querySelector('#forcomments'); this is  
    //or line 
   forcomments.appendChild(ele1);
    count1++;
}