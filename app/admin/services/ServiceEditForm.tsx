// app/admin/services/ServiceEditForm.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { X } from "lucide-react";

export default function EditServiceForm({ data, close, refresh }: any) {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(data.imageUrl || null);
  const [features, setFeatures] = useState<string[]>(data.features || [""]);

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
      await api.put(`/services/${data._id}`, fd);
      if (refresh) refresh();
      if (close) close();
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Update failed");
    }
  }

  return (
    <Dialog open={true} onOpenChange={close}>
       <DialogTitle className="sr-only">Edit Service
      </DialogTitle>
      <DialogContent className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold">Edit Service</h2>

        <form onSubmit={submit} className="space-y-4">
          <Input name="title" defaultValue={data.title} required />
          <textarea
            name="description"
            defaultValue={data.description}
            rows={4}
            className="w-full border rounded p-2"
            required
          />

          {preview && (
            <img src={preview} className="w-full h-48 object-cover rounded border" />
          )}

          <input type="file" name="image" accept="image/*" onChange={handleImage} className="block w-full border p-2 rounded" />

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

          <Button className="w-full">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
