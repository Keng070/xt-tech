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

let nDropdown = document.querySelectorAll(".item");

nDropdown.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    this.classList.toggle("active");
  })
});