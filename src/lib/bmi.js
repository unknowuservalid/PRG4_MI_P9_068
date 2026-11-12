export function hitungBMI(beratKg, tinggiCm) {
  const m = tinggiCm / 100;
  const bmi = beratKg / (m * m);

  let kategori;
  let warna;

  if (bmi < 18.5) {
    kategori = "Berat badan kurang";
    warna = "blue"; // instruksi 3: Warna biru
  } else if (bmi < 25) {
    kategori = "Normal";
    warna = "green"; // instruksi 3: Warna hijau
  } else if (bmi < 30) {
    kategori = "Berat badan berlebih";
    warna = "orange"; // instruksi 3: Warna kuning/orange
  } else {
    kategori = "Obesitas";
    warna = "red"; // Instruksi 3: Warna merah
  }

  return { bmi: bmi.toFixed(1), kategori, warna };
}

