 let yellowBox=document.getElementById("target");
 let redbox=document.getElementById("box");   
 yellowBox.addEventListener("dragover", handleDragEnter);  
 yellowBox.addEventListener("dragenter",handleDragEnter);
 yellowBox.addEventListener("dragleave", handleDragLeave); 
 yellowBox.addEventListener("drop",handleDrop)
  function handleDragEnter(event){
    event.preventDefault();
    console.log(allowDrop);
  }
  function handleDragLeave(event){
  event.preventDefault()
    console.log(handleDragLeave);
    yellowBox.classList.remove("is-hovered");
  }
  function allowDrop(event) {
        event.preventDefault(); 
        yellowBox.classList.add("is-hovered")
        console.log("event", event);
      }
      
      function handleDrop(event) {
        console.log("handleDrop");
        yellowBox.classList.remove("is-hovered");
        yellowBox.append(box)
      }
       
      