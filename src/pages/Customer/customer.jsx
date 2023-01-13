import axios from "axios";
import { useEffect, useState } from "react";
import { ModalItem } from "../../component/model";
import { axiosInstance } from "../../config";
import "./customer.css";

export const Customer = () => {
  const [customerData, setCustomerData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/request`)
      .then((res) => setCustomerData(res.data));

  }, []);

  return (
    <div>
      <div className="transferContain">
        <h2>Transfer Money To Your Contact's</h2>
        <ModalItem customerData={customerData} />
      </div>

      {!customerData ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {customerData &&
              customerData.map((data, i) => {
                return (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.balance}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
