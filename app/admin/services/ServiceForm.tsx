// app/admin/services/ServiceForm.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { Cross, X } from "lucide-react";

export default function ServiceForm({ refresh }: any) {
  const [open, setOpen] = useState(false);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([""]);

  function handleImage(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgFile(file);
    setPreview(URL.createObjectURL(file));
  }

  function addFeature() {
    setFeatures((s) => [...s, ""]);
  }

  function updateFeature(i: number, val: string) {
    setFeatures((s) => {
      const copy = [...s];
      copy[i] = val;
      return copy;
    });
  }

  function removeFeature(i: number) {
    setFeatures((s) => s.filter((_, idx) => idx !== i));
  }

  async function submit(e: any) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", e.target.title.value);
    fd.append("description", e.target.description.value);
    fd.append("features", JSON.stringify(features));
    if (imgFile) fd.append("image", imgFile);

    try {
      await api.post("/services", fd);
      setOpen(false);
      setImgFile(null);
      setPreview(null);
      setFeatures([""]);
      if (refresh) refresh();
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Create failed");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Service</Button>
      </DialogTrigger>
      <DialogTitle className="sr-only">Add New Service
      </DialogTitle>
      <DialogContent className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold">Add New Service</h2>

        <form onSubmit={submit} className="space-y-4">
          <Input name="title" placeholder="Service Title" required />
          <textarea
            name="description"
            rows={4}
            placeholder="Service description..."
            className="w-full border rounded p-2"
            required
          />

          {preview && (
            <img src={preview} className="w-full h-48 object-cover rounded border" />
          )}

          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={handleImage}
            className="block w-full border p-2 rounded"
          />

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            {features.map((f, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Input
                  value={f}
                  placeholder="Feature point"
                  onChange={(e) => updateFeature(i, e.target.value)}
                />
                {features.length > 1 && (
                  <Button type="button" variant="destructive" onClick={() => removeFeature(i)}>
                    <X/>
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" onClick={addFeature}>
              + Add Feature
            </Button>
          </div>

          <Button className="w-full">Save Service</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
