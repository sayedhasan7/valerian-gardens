"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("login render")

  async function submit(e) {
    console.log("object")
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      console.log(res.data);

      const token = res.data.token;

      // --------------------------------
      // Save JWT token in sessionStorage
      // --------------------------------
      sessionStorage.setItem("token", token);
      router.push("/admin/reviews");
    } catch (err) {
      console.log(err)
      alert("Invalid login",err);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Admin Login</h2>

        <Input
          placeholder="Email"
          className="mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="w-full">Login</Button>
      </form>
    </div>
  );
}
