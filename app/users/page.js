"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const skeletonRows = users.length; // number of rows to show while loading

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: skeletonRows }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="border px-4 py-2 bg-gray-300 h-6"></td>
                  <td className="border px-4 py-2 bg-gray-300 h-6"></td>
                  <td className="border px-4 py-2 bg-gray-300 h-6"></td>
                  <td className="border px-4 py-2 bg-gray-300 h-6"></td>
                </tr>
              ))
            : users.length === 0
            ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">No users found.</td>
                </tr>
              )
            : users.map((user) => (
                <tr key={user.id} className="odd:bg-white even:bg-gray-100">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.phone || "-"}</td>
                  <td className="border px-4 py-2">
                    {new Date(user.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}