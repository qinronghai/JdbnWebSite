// Initialize for the first image;
document.querySelector(".pactive").firstElementChild.style.transition = "none";
document.querySelector(".pactive").firstElementChild.style.opacity = "1";

let container = document.querySelector(".historys");

container.addEventListener("click", function (event) {
  let ppanel = event.target;
  // After mouse click, get the previous elem that contains the 'pactive' class.
  let previousActivated = document.querySelector(".pactive");

  if (ppanel.className != "ppanel") return;

  // Set <h3> style: in order to the effect of Gradually show.
  previousActivated.firstElementChild.style.opacity = "0";
  previousActivated.firstElementChild.style.visibility = "hidden";

  // Remove the  PreviousActivated's 'pactive' class.
  previousActivated.classList.remove("pactive");

  // Adds the 'pactive' class to the current mouse click element.
  ppanel.classList.add("pactive");

  // Restores the <h3> text style under the currently clicked element.
  ppanel.firstElementChild.style.visibility = "visible";
  setTimeout(() => {
    ppanel.firstElementChild.style.opacity = "1";
  }, 500);
});
