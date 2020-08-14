 let likecount=1;
 var commentcount=1;
function Handlelikes()
{
    var ele1=document.querySelector('#likeid')
    ele1.textContent="Like " + likecount; // or
    //ele1.innerHTML="Like " + likecount;
    likecount++;
}
function Handlecomments()
{
      var ele2= document.querySelector('#commentid') // for button count
       ele2.innerHTML="comment" + commentcount;
       commentcount++;
    // commentparent.textcontent=ele2.innerHTML;
     //commentparent.appendChild(ele2);
          
    // var ele3=document.createElement('div') // to show it in another div
    //  ele3.textContent="Comment " + commentcount;
    //  let commentparent=document.querySelector('#forcomment')
    //  commentparent.appendChild(ele3);
    //  commentcount++;

     var ip=document.querySelector('#userip').value;// to  show user input in comment box
      const newele=document.createElement('div');
     newele.textContent=ip;

     newele.style.background = "royalblue"; // values must be in double quotes or single quote
     newele.style.color = "white";
     newele.style.margin = "4px";

     const commentparent=document.querySelector('#forcomment');
     commentparent.insertBefore(newele,commentparent.firstChild);
     
     document.querySelector('#userip').value=""; // to clean the input box

     
}