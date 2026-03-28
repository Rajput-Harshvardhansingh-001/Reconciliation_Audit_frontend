import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const CsvUpload = () => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  if (!selectedFile) return;

  const fileName = selectedFile.name.toLowerCase();

  // ✅ Allow CSV and XLSX
  if (!fileName.endsWith(".csv") && !fileName.endsWith(".xlsx")) {
    alert("Only CSV or XLSX files are allowed!");
    return;
  }

  // ✅ Size check (50MB)
  const maxSize = 50 * 1024 * 1024;
  if (selectedFile.size > maxSize) {
    alert("File size must be less than 50MB!");
    return;
  }

  setFile(selectedFile);
};

  // Upload API call
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/upload", // change according to your backend
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // IMPORTANT for session
        }
      );

      if (response.status === 200) {
        debugger;
        alert("File uploaded successfully!");
        setFile(null);
      }

    } catch (error) {
        debugger;
      if (error.response) {
        alert("Upload failed: " + error.response.data);
      } else {
        alert("Server not reachable");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-96">
      <h2 className="text-lg font-bold mb-3">Upload CSV File</h2>

      <input
  type="file"
  accept=".csv, .xlsx"
  onChange={handleFileChange}
  className="mb-3"
/>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {file && (
        <p className="text-sm mt-2">
          Selected: {file.name}
        </p>
      )}
    </div>
  );
};

export default CsvUpload;