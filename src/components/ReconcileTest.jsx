import axios from "axios";
import { useState } from "react";

function ReconcileTest() {

  const [data, setData] = useState([]);

  const handleReconcile = async () => {
    try {
      const response = await axios.post("http://localhost:8080/reconcile");

      console.log("FULL RESPONSE:", response);

      // IMPORTANT: ye line change ho sakti hai depending backend
      setData(response.data);

    } catch (error) {
      console.error("API ERROR:", error);
    }
  };

  return (
    <div>
      <button onClick={handleReconcile}>Run Reconcile</button>

      {Array.isArray(data) &&
        data.map((item, index) => (
          <div key={index}>
            {item.account_holder_name} | {item.account_id} | {item.balance}
          </div>
        ))}
    </div>
  );
}

export default ReconcileTest;