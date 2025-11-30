// app/admin/services/page.tsx
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import ServiceForm from "./ServiceForm";
import EditServiceForm from "./ServiceEditForm";
import { Button } from "@/components/ui/button";
import { Edit, Trash2Icon } from "lucide-react";

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

export default function ServicesAdmin() {
  const [services, setServices] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  // State to hold the ID of the service pending deletion
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function load() {
    try {
      const res = await api.get("/services");
      setServices(res.data.services || []);
    } catch (err) {
      console.error("Failed to load services:", err);
      setServices([]);
    }
  }

  // New function to handle the actual deletion after confirmation
  async function confirmDelete() {
    if (!deletingId) return;

    try {
      await api.delete(`/services/${deletingId}`);
      load(); // Refresh the list
    } catch (err) {
      alert("Delete failed");
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
        <h1 className="text-3xl font-bold">Services</h1>
        <ServiceForm refresh={load} />
      </div>

      {editing && (
        <EditServiceForm
          data={editing}
          close={() => setEditing(null)}
          refresh={load}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s._id} className="bg-white shadow p-4 rounded-lg space-y-3">
            {s.imageUrl && (
              <img src={s.imageUrl} className="w-full h-40 object-cover rounded-lg" alt={`Image for ${s.title}`} />
            )}
            <h2 className="font-bold text-lg">{s.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-3">{s.description}</p>

            <div className="flex gap-3 mt-2">
              {/* Edit Button */}
              <Button onClick={() => setEditing(s)} className="p-2 h-9 w-9 rounded-full">
                <Edit className="h-4 w-4" />
              </Button>

              {/* Delete Confirmation Modal */}
              <AlertDialog open={deletingId === s._id} onOpenChange={(open) => {
                // If closing and it was open for this item, clear the ID
                if (!open && deletingId === s._id) {
                    setDeletingId(null);
                }
              }}>
                {/* Trigger Button */}
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    onClick={() => setDeletingId(s._id)}
                    className="p-2 h-9 w-9 rounded-full"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                
                {/* Modal Content */}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Service Deletion</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to permanently delete the service: **{s.title}**? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDeletingId(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
                      Yes, Delete Service
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