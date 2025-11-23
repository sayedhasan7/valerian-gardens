"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";

export default function AdminContacts() {
  const [data, setData] = useState([]);

  async function load() {
    const res = await api.get("/contact");
    setData(res.data.contacts);
  }

  async function remove(id: string) {
    if (!confirm("Delete this message?")) return;
    await api.delete(`/contact/${id}`);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      <div className="grid gap-4">
        {data.map((c: any) => (
          <div
            key={c._id}
            className="bg-white p-5 rounded-lg shadow space-y-1"
          >
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>
            <p><b>Phone:</b> {c.phone}</p>
            <p><b>Project Type:</b> {c.projectType}</p>
            <p><b>Message:</b> {c.message}</p>

            <Button
              variant="destructive"
              className="mt-3"
              onClick={() => remove(c._id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
