"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // Instruksi 1: Validasi nama
    const namaBersih = nama.trim();
    if (!namaBersih) {
      setError("Nama tidak boleh kosong atau hanya berisi spasi.");
      return;
    }
    if (namaBersih.length < 3) {
      setError("Nama minimal 3 karakter.");
      return;
    }

    setError(""); // Hapus error jika valid
    const namaUrl = namaBersih.replace(/\s+/g, " ");
    router.push(
      `/Kesehatan/PenghitungBMI/` + encodeURIComponent(namaUrl)
    );
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Hai, perkenalkan dirimu</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <span>Nama lengkap</span>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            // required dihapus karena validasi dilakukan manual di JS
            style={{ display: "block", width: "100%", padding: 6 }}
          />
          {error && <span style={{ color: "red", fontSize: 14 }}>{error}</span>}
        </label>

        <button type="submit" style={{ padding: 8 }}>
          Lanjut
        </button>
      </form>
    </main>
  );
}