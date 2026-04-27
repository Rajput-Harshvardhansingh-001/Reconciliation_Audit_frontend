import React, { useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import * as XLSX from "xlsx";
axios.defaults.withCredentials = true;

const CsvUpload = () => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);

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

   const handleFileview = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();

    // CSV
    if (fileName.endsWith(".csv")) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setHeaders(Object.keys(results.data[0]));
          setTableData(results.data.slice(0, 10)); // preview first 10 rows
        },
      });
    }

    // XLSX
    else if (fileName.endsWith(".xlsx")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        setHeaders(Object.keys(jsonData[0]));
        setTableData(jsonData.slice(0, 10));
      };

      reader.readAsArrayBuffer(file);
    }
  }

  return (
    <div className="p-4 border rounded-lg shadow-md w-96">
      <h2 className="text-lg font-bold mb-3">Upload CSV File</h2>
<div className="flex items-center">
  <input
    type="file"
    accept=".csv, .xlsx"
    onChange={handleFileChange}
    id="file-input"
    className="hidden"
  />
  <label
    htmlFor="file-input"
    className="mt-6 mb-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
  >
    Select
  </label>
</div>   

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