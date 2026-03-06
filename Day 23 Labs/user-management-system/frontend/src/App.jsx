import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management System</h1>

      <UserForm addUser={addUser} />

      <UserList users={users} />
    </div>
  );
}

export default App;