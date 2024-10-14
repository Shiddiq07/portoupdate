"use client";  // Client-side component

import { useState, useEffect } from 'react';

// Komponen untuk menampilkan setiap item data
const ItemCard = ({ title, companyName, location, startDate, endDate }) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded-md shadow-md my-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>Company: {companyName}</p>
      <p>Location: {location || "N/A"}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </div>
  );
};

// Komponen utama untuk mengambil dan menampilkan data dari API
export default function Work() {
  const [data, setData] = useState([]);  // Menyimpan data dari API
  const [isLoading, setIsLoading] = useState(true);  // Menyimpan status loading

  // Fungsi untuk memuat data dari API
  async function fetchData() {
    try {
      let res = await fetch('/api/work');  // Panggil API
      let result = await res.json();  // Parse hasil respon menjadi JSON
      setData(result.data);  // Simpan data ke state
      setIsLoading(false);  // Set loading menjadi false
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);  // Tetap set loading ke false meskipun error
    }
  }

  // useEffect untuk memanggil fetchData saat komponen pertama kali dimuat
  useEffect(() => {
    fetchData();
  }, []);

  // Render komponen
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-2xl font-bold mb-4">Work List</h2>

      {isLoading ? (  // Jika data masih loading, tampilkan pesan loading
        <p className="text-center">Loading data...</p>
      ) : (
        data.length > 0 ? (  // Jika ada data, tampilkan dengan map
          data.map(item => (
            <ItemCard
              key={item._id}
              title={item.title}
              companyName={item.companyName}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          ))
        ) : (  // Jika tidak ada data, tampilkan pesan kosong
          <p className="text-center">No work data available.</p>
        )
      )}
    </div>
  );
}
