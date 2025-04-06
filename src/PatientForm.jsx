import React, { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hosp-backend-v2.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage("Patient registered successfully!");
        console.log("Registered:", data);

        // Optionally reset the form
        setFormData({
          first_name: "",
          last_name: "",
          age: "",
          gender: "",
          phone: "",
          email: "",
        });
      } else {
        const err = await response.text();
        alert("Error: " + err);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        /><br />
        <input
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        /><br />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default PatientForm;
