function getupdate(){
    
    tit=document.getElementById("title").value;
    desc=document.getElementById('description').value;
    if(tit==''){
      alert("Missing title..");
      return ;

    }
    if(desc==''){
      alert("Missing description..");
      return ;

    }
    if(localStorage.getItem('itemJson')==null){
      itemJsonArray=[];
      itemJsonArray.push([tit,desc]);
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
      itemJsonArraystr=localStorage.getItem('itemJson');
      itemJsonArray=JSON.parse(itemJsonArraystr);
      itemJsonArray.push([tit,desc]);
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
      
    }
    update();
    
    document.getElementById("title").value="";
      document.getElementById("description").value="";
}
 
  


  function update(){
      if(localStorage.getItem('itemJson')==null){
     
      itemJsonArray=[];
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
    }
    else{
      itemJsonArraystr=localStorage.getItem('itemJson');
      itemJsonArray=JSON.parse(itemJsonArraystr);
      
    }

    
    let tableBody=document.getElementById('tableBody');
    let str="";
    itemJsonArray.forEach((element, index  )=> {
      str+= ` <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button type="submit " class="bg-primary rounded text-light" onclick="deleted(${index})" >Delete</button></td>
        </tr>`
    });
    tableBody.innerHTML=str;
  }

  var add=document.getElementById("add");
  add.addEventListener("click",getupdate);
  update();


  //delete the list
  function deleted(item){
      itemJsonArraystr=localStorage.getItem('itemJson');
      itemJsonArray=JSON.parse(itemJsonArraystr);
       itemJsonArray.splice(item,1);
      localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
      update();
  }


  //clear the add note

  function cleared(){
    if(confirm("do you really want to clear?")){
    localStorage.clear();
    update();}
  }
  
  