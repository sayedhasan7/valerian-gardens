"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadImage from "@/components/UploadImage";
import { Loader2 } from "lucide-react";

export default function PortfolioForm({ refresh }) {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(null);

  // loader state
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();

    setLoading(true); // start loader

    const fd = new FormData();
    fd.append("title", e.target.title.value);
    fd.append("category", e.target.category.value);
    if (img) fd.append("image", img);

    try {
      await api.post("/portfolio", fd);
      refresh();
      setOpen(false);
    } catch (error) {
      console.error("Error saving portfolio:", error);
    } finally {
      setLoading(false); // stop loader
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !loading && setOpen(v)}>
      <DialogTrigger asChild>
        <Button>Add Image</Button>
      </DialogTrigger>

      <DialogTitle className="sr-only">Add Image</DialogTitle>

      <DialogContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Add Portfolio Image</h2>

        <form onSubmit={submit} className="space-y-3">
          <Input name="title" placeholder="Title (optional)" />

          <Input
            className="mb-4"
            name="category"
            placeholder="Category (optional)"
          />

          <UploadImage onChange={setImg} />

          {/* Save Button With Loader */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
