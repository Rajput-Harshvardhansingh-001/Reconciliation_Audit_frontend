import React, { useState } from "react";
import axios from "axios";

const ReconcileTest = () => {

  const [accountId, setAccountId] = useState("");
  const [data, setData] = useState([]);

  const handleReconcile = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/reconcile/run`
      );setData(data.data);
    } catch (err) {
      debugger;
      console.error(err);
      alert("Error in reconciliation");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reconciliation Test Panel</h2>

      <input
        type="text"
        placeholder="Enter Account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        style={{ padding: "8px", marginRight:   "10px" }}
      />

      <button onClick={handleReconcile}>Run Reconciliation</button>

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>System Amount</th>
            <th>Bank Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) && data.map((item, index) => (
            <tr key={index}>
              <td>{item.accountId}</td>
              <td>{item.systemAmount}</td>
              <td>{item.bankAmount}</td>
              <td
                style={{
                  color:
                    item.status === "MATCHED"
                      ? "green"
                      : item.status === "MISMATCH"
                      ? "red"
                      : "orange",
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReconcileTest;