import React, { useState } from "react";
import "./model.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { axiosInstance } from "../config";

export const ModalItem = ({ customerData }) => {
  const [show, setShow] = useState(false);
  const [sender, setSender] = useState();
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState(0);
  const [personSender, setPersonSender] = useState();
  const [personReceiver, setPersonReceiver] = useState();

  const navigate = useNavigate();

  // on final transfer click

  const transfered = () => {
    axiosInstance
      .post("/transfer", {
        sender,
        receiver,
        transfer: amount,
      })
      .then(() => console.log("Success"))
      .catch(() => console.log("Failed"));

    axiosInstance
      .put(`/${personSender.id}`, {
        balance: parseInt(personSender.balance - parseInt(amount)),
      })
      .then((res) => console.log(res))
      .catch((mess) => console.log(mess.message));

    axiosInstance
      .put(`/${personReceiver.id}`, {
        balance: parseInt(personReceiver.balance + parseInt(amount)),
      })
      .then((res) => console.log(res))
      .catch((mess) => console.log(mess.message));

      navigate('/transaction-history');

  };

  useEffect(() => {
    if (sender && receiver != undefined){
      axiosInstance
      .get(`/${sender}`)
      .then((res) => setPersonSender(res.data[0]))    
      .catch(() => console.log("Will start"));
        
      axiosInstance
      .get(`/${receiver}`)
      .then((res) => setPersonReceiver(res.data[0]))
      .catch(() => console.log("Will start"));
    }else{
      console.log("will be get data soon");
    }
        
  }, [sender, receiver, amount]);

  const transferFrom = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSender(value[0]);
  };

  const transferTo = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setReceiver(value[0]);
  };

  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <Button
        style={{
          backgroundColor: "rgb(161, 0, 182)",
          border: "none",
          width: "24%",
        }}
        onClick={() => setShow(true)}
      >
        Transfer
      </Button>

      {/* when transfer is clicked model will open */}

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody">
            <div>
              <h4>Sender:</h4>
              <select className="input" onChange={(e) => transferFrom(e)}>
                {customerData &&
                  customerData.map((data) => {
                    return <option key={data.id}>{data.email}</option>;
                  })}
              </select>
              <h4>Receiver:</h4>
              <select className="input" onChange={(e) => transferTo(e)}>
                {customerData &&
                  customerData.map((data) => {
                    return <option key={data.id}>{data.email}</option>;
                  })}
              </select>
            </div>
            <div>
              <label>Amount</label>
              <input
                className="input"
                type="number"
                onChange={getAmount}
                placeholder="in rupees"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(161, 0, 182)",
              border: "none",
              width: "24%",
            }}
            onClick={transfered}
          >
            Transfer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
