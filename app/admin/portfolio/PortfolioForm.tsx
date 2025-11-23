"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/UploadImage";

export default function PortfolioForm({ refresh }: any) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<File | null>(null);

  async function submit(e: any) {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", e.target.title.value);
    fd.append("category", e.target.category.value);
    if (img) fd.append("image", img);

    await api.post("/portfolio", fd);
    setOpen(false);
    refresh();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Image</Button>
      </DialogTrigger>
      <DialogTitle className="sr-only">Add Image
      </DialogTitle>
      <DialogContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Add Portfolio Image</h2>
        <form onSubmit={submit} className="space-y-3">
          <Input name="title" placeholder="Title (optional)" />
          <Input className="mb-4" name="category" placeholder="Category (optional)" />

          <UploadImage onChange={setImg} />

          <Button className="w-full">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
