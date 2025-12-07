"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ReviewForm from "./ReviewForm";
import EditReviewForm from "./ReviewEditForm";
import { Button } from "@/components/ui/button";
import { Trash2Icon, Edit } from "lucide-react";

// Import Shadcn AlertDialog components
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"; // Ensure the path is correct

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(null);
  // State to hold the ID of the review pending deletion
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function load() {
    const res = await api.get("/reviews");
    setReviews(res.data.reviews);
  }

  // New function to handle the actual deletion after confirmation
  async function confirmDelete() {
    if (!deletingId) return;

    try {
      await api.delete(`/reviews/${deletingId}`);
      // Refresh the list after successful deletion
      load();
    } catch (error) {
      console.error("Failed to delete review:", error);
    } finally {
      // Always close the dialog and reset the ID
      setDeletingId(null);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between pb-3 mb-6 border-b-2">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <ReviewForm refresh={load} />
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <EditReviewForm data={editing} refresh={load} close={() => setEditing(null)} />
      )}

      <div className="grid gap-4">
        {reviews.map((r: any) => (
          <div key={r._id} className="p-4 bg-white rounded-lg shadow flex items-start gap-4">

            <div className="flex-1">
              <p className="font-semibold">{r.name}</p>
              <p className="text-gray-500 text-sm mb-1">{r.role}</p>
              <p className="text-gray-600">{r.text}</p>

              <p className="mt-2 text-xs">
                Status:
                <span className={`font-semibold ml-1 ${r.status === "published" ? "text-green-600" : "text-red-500"
                  }`}>
                  {r.status}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {/* Publish / Unpublish */}
              <Button
                variant={r.status === "published" ? "default" : "outline"}
                onClick={async () => {
                  await api.put(`/reviews/${r._id}`, {
                    ...r,
                    status: r.status === "published" ? "unpublished" : "published",
                  });
                  load();
                }}
              >
                {r.status === "published" ? "Unpublish" : "Publish"}
              </Button>

              {/* Edit */}
              <Button onClick={() => setEditing(r)} className="p-2 h-9 w-9 rounded-full">
                <Edit className="h-4 w-4" />
              </Button>

              {/* Delete Confirmation Modal */}
              <AlertDialog open={deletingId === r._id} onOpenChange={(open) => {
                // If closing and it was open for this item, clear the ID
                if (!open && deletingId === r._id) {
                    setDeletingId(null);
                }
              }}>
                {/* Trigger Button */}
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setDeletingId(r._id)}
                    className="p-2 h-9 w-9 rounded-full"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                
                {/* Modal Content */}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Review Deletion</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will permanently remove the review by **{r.name}**. Are you sure you want to proceed?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDeletingId(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
                      Yes, Delete Review
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}