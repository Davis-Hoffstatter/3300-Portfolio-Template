document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookies");

  // Don't show popup if already accepted
  if (localStorage.getItem("cookies-accepted") === "yes") {
    return; // popup stays hidden
  }

  // Show the popup
  popup.style.display = "block";

  // When user clicks Accept
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookies-accepted", "yes");
    popup.style.display = "none";
  });
});
