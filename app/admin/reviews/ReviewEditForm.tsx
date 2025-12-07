"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditReviewForm({ data, refresh, close }: any) {
    const [img, setImg] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(data.imageUrl); // EXISTING IMAGE

    // HANDLE FILE CHANGE
    const handleImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImg(file);
        setPreview(URL.createObjectURL(file)); // LIVE PREVIEW
    };

    async function submit(e: any) {
        e.preventDefault();
        await api.put(`/reviews/${data._id}`, {
            name: e.target.name.value,
            role: e.target.role.value,
            text: e.target.text.value,
            rating: e.target.rating.value,
            status: e.target.status.value,
        });
        refresh();
        close();
    }

    return (
        <Dialog open={true} onOpenChange={close}>
            <DialogTitle className="sr-only">Edit Review
            </DialogTitle>
            <DialogContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Edit Review</h2>

                <form onSubmit={submit} className="space-y-4">
                    <Input name="name" defaultValue={data.name} required />
                    <Input name="role" defaultValue={data.role} />
                    <Input name="rating" type="number" defaultValue={data.rating} min={1} max={5} required />
                    <textarea
                        name="text"
                        defaultValue={data.text}
                        className="w-full border rounded p-2"
                        required
                    />

                    <select name="status" defaultValue={data.status} className="border p-2 rounded w-full">
                        <option value="published">Published</option>
                        <option value="unpublished">Unpublished</option>
                    </select>


                    {/* CHANGE IMAGE */}
                    {/* <div>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div> */}

                    <Button className="w-full">Save Changes</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
