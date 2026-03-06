import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })
      .then((res) => res.json())
      .then((data) => {
        addUser(data);
        setName("");
      });
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;