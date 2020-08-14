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
      var newele=document.querySelector('#ref').cloneNode(true);// clone the node here whose id is ref
      newele.removeAttribute("id");
      newele.style.visibility="visible";// this is use to make visibility ON which we have
      // make hidden in html
      newele.children[0].textContent=uinput;
      const comment=document.querySelector('#commentbox');// to add it to coomentbox div
      comment.insertBefore(newele,comment.firstChild);//
      document.querySelector('#inputid').value=""; // clear input
}

