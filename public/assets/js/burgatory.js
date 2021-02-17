const { response } = require("express");

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const eatBtns = document.querySelectorAll(".eat-button");

  if (eatBtns) {
    eatBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        // const devour = e.target.getAttribute("data-devour");

        // const newState = {
        //   devoured: devour,
        // };

        fetch(`api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "applicaton/json",
            "Content Type": "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            console.log(`Burger ${id} logged as eaten.`);
            location.reload();
          } else {
            alert(
              "We're sorry. Something gave our page indigestion. Hold tight while we grab the peptobismol."
            );
          }
        });
      });
    });
  }

  const burgerBtn = document.getElementById("burgerBtn")

  if (burgerBtn) {
    burgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newBurger = {
        burgerName: document.getElementById("orderForm").value.trim()
      }
    })
    
  }

});
