"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import PortfolioForm from "./PortfolioForm";
import EditPortfolioForm from "./PortfolioEditForm.jsx";
import { Button } from "@/components/ui/button";
import { Trash2Icon, Edit, Loader2 } from "lucide-react";

// Shadcn AlertDialog
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
} from "@/components/ui/alert-dialog";

export default function PortfolioPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  // For delete dialog
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function load() {
    const res = await api.get("/portfolio");
    setItems(res.data.items);
  }

  async function confirmDelete() {
    if (!deletingId) return;

    setDeleteLoading(true); // start loader

    try {
      await api.delete(`/portfolio/${deletingId}`);
      load(); // refresh list
    } catch (error) {
      console.error("Failed to delete portfolio item:", error);
    } finally {
      setDeleteLoading(false); // stop loader
      setDeletingId(null); // close modal
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <div className="flex justify-between pb-3 mb-6 border-b-2">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <PortfolioForm refresh={load} />
      </div>

      {editing && (
        <EditPortfolioForm
          data={editing}
          refresh={load}
          close={() => setEditing(null)}
        />
      )}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {items.map((p: any) => (
          <div key={p._id} className="relative group">
            <img
              src={p.imageUrl}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="absolute top-2 right-2 flex gap-2 transition">
              {/* Edit Button */}
              <Button
                variant="outline"
                onClick={() => setEditing(p)}
                className="rounded-full p-2 h-9 w-9"
              >
                <Edit className="h-4 w-4" />
              </Button>

              {/* Delete Confirmation Modal */}
              <AlertDialog
                open={deletingId === p._id}
                onOpenChange={(open) => {
                  if (!open && deletingId === p._id) {
                    setDeletingId(null);
                  }
                }}
              >
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setDeletingId(p._id)}
                    className="rounded-full p-2 h-9 w-9"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>

                {/* Dialog Content */}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your portfolio image and its associated data.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel
                      disabled={deleteLoading}
                      onClick={() => setDeletingId(null)}
                    >
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                      onClick={confirmDelete}
                      disabled={deleteLoading}
                      className="bg-red-600 hover:bg-red-700 flex items-center gap-2"
                    >
                      {deleteLoading && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      Delete
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
