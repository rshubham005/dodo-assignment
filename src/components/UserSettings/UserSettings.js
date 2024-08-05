import { TextField } from "@mui/material";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
function UserSettings() {
  const [formData, setFormData] = useState({
    name: "Shubham",
    email: "rathor.sr143.sr@gmail.com",
    address: "Lucknow",
    contact: "+91 70719 84914",
  });
  return (
    <div className="form_container">
      <h1>User settings</h1>
      <div className="form_block">
        <div className="input_block">
          <TextField
            id="standard-basic"
            className="form_input"
            label="Name"
            name="name"
            variant="standard"
            value={formData.name}
            error={formData.name === "" ? true : false}
            helperText={
              formData.name === "" ? "This input value is required" : ""
            }
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="input_block">
          <TextField
            id="standard-basic"
            className="form_input"
            label="Email"
            name="email"
            variant="standard"
            value={formData.email}
            error={formData.email === "" ? true : false}
            helperText={
              formData.email === "" ? "This input value is required" : ""
            }
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="input_block">
          <TextField
            id="standard-basic"
            className="form_input"
            label="Address"
            name="address"
            variant="standard"
            value={formData.address}
            error={formData.address === "" ? true : false}
            helperText={
              formData.address === "" ? "This input value is required" : ""
            }
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="input_block">
          {" "}
          <TextField
            id="standard-basic"
            className="form_input"
            label="Contact"
            name="contact"
            variant="standard"
            value={formData.contact}
            error={formData.contact === "" ? true : false}
            helperText={
              formData.contact === "" ? "This input value is required" : ""
            }
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <buton
          className="submit_button"
          onClick={() => {
            formData.contact === "" ||
            formData.name === "" ||
            formData.email === "" ||
            formData.address === ""
              ? alert("Please fill the form properly")
              : alert("User Settings has been updated");
          }}
        >
          Update
        </buton>
      </div>
    </div>
  );
}

export default UserSettings;
