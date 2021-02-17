

document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const eatBtns = document.querySelectorAll(".eat-button");

    eatBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        // const devour = e.target.getAttribute("data-devour");

        // const newState = {
        //   devoured: devour,
        // };

        fetch(`api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
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
  

  const burgerBtn = document.getElementById("burgerBtn");

    burgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newBurger = {
        burgerName: document.getElementById("orderForm").value.trim(),
      };
      
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById("orderForm").value = "";

        // Reload the page so the user can see the new quote
        console.log("Burger loaded. Order up!");
        location.reload();
      });
    });
});
