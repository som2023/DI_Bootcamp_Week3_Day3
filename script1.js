 
function world(){
  alert("hello world");
}
setTimeout(world,2000);

const getElemCont = document.getElementById("container");
function helloWorld(){
  const  p = document.createElement('p');
  p.textContent =" hello World";
  deing.appendChild(p);
  // .children.length nous renvoie le nombre 
  if(getElemCont.children.length == 5 ){
    clearInterval(interval);  
  }
};
const interval = setInterval(helloWorld,2000);
const btn = document.getElementById("clear")
btn.addEventListener("click",()=>{
 clearInterval(interval);

});
   
 


