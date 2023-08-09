window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();

    let catPage = document.getElementById("cats");
    // catPage.setAttribute("class", "hidden");
    let dogPage = document.getElementById("dogs");
    //  dogs.setAttribute("class", "hidden");
    let notListed = document.getElementById("not-listed");
    // notListed.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animal").value;
    const cats = "cats";

    if (animal === cats) {
      catPage.removeAttribute("class");
    } else if (animal === "dogs") {
      dogPage.removeAttribute("class");
    } else {
      notListed.removeAttribute("class");
    }
  };
};
