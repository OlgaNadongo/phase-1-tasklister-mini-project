document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
   const form=document.querySelector("#create-task-form")
   const input=document.querySelector("#new-task-description")
   const listItems=document.querySelector("#tasks")

   const divList=document.querySelector("#list")

   form.addEventListener("submit", function (e){
    e.preventDefault();
    //create a new li for the Todo
    const ul= divList.querySelector("ul")
    const li=document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)

   console.log(li)
   
   })
   console.log("submit me")



});
