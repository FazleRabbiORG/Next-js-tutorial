import Link from "next/link";
import { useState } from "react";
function Users() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const loadUsers = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const handleAddUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-Type": "application/json" },
    });
    loadUsers();
  };

  return (
    <div>
      <h1>All users</h1>
      <h1></h1>
      <div>
        <input onChange={(e) => setUser(e.target.value)} type="text" />
        <button onClick={handleAddUser}>Add user</button>
      </div>
      <button onClick={loadUsers}> Load users</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>
              {user.id}: {user.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
