
import React, { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const patientData = { first_name, last_name, age, gender, phone, email };

  try {
    const response = await fetch('https://hosp-backend-v2.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(patientData),
		body: JSON.stringify({
		first_name: "Imran",
		last_name: "Khan",
		age: 30,
		gender: "Male",
		phone: "1234567890",
		email: "imran@example.com"
		}),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Patient registered successfully!');
      console.log(data);
      // Optionally reset form here
    } else {
      const err = await response.text();
      alert('Error: ' + err);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong!');
  }
};


  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required /><br />
        <input name="gender" placeholder="Gender" onChange={handleChange} required /><br />
        <input name="contact" placeholder="Contact" onChange={handleChange} required /><br />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default PatientForm;
