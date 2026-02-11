"use client";
import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({});

    const submit = async () => {
        await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(form),
        });
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
