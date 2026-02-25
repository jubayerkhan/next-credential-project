"use client";

import { useState } from "react";

export default function ProfileForm({ user }) {
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [loading, setLoading] = useState(false);

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({ name, phone }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Profile updated ✅");
    } else {
      alert("Update failed ❌");
    }
  };

  return (
    <form onSubmit={updateProfile} className="space-y-3 mt-6 flex flex-col items-center">
      <input
        className="input_field"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        className="input_field"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />

      <button
        disabled={loading}
        className="submit_btn"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
}