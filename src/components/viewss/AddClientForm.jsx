import { useState } from "react";
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

function AddClientForm() {
  // Initialisation ----------------------------------------------

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
  const [clients, setClients] = useState(initialClients);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  // Handlers --------------------------------------------------

  const handleCancel = () => {
    navigate("/ClientClasses");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(client)) {
      const newClient = {
        ClientID: clients.length + 1,
        ClientFirstname: client.firstName,
        ClientLastname: client.lastName,
        ClientEmail: client.email,
        ClientPhone: client.phone,
        ClientDatejoined: new Date(),
        ClientAge: calculateAge(client.dob),
        ClientGenderName: client.gender,
      };

      setFormVisible(false);
      setClients((prevClients) => [...prevClients, newClient]);
      setClient(initialClient);
      setSuccessMessage("Your account has been created!");
      console.log("Client added:", newClient);
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
    if (!/^\d{11}$/.test(newClient.phone)) {
      errors.phone = "Phone number must be 11 digits";
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
