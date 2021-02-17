document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const eatBtns = document.querySelectorAll(".eat-button");

  eatBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      fetch(`api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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

    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById("orderForm").value = "";
      console.log("Burger loaded. Order up!");
      location.reload();
    });
  });

  const trashBtn = document.querySelectorAll(".delete-burger");

  trashBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        console.log(`Burger no. ${id} trashed.`);
        location.reload();
      });
    });
  });
});
