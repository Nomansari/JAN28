// 1. Selecting Elements
function selectElements() {
  document.getElementById("byId").style.color = "red";
  document.getElementById("byId").textContent= "won't select";
  document.getElementsByClassName("byClass")[0].style.color = "blue";
  document.getElementsByTagName("p")[2].style.color = "green";
  document.querySelector("p").style.fontWeight = "bold";
  alert("Check colors of paragraphs 👀");
} 

// 2. Changing Content
function changeContent() {
  document.getElementById("changeText").textContent = "New Text!";
  document.getElementById("changeText").style.color="green";  
}

// 3. Changing Styles
function changeStyle() {
  let p = document.getElementById("styleMe");
  p.style.color = "white";
  p.style.backgroundColor = "purple";
  p.style.padding = "10px";
}





// 4. Events

// document.getElementById("eventBtn").addEventListener("click", function () {
//   document.getElementById("eventMsg").textContent = "Button Clicked!";
// });


let a = document.getElementById("eventBtn");

let b = document.getElementById("eventMsg");

a.addEventListener("click", function(){
  b.textContent="button click"


})





// 5. Creating & Adding Elements
function addElement() {
  let newPara = document.createElement("p");
  newPara.textContent = "I'm new here!";
  document.getElementById("container").appendChild(newPara);
}

// 6. Removing Elements
function removeElement() {
  document.getElementById("removeMe").remove();
}

// 7. Changing Attributes
function changeAttribute() {
  let img = document.getElementById("myImage");
  img.setAttribute("src", "https://via.placeholder.com/150/ff0000");
  img.setAttribute("width", "150");
}

// 8. DOM Tree Navigation
function navigateDOM() {
  let child = document.getElementById("child1");
  alert(
    "Parent ID: " +
      child.parentNode.id +
      "\nNext Sibling: " +
      child.nextElementSibling.textContent
  );
}

// 9. Forms & Input
function showInput() {
  let val = document.getElementById("name").value;
  document.getElementById("msg").textContent = "Hello " + val + "!";
}
