"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UploadImage({ onChange }: any) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    onChange(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} className="mb-2" />

      {preview && (
        <img src={preview} className="w-32 h-32 object-cover rounded-lg border" />
      )}
    </div>
  );
}
