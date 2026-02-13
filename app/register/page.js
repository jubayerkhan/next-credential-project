"use client";
import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({});

    const submit = async () => {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        console.log("API response:", data);

        if (!res.ok) {
            alert("Error saving user");
            return;
        }

        alert("Registered!");
    };


    return (
        <div className="p-6 space-y-2 flex flex-col max-w-3xl mx-auto">
            <input className="input_field" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input_field" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="input_field" placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
            <input className="input_field" type="password" placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })} />
            <button className="submit_btn" onClick={submit}>Register</button>
        </div>
    );
}
