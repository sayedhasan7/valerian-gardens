"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditPortfolioForm({ data, refresh, close }: any) {
    const [img, setImg] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(data.imageUrl); // OLD IMAGE PREVIEW

    // Handle new image selection
    const handleImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImg(file);
        setPreview(URL.createObjectURL(file)); // Live preview
    };

    async function submit(e: any) {
        e.preventDefault();

        const fd = new FormData();
        fd.append("title", e.target.title.value);
        fd.append("category", e.target.category.value);
        if (img) fd.append("image", img);

        await api.put(`/portfolio/${data._id}`, fd);
        refresh();
        close();
    }

    return (
        <Dialog open={true} onOpenChange={close}>
            <DialogTitle className="sr-only">Edit Portfolio Item
            </DialogTitle>
            <DialogContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Edit Portfolio Item</h2>

                <form onSubmit={submit} className="space-y-4">
                    <Input name="title" defaultValue={data.title} />
                    <Input name="category" defaultValue={data.category} />

                    {/* IMAGE PREVIEW */}
                    <div className="space-y-2">
                        <p className="font-medium">Current Image Preview</p>
                        <img
                            src={preview}
                            className="w-40 h-40 object-cover rounded-lg border"
                        />
                    </div>

                    {/* CHANGE IMAGE */}
                    <div>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>

                    <Button className="w-full">Save Changes</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
