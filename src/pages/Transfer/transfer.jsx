import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { axiosInstance } from "../../config";

export const Transfer = () => {
  const [afterData, setAfterData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/transfer")
      .then((res) => setAfterData(res.data));

  }, []);

  return (
    <div>
      {!afterData ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Transfered Amount</th>
            </tr>
          </thead>
          <tbody>
            {afterData &&
              afterData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.sender}</td>
                    <td>{data.receiver}</td>
                    <td>{data.transfer}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
