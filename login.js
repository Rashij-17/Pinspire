 const form = document.getElementById("loginform");
    const output = document.getElementById("output");

    // form.addEventListener("submit", function (event) {
    //   event.preventDefault(); // Prevent form from reloading the page

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!name || !email) {
        output.textContent = "Please fill in both fields.";
        output.style.color = "red";
        return;
      }

    //   output.innerHTML = `Hello, <strong>${name}</strong>! Your email is <strong>${email}</strong>.`;
    //   output.style.color = "green";
    // });