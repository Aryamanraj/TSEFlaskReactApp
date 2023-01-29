import React, { useState } from "react";
import axios from "axios";

function App() {
  const [fromDate, setFromDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("");
  const [toTime, setToTime] = useState("");
  const [data, setData] = useState("");
  const [output, setOutput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://192.168.61.8:6117/encrypting?From_date=${fromDate}&From_hour=${fromTime}&To_date=${toDate}&To_hour=${toTime}&Data=${data}`)
      .then((res) => {
        setOutput(res.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          From Date:
          <input type="text" value={fromDate} onChange={(event) => setFromDate(event.target.value)} />
        </label>
        <br />
        <label>
          From Time:
          <input type="text" value={fromTime} onChange={(event) => setFromTime(event.target.value)} />
        </label>
        <br />
        <label>
          To Date:
          <input type="text" value={toDate} onChange={(event) => setToDate(event.target.value)} />
        </label>
        <br />
        <label>
          To Time:
          <input type="text" value={toTime} onChange={(event) => setToTime(event.target.value)} />
        </label>
        <br />
        <label>
          Data:
          <input type="text" value={data} onChange={(event) => setData(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        Cipher Text: {output.ciphertext}
        <br />
        Password: {output.password}
      </div>
    </div>
  );
}

export default App;
