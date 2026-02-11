"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  const login = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <form onSubmit={login} className="p-6 space-y-2 flex flex-col max-w-3xl mx-auto">
      <input className="input_field" name="email" placeholder="Email" />
      <input className="input_field" name="password" type="password" placeholder="Password" />
      <button className="submit_btn" type="submit">Login</button>
    </form>
  );
}
