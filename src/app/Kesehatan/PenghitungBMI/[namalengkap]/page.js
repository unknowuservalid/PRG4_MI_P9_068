"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; // Instruksi 5
import { hitungBMI } from "@/lib/bmi"; // Instruksi 2

export default function Page() {
  const params = useParams();
  const nama = decodeURIComponent(params.namalengkap).replaceAll("-", " ");

  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setHasil(hitungBMI(Number.parseFloat(berat), Number.parseFloat(tinggi)));
  }

  // Instruksi 4: Fungsi Reset
  function handleReset() {
    setBerat("");
    setTinggi("");
    setHasil(null);
  }

  return (
    <main style={{ maxWidth: 360, margin: "40px auto", padding: "0 16px" }}>
      <h1>Halo, {nama}</h1>
      <p>Silakan masukkan berat badan dan tinggi kamu!</p>

      {/* Instruksi 5: Link ganti nama */}
      <p style={{ marginBottom: 16 }}>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Bukan kamu? Ganti nama
        </Link>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <label>
          <label htmlFor="berat">Berat (kg)</label>
          <input
            type="number"
            step="any"
            min="1"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        <label>
          <label htmlFor="tinggi">Tinggi (cm)</label>
          <input
            type="number"
            step="any"
            min="1"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
            style={{ display: "block", width: "100%", padding: 6 }}
          />
        </label>

        {/* Container untuk tombol Hitung & Reset */}
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" style={{ padding: 8, flex: 1 }}>
            Hitung
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{ padding: 8, flex: 1, backgroundColor: "#eee", border: "1px solid #ccc" }}
          >
            Reset
          </button>
        </div>
      </form>

      {hasil && (
        <p style={{ marginTop: 16 }}>
          BMI kamu: <strong>{hasil.bmi}</strong>{" "}
          {/* Instruksi 3: Warna teks dinamis berdasarkan kategori */}
          <span style={{ color: hasil.warna, fontWeight: "bold" }}>
            ({hasil.kategori})
          </span>
        </p>
      )}
    </main>
  );
}