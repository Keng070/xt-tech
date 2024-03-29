let navigaters = document.querySelectorAll("#navigater");

// Add click event listener to each navigater
navigaters.forEach((navigater) => {
  navigater.addEventListener("click", function () {
    // Find the corresponding dropdown for the clicked navigater
    let dropdown = navigater.nextElementSibling;

    // Toggle height between 0 and its natural height
    dropdown.style.height =
      dropdown.offsetHeight === 0 ? `${dropdown.scrollHeight}px` : "0px";
    dropdown.style.transition = "height 0.5s";

    // Toggle chevron icon class
    let chevron = navigater.querySelector(".fa-solid");
    chevron.classList.toggle("fa-chevron-right");
    chevron.classList.toggle("fa-chevron-down");
  });

  // Hide dropdown initially
  let dropdown = navigater.nextElementSibling;
  dropdown.style.height = "0px";
  dropdown.style.transition = "none";
});

let nDropdowns = document.querySelectorAll("#nDropdown")

nDropdowns.forEach((navigater, index) => {
  navigater.addEventListener("click", function () {
    let lists = document.querySelectorAll(".list");
    lists[index].classList.toggle("list-active");
  });
  
});

let menuBtn = document.querySelector("#menuBtn")
let sideMenu  = document.querySelector(".side-menu")

menuBtn.addEventListener("click", function(){
  sideMenu.style.left="0"
  sideMenu.style.position="fixed"
  sideMenu.style.transition="0.2s"


})
function closeSideMenu(){
  
    sideMenu.style.left="-110%"
    sideMenu.style.position="fixed"
    sideMenu.style.transition="0.2s"
  
  
 
}