fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("API Error: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Users Data:");
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error.message);
  });