let readcode=function(){
    let inp=document.querySelector('#userip').value;
    /* alert(inp);
    document.write(inp);
    let pro=prompt(inp);
      if(pro != "" )
      {
          document.write(inp + pro + "girl");
      }
   document.querySelector('#commemtbox').innerHTML=inp; or */

    // to appent input
  /*let cparent=document.querySelector('#commemtbox');
   cparent.innerHTML=inp;
   cparent.appendChild(inp);*/

    // to append it one by one button 
    let sbt=document.createElement('div');
    sbt.textContent=inp;
    let cparent=document.querySelector('#commemtbox');
    cparent.insertBefore(sbt,cparent.firstChild);
  
    
    
    
}