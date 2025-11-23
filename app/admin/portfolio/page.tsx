"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import PortfolioForm from "./PortfolioForm";
import EditPortfolioForm from "./PortfolioEditForm"; // NEW
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  async function load() {
    const res = await api.get("/portfolio");
    setItems(res.data.items);
  }

  async function remove(id: string) {
    if (!confirm("Delete this image?")) return;
    await api.delete(`/portfolio/${id}`);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <PortfolioForm refresh={load} />
      </div>

      {editing && (
        <EditPortfolioForm data={editing} refresh={load} close={() => setEditing(null)} />
      )}

      <div className="grid grid-cols-4 gap-4">
        {items.map((p: any) => (
          <div key={p._id} className="relative group">
            <img src={p.imageUrl} className="w-full h-48 object-cover rounded-lg" />

            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
              <Button onClick={() => setEditing(p)} className="bg-blue-600 text-white">
                Edit
              </Button>
              <Button variant="destructive" onClick={() => remove(p._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
