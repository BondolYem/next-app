import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: any;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();

  const sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
