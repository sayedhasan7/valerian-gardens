"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/UploadImage";

export default function ReviewForm({ refresh }: any) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<File | null>(null);

  async function submit(e: any) {
    e.preventDefault();

    await api.post("/reviews", {
      name: e.target.name.value,
      role: e.target.role.value,
      text: e.target.text.value,
      rating: e.target.rating.value,
      status: e.target.status.value,
    });
    setOpen(false);
    refresh();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Review</Button>
      </DialogTrigger>
      <DialogTitle className="sr-only">Add Review
      </DialogTitle>
      <DialogContent className="p-6 space-y-4">
        <form onSubmit={submit} className="space-y-3">
          <Input name="name" placeholder="Name" required />
          <Input name="role" placeholder="Role" />
          <Input name="rating" placeholder="Rating" type="number" min={1} max={5} required />

          <textarea name="text" placeholder="Review text" className="w-full border p-2 rounded" required />

          {/* STATUS */}
          <select name="status" className="border p-2 rounded w-full">
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>

          <Button type="submit" className="w-full">Save</Button>
        </form>

      </DialogContent>
    </Dialog>
  );
}
