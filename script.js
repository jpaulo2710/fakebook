const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((button) => {
  let likesCount = 0;
  button.addEventListener("click", () => {
    likesCount++;
    const likesCountElement = button.parentElement.nextElementSibling;
    likesCountElement.textContent = `${likesCount} curtida${
      likesCount > 1 ? "s" : ""
    }`;
  });
});

function liked(description) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer token" },
    body: JSON.stringify({ document: "07938438026", description: description}),
  };
  fetch("http://localhost:5000?url=https://empathetic-bear-bn867b-dev-ed.trailblaze.my.salesforce.com/services/apexrest/trend", requestOptions)
    .then((response) => console.log(response));
}
