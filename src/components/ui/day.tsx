import type { FC } from "react";

const Day: FC = () => {
  const date = new Date();
  const day = date.getDay();
  const tanggal = date.getDate();
  const bulan = date.getMonth();
  const year = date.getFullYear();
  return (
    <div className="">
      <h1 className="font-bold text-sm text-primary">
        {convertDay(day)}, {tanggal} {getNamaBulan(bulan)} {year}
      </h1>
    </div>
  );
};

function convertDay(day: number) {
  if (day < 0 || day > 6) {
    return "Error : Invalid day type";
  }

  switch (day) {
    case 0:
      return "Senin";
    case 1:
      return "Selasa";
    case 2:
      return "Rabu";
    case 3:
      return "Kamis";
    case 4:
      return "Jumat";
    case 5:
      return "Sabtu";
    case 6:
      return "Minggu";
  }
}

function getNamaBulan(index: number): string {
  const bulanIndo = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return bulanIndo[index] ?? "Bulan tidak valid";
}

export default Day;
