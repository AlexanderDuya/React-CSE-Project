import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, FormDisplay } from "../UI/Form.jsx";
import "../viewss/AddClientForm.scss";

const initialClient = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "Male",
};

function AddClientForm() {
  // Initialisation ----------------------------------------------
  // API URL
  const apiURL = "https://softwarehub.uk/unibase/events/api";
  const usersEndpoint = `${apiURL}/users`;

  const conformance = {
    html2js: {
      firstName: (value) => (value === "" ? "" : value),
      lastName: (value) => (value === "" ? "" : value),
      email: (value) => (value === "" ? "" : value),
      phone: (value) => (value === "" ? "" : value),
      dob: (value) => (value === "" ? "" : value),
      gender: (value) => (value === "" ? "Male" : value),
    },

    js2html: {
      firstName: (value) => (value === null ? "" : value),
      lastName: (value) => (value === null ? "" : value),
      email: (value) => (value === null ? "" : value),
      phone: (value) => (value === null ? "" : value),
      dob: (value) => (value === null ? "" : value),
      gender: (value) => (value === null ? "Male" : value),
    },
  };

  // State --------------------------------------------------
  const navigate = useNavigate();
  const [client, setClient] = useState(initialClient);
  const [clients, setClients] = useState([]);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const apiGet = async (endpoint, setState) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch clients");
      }
      const result = await response.json();
      setState(result); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrors({ submit: "Failed to fetch clients. Please try again later." });
    }
  };

  const apiPost = async (usersEndpoint, data) => {
    const request = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    };

    const response = await fetch(usersEndpoint, request);
    const result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true, data: result }
      : { isSuccess: false, message: result.message };
  };

  // Fetch all clients
  useEffect(() => {
    apiGet(usersEndpoint, setClients);
  }, [usersEndpoint]);

  // Handlers --------------------------------------------------
  const handleCancel = () => {
    navigate("/ClientClasses");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate(client)) {
      const newClient = {
        UserFirstname: client.firstName,
        UserLastname: client.lastName,
        UserEmail: client.email,
        UserPhone: client.phone,
        UserDatejoined: new Date().toISOString(),
        UserDateofbirth: new Date(client.dob).toISOString(),
        UserGenderID: client.gender === "Male" ? 1 : 2,
        UserUsertypeID: 1,
        UserGenderName: client.gender,
        UserUsertypeName: "Client",
      };

      const postResult = await apiPost(usersEndpoint, newClient);

      if (postResult.isSuccess) {
        setFormVisible(false);
        setClients((prevClients) => [...prevClients, newClient]);
        setClient(initialClient);
        setSuccessMessage("Your account has been created!");
        console.log("Client added:", newClient);
      } else {
        setErrors({
          submit:
            postResult.message || "Failed to create account. Please try again.",
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClient({
      ...client,
      [name]: conformance.html2js[name](value),
    });
  };

  const validate = (newClient) => {
    let isValid = true;
    let errors = {};

    if (newClient.firstName.trim() === "") {
      errors.firstName = "First name is required";
      isValid = false;
    }
    if (newClient.lastName.trim() === "") {
      errors.lastName = "Last name is required";
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newClient.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
    if (!/^\+\d{11,}$/.test(newClient.phone)) {
      errors.phone = "Phone number must be in format (e.g., +441234567890)";
      isValid = false;
    }
    if (!newClient.dob) {
      errors.dob = "Date of birth is required";
      isValid = false;
    } else {
      const age = calculateAge(newClient.dob);
      if (age < 18) {
        errors.dob = "You must be at least 18 years old";
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  // View -------------------------------------------------------
  return (
    <div className="add-client-form-container">
      <h1 id="signup">Sign up for an Account</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.submit && <p className="unsuccess">{errors.submit}</p>}
      {formVisible && (
        <FormDisplay handleSubmit={handleSubmit} handleCancel={handleCancel}>
          <FormField
            label="First Name"
            type="text"
            name="firstName"
            value={conformance.js2html.firstName(client.firstName)}
            onChange={handleChange}
          />
          {errors.firstName && <p className="unsuccess">{errors.firstName}</p>}

          <FormField
            label="Last Name"
            type="text"
            name="lastName"
            value={conformance.js2html.lastName(client.lastName)}
            onChange={handleChange}
          />
          {errors.lastName && <p className="unsuccess">{errors.lastName}</p>}

          <FormField
            label="Email"
            type="email"
            name="email"
            value={conformance.js2html.email(client.email)}
            onChange={handleChange}
          />
          {errors.email && <p className="unsuccess">{errors.email}</p>}

          <FormField
            label="Phone"
            type="text"
            name="phone"
            value={conformance.js2html.phone(client.phone)}
            onChange={handleChange}
          />
          {errors.phone && <p className="unsuccess">{errors.phone}</p>}

          <FormField
            label="Date of Birth"
            type="date"
            name="dob"
            value={conformance.js2html.dob(client.dob)}
            onChange={handleChange}
          />
          {errors.dob && <p className="unsuccess">{errors.dob}</p>}

          <label>
            Gender
            <select
              name="gender"
              value={conformance.js2html.gender(client.gender)}
              onChange={handleChange}
              className="select-field"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </FormDisplay>
      )}
    </div>
  );
}

export default AddClientForm;
