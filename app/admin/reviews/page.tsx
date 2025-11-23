"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ReviewForm from "./ReviewForm";
import EditReviewForm from "./ReviewEditForm"; // NEW
import { Button } from "@/components/ui/button";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(null);

  async function load() {
    const res = await api.get("/reviews");
    setReviews(res.data.reviews);
  }

  async function remove(id: string) {
    if (!confirm("Delete review?")) return;
    await api.delete(`/reviews/${id}`);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <ReviewForm refresh={load} />
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <EditReviewForm data={editing} refresh={load} close={() => setEditing(null)} />
      )}

      <div className="grid gap-4">
        {reviews.map((r: any) => (
          <div key={r._id} className="p-4 bg-white rounded-lg shadow flex items-center gap-4">
            <img src={r.imageUrl} className="w-16 h-16 rounded-full object-cover" />

            <div className="flex-1">
              <p className="font-semibold">{r.name}</p>
              <p className="text-gray-500">{r.role}</p>
              <p className="text-gray-600">{r.text}</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setEditing(r)}>Edit</Button>
              <Button variant="destructive" onClick={() => remove(r._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
