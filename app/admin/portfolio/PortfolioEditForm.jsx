"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function EditPortfolioForm({ data, refresh, close }) {
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(data.imageUrl);

  const [loading, setLoading] = useState(false); // loader

  // Handle new image
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImg(file);
    setPreview(URL.createObjectURL(file));
  };

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    fd.append("title", e.target.title.value);
    fd.append("category", e.target.category.value);
    if (img) fd.append("image", img);

    try {
      await api.put(`/portfolio/${data._id}`, fd);
      refresh();
      close(); // close modal
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={true} onOpenChange={(v) => !loading && close()}>
      <DialogTitle className="sr-only">Edit Portfolio Item</DialogTitle>

      <DialogContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">Edit Portfolio Item</h2>

        <form onSubmit={submit} className="space-y-4">
          <Input name="title" defaultValue={data.title} />
          <Input name="category" defaultValue={data.category} />

          {/* Image Preview */}
          <div className="space-y-2">
            <p className="font-medium">Current Image Preview</p>
            <img
              src={preview}
              className="w-40 h-40 object-cover rounded-lg border"
            />
          </div>

          {/* Upload New Image */}
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Save Button With Loader */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
