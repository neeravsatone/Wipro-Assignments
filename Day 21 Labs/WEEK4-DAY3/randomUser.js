function getUser() {
  fetch("https://randomuser.me/api/")
    .then(response => {
      if (!response.ok) {
        throw new Error("API Error: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      const user = data.results[0];

      const fullName = user.name.title + " " + user.name.first + " " + user.name.last;
      const email = user.email;
      const picture = user.picture.large;

      document.getElementById("userCard").innerHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <img src="${picture}" width="150">
      `;
    })
    .catch(error => {
      console.error("Error fetching user:", error.message);
    });
}