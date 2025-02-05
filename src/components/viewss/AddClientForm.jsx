import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Action from "../UI/Actions.jsx";
import "../viewss/AddClientForm.scss";

function AddClientForm() {
  // Initialisation-----------------------------------------------------------------------
  const initialClients = [
    {
      ClientID: 1,
      ClientFirstname: "Graeme",
      ClientLastname: "Jones",

      ClientEmail: "G.Jones@example.com",
      ClientPhone: "123-456-7890",
      ClientDatejoined: new Date("2023-01-01"),
      ClientAge: 30,
      ClientGenderName: "Female",
    },
    {
      ClientID: 2,
      ClientFirstname: "Bob",
      ClientLastname: "Johnson",

      ClientEmail: "bob.johnson@example.com",
      ClientPhone: "123-456-7891",
      ClientDatejoined: new Date("2023-02-01"),
      ClientAge: 25,
      ClientGenderName: "Male",
    },
    {
      ClientID: 3,
      ClientFirstname: "Charlie",
      ClientLastname: "Williams",

      ClientEmail: "charlie.will@example.com",
      ClientPhone: "123-456-7892",
      ClientDatejoined: new Date("2023-03-01"),
      ClientAge: 28,
      ClientGenderName: "Male",
    },
    {
      ClientID: 4,
      ClientFirstname: "David",
      ClientLastname: "Jones",

      ClientEmail: "david.jones@example.com",
      ClientPhone: "123-456-7893",
      ClientDatejoined: new Date("2023-04-01"),
      ClientAge: 32,
      ClientGenderName: "Male",
    },
    {
      ClientID: 5,
      ClientFirstname: "Eve",
      ClientLastname: "Brown",

      ClientEmail: "eve.brown@example.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Female",
    },
    {
      ClientID: 6,
      ClientFirstname: "John",
      ClientLastname: "Duyanski",

      ClientEmail: "John123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 7,
      ClientFirstname: "Alexander",
      ClientLastname: "TheGreat",

      ClientEmail: "alex123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 8,
      ClientFirstname: "Alicia",
      ClientLastname: "Smithers",

      ClientEmail: "alice.smith@example.com",
      ClientPhone: "123-456-7890",
      ClientDatejoined: new Date("2023-01-01"),
      ClientAge: 30,
      ClientGenderName: "Female",
    },
    {
      ClientID: 9,
      ClientFirstname: "Bob",
      ClientLastname: "Marley",

      ClientEmail: "bob@example.com",
      ClientPhone: "123-456-7891",
      ClientDatejoined: new Date("2023-02-01"),
      ClientAge: 25,
      ClientGenderName: "Male",
    },
    {
      ClientID: 10,
      ClientFirstname: "Carlos",
      ClientLastname: "Greggs",

      ClientEmail: "Carlos@example.com",
      ClientPhone: "123-456-7892",
      ClientDatejoined: new Date("2023-03-01"),
      ClientAge: 28,
      ClientGenderName: "Male",
    },
    {
      ClientID: 11,
      ClientFirstname: "David",
      ClientLastname: "Lopez",

      ClientEmail: "david@example.com",
      ClientPhone: "123-456-7893",
      ClientDatejoined: new Date("2023-04-01"),
      ClientAge: 32,
      ClientGenderName: "Male",
    },
    {
      ClientID: 12,
      ClientFirstname: "Eve",
      ClientLastname: "Brown",

      ClientEmail: "eve.brown@example.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Female",
    },
    {
      ClientID: 13,
      ClientFirstname: "Alex",
      ClientLastname: "Duya",

      ClientEmail: "alexduya123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 14,
      ClientFirstname: "George",
      ClientLastname: "Russell",

      ClientEmail: "GR123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 15,
      ClientFirstname: "Alice",
      ClientLastname: "Smith",

      ClientEmail: "alice.smith@example.com",
      ClientPhone: "123-456-7890",
      ClientDatejoined: new Date("2023-01-01"),
      ClientAge: 30,
      ClientGenderName: "Female",
    },
    {
      ClientID: 16,
      ClientFirstname: "Agostine",
      ClientLastname: "Samson",

      ClientEmail: "AS@example.com",
      ClientPhone: "123-456-7891",
      ClientDatejoined: new Date("2023-02-01"),
      ClientAge: 25,
      ClientGenderName: "Male",
    },
    {
      ClientID: 17,
      ClientFirstname: "Charlie",
      ClientLastname: "Williams",

      ClientEmail: "charlie.will@example.com",
      ClientPhone: "123-456-7892",
      ClientDatejoined: new Date("2023-03-01"),
      ClientAge: 28,
      ClientGenderName: "Male",
    },
    {
      ClientID: 18,
      ClientFirstname: "David",
      ClientLastname: "Jeje",

      ClientEmail: "david.j@example.com",
      ClientPhone: "123-456-7893",
      ClientDatejoined: new Date("2023-04-01"),
      ClientAge: 32,
      ClientGenderName: "Male",
    },
    {
      ClientID: 19,
      ClientFirstname: "Evelyn",
      ClientLastname: "Brown",

      ClientEmail: "eve.brown@example.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Female",
    },
    {
      ClientID: 20,
      ClientFirstname: "Lewis",
      ClientLastname: "Rusky",

      ClientEmail: "Lr123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 21,
      ClientFirstname: "Paul",
      ClientLastname: "Neve",

      ClientEmail: "alexduya123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
  ];

  //State---------------------------------------------------------------------------------
  const [clients, setClients] = useState(initialClients);
  const [clientFormData, setClientFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
  });

  const [errors, setErrors] = useState({});
  const [formVisible, setFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  //Handlers------------------------------------------------------------------------------

  const validate = () => {
    let newErrors = {};
    if (clientFormData.firstName.trim().length < 2) {
      newErrors.firstName = "Invalid firstname";
    }
    if (clientFormData.lastName.trim().length < 2) {
      newErrors.lastName = "Invalid lastname";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientFormData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!/^\d{11}$/.test(clientFormData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!clientFormData.dob) {
      newErrors.dob = "Date of birth is required";
    } else {
      const age = calculateAge(clientFormData.dob);
      if (age < 18) {
        newErrors.dob = "You must be at least 18 years old";
      }
    }
    return newErrors;
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setClientFormData({ ...clientFormData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const calculatedAge = calculateAge(clientFormData.dob);

    // Generate a new ClientID
    const newClientID = clients.length + 1;

    // Create a new client object
    const newClient = {
      ClientID: newClientID,
      ClientFirstname: clientFormData.firstName,
      ClientLastname: clientFormData.lastName,
      ClientEmail: clientFormData.email,
      ClientPhone: clientFormData.phone,
      ClientDatejoined: new Date(),
      ClientAge: parseInt(clientFormData.age),
      ClientGenderName: clientFormData.gender,
    };

    // Update the clients state with the new client
    setClients((prevClients) => [...prevClients, newClient]);

    // Reset the form after submission
    setClientFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      gender: "Male",
    });

    setFormVisible(false);
    setSuccessMessage("Your account has been created!");
    console.log("Client added");
  };

  const handleCancel = () => {
    navigate("/ClientClasses");
  };

  // View--------------------------------------------------------------------------------
  return (
    <div className="add-client-form-container">
      <h1 id="signup">Sign up for an Account</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {formVisible && (
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={clientFormData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="input-field"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={clientFormData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="input-field"
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={clientFormData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-field"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={clientFormData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input-field"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <input
              type="date"
              name="dob"
              value={clientFormData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="input-field"
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className="form-group">
            <select
              name="gender"
              value={clientFormData.gender}
              onChange={handleChange}
              className="select-field"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="action-buttons">
            <Action.Submit
              showText
              onClick={handleSubmit}
              buttonText="Sign Up"
            />
            <Action.Cancel
              showText
              onClick={handleCancel}
              buttonText="Cancel"
            />
          </div>
        </div>
      )}

      <div className="clients-list-container">
        <h3>Clients</h3>
        <table>
          <thead>
            <tr>
              <th>Client ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Date Joined</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.ClientID}>
                <td>{client.ClientID}</td>
                <td>{client.ClientFirstname}</td>
                <td>{client.ClientLastname}</td>
                <td>{client.ClientEmail}</td>
                <td>{client.ClientPhone}</td>
                <td>{client.ClientAge}</td>
                <td>{client.ClientGenderName}</td>
                <td>{client.ClientDatejoined.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddClientForm;
