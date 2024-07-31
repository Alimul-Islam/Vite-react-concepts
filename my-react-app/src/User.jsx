import { useEffect, useState } from "react";

export default function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <p> User: {users.length}</p>
      <p>User Name: {users.map((user) => user.name)}</p>
      <p>User Email: {users.map((user) => user.email)}</p>
    </div>
  );
}
