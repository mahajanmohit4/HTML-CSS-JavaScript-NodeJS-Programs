let likecount=1;
 var commentcount=1;
function Handlelikes()
{
    var like=document.querySelector('#likeid');
    like.textContent="like " + likecount;
    likecount++;
}

function Handlecomments()
{
     var uinput=document.querySelector('#inputid').value;
   var divele=document.createElement('div');
    divele.style.display="flex";
    divele.style.marginBottom = "4px";
    divele.style.justifyContent="space-between";
    var child1=document.createElement("div");
    var child2=document.createElement("button");
     child1.textContent=uinput;
     child2.textContent="Delete";
     // create relationship with parent div

     divele.appendChild(child1);
     divele.appendChild(child2);
     const commentbox=document.querySelector('#commentbox');
     commentbox.insertBefore(divele,commentbox.firstChild);
     document.querySelector('#inputid').value="";// claer input

}

