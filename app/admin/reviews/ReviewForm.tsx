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
    const fd = new FormData();
    fd.append("name", e.target.name.value);
    fd.append("role", e.target.role.value);
    fd.append("text", e.target.text.value);
    fd.append("rating", e.target.rating.value);
    if (img) fd.append("image", img);

    await api.post("/reviews", fd);
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
          <h2 className="text-2xl font-bold">Add Review</h2>
          <Input name="name" placeholder="Name" required />
          <Input name="role" placeholder="Role" />
          <Input name="rating" placeholder="Rating 1–5" type="number" required />
          <textarea name="text" placeholder="Review text" className="w-full border p-2 rounded" required />

          <UploadImage onChange={setImg} />

          <Button type="submit" className="w-full">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
