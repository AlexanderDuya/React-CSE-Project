import "../viewss/Attendee.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // to get query params
function Attendee() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classId = Number(queryParams.get("classId")); // Get classId from URL query params

  console.log("Class ID from URL:", classId);

  const bookings = [
    { BookingID: 1, ClientID: 1, ClassID: 1 },
    { BookingID: 2, ClientID: 2, ClassID: 1 },
    { BookingID: 3, ClientID: 3, ClassID: 1 },
    { BookingID: 4, ClientID: 4, ClassID: 1 },
    { BookingID: 5, ClientID: 5, ClassID: 1 },
    { BookingID: 6, ClientID: 6, ClassID: 1 },
    { BookingID: 7, ClientID: 7, ClassID: 1 },

    { BookingID: 8, ClientID: 1, ClassID: 2 },
    { BookingID: 9, ClientID: 2, ClassID: 2 },
    { BookingID: 10, ClientID: 3, ClassID: 2 },
    { BookingID: 11, ClientID: 4, ClassID: 2 },
    { BookingID: 12, ClientID: 5, ClassID: 2 },
    { BookingID: 13, ClientID: 6, ClassID: 2 },
    { BookingID: 14, ClientID: 7, ClassID: 2 },

    { BookingID: 15, ClientID: 1, ClassID: 3 },
    { BookingID: 16, ClientID: 2, ClassID: 3 },
    { BookingID: 17, ClientID: 3, ClassID: 3 },
    { BookingID: 18, ClientID: 4, ClassID: 3 },
    { BookingID: 19, ClientID: 5, ClassID: 3 },
    { BookingID: 20, ClientID: 6, ClassID: 3 },
    { BookingID: 21, ClientID: 7, ClassID: 3 },

    { BookingID: 22, ClientID: 1, ClassID: 4 },
    { BookingID: 23, ClientID: 2, ClassID: 4 },
    { BookingID: 24, ClientID: 3, ClassID: 4 },
    { BookingID: 25, ClientID: 4, ClassID: 4 },
    { BookingID: 26, ClientID: 5, ClassID: 4 },
    { BookingID: 27, ClientID: 6, ClassID: 4 },
    { BookingID: 28, ClientID: 7, ClassID: 4 },

    { BookingID: 29, ClientID: 1, ClassID: 5 },
    { BookingID: 30, ClientID: 2, ClassID: 5 },
    { BookingID: 31, ClientID: 3, ClassID: 5 },
    { BookingID: 32, ClientID: 4, ClassID: 5 },
    { BookingID: 33, ClientID: 5, ClassID: 5 },
    { BookingID: 34, ClientID: 6, ClassID: 5 },
    { BookingID: 35, ClientID: 7, ClassID: 5 },

    { BookingID: 36, ClientID: 1, ClassID: 6 },
    { BookingID: 37, ClientID: 2, ClassID: 6 },
    { BookingID: 38, ClientID: 3, ClassID: 6 },
    { BookingID: 39, ClientID: 4, ClassID: 6 },
    { BookingID: 40, ClientID: 5, ClassID: 6 },
    { BookingID: 41, ClientID: 6, ClassID: 6 },
    { BookingID: 42, ClientID: 7, ClassID: 6 },

    { BookingID: 43, ClientID: 1, ClassID: 7 },
    { BookingID: 44, ClientID: 2, ClassID: 7 },
    { BookingID: 45, ClientID: 3, ClassID: 7 },
    { BookingID: 46, ClientID: 4, ClassID: 7 },
    { BookingID: 47, ClientID: 5, ClassID: 7 },
    { BookingID: 48, ClientID: 6, ClassID: 7 },
    { BookingID: 49, ClientID: 7, ClassID: 7 },

    { BookingID: 50, ClientID: 1, ClassID: 8 },
    { BookingID: 51, ClientID: 2, ClassID: 8 },
    { BookingID: 52, ClientID: 3, ClassID: 8 },
    { BookingID: 53, ClientID: 4, ClassID: 8 },
    { BookingID: 54, ClientID: 5, ClassID: 8 },
    { BookingID: 55, ClientID: 6, ClassID: 8 },
    { BookingID: 56, ClientID: 7, ClassID: 8 },

    { BookingID: 57, ClientID: 1, ClassID: 9 },
    { BookingID: 58, ClientID: 2, ClassID: 9 },
    { BookingID: 59, ClientID: 3, ClassID: 9 },
    { BookingID: 60, ClientID: 4, ClassID: 9 },
    { BookingID: 61, ClientID: 5, ClassID: 9 },
    { BookingID: 62, ClientID: 6, ClassID: 9 },
    { BookingID: 63, ClientID: 7, ClassID: 9 },

    { BookingID: 64, ClientID: 1, ClassID: 10 },
    { BookingID: 65, ClientID: 2, ClassID: 10 },
    { BookingID: 66, ClientID: 3, ClassID: 10 },
    { BookingID: 67, ClientID: 4, ClassID: 10 },
    { BookingID: 68, ClientID: 5, ClassID: 10 },
    { BookingID: 69, ClientID: 6, ClassID: 10 },
    { BookingID: 70, ClientID: 7, ClassID: 10 },

    { BookingID: 71, ClientID: 8, ClassID: 1 },
    { BookingID: 72, ClientID: 9, ClassID: 1 },
    { BookingID: 73, ClientID: 10, ClassID: 1 },
    { BookingID: 74, ClientID: 8, ClassID: 2 },
    { BookingID: 75, ClientID: 9, ClassID: 2 },
    { BookingID: 76, ClientID: 10, ClassID: 2 },
    { BookingID: 77, ClientID: 8, ClassID: 2 },
    { BookingID: 78, ClientID: 9, ClassID: 3 },
    { BookingID: 79, ClientID: 10, ClassID: 3 },
    { BookingID: 80, ClientID: 8, ClassID: 3 },
    { BookingID: 81, ClientID: 9, ClassID: 4 },
    { BookingID: 82, ClientID: 10, ClassID: 4 },
    { BookingID: 83, ClientID: 8, ClassID: 4 },
    { BookingID: 84, ClientID: 9, ClassID: 4 },
    { BookingID: 85, ClientID: 10, ClassID: 5 },
    { BookingID: 86, ClientID: 8, ClassID: 5 },
    { BookingID: 87, ClientID: 9, ClassID: 5 },
    { BookingID: 88, ClientID: 10, ClassID: 6 },
    { BookingID: 89, ClientID: 8, ClassID: 6 },
    { BookingID: 90, ClientID: 9, ClassID: 6 },
    { BookingID: 91, ClientID: 10, ClassID: 6 },
    { BookingID: 92, ClientID: 8, ClassID: 7 },
    { BookingID: 93, ClientID: 9, ClassID: 7 },
    { BookingID: 94, ClientID: 10, ClassID: 7 },
    { BookingID: 95, ClientID: 8, ClassID: 8 },
    { BookingID: 96, ClientID: 9, ClassID: 8 },
    { BookingID: 97, ClientID: 10, ClassID: 8 },
    { BookingID: 98, ClientID: 8, ClassID: 8 },
    { BookingID: 99, ClientID: 9, ClassID: 9 },
    { BookingID: 100, ClientID: 10, ClassID: 9 },

    { BookingID: 101, ClientID: 11, ClassID: 1 },
    { BookingID: 102, ClientID: 12, ClassID: 1 },
    { BookingID: 103, ClientID: 13, ClassID: 1 },
    { BookingID: 104, ClientID: 14, ClassID: 1 },
    { BookingID: 105, ClientID: 15, ClassID: 1 },
    { BookingID: 106, ClientID: 16, ClassID: 1 },
    { BookingID: 107, ClientID: 17, ClassID: 1 },

    { BookingID: 108, ClientID: 18, ClassID: 1 },
    { BookingID: 109, ClientID: 19, ClassID: 1 },
    { BookingID: 110, ClientID: 20, ClassID: 1 },
    { BookingID: 111, ClientID: 21, ClassID: 1 },
    { BookingID: 112, ClientID: 22, ClassID: 1 },
    { BookingID: 113, ClientID: 23, ClassID: 1 },
    { BookingID: 114, ClientID: 24, ClassID: 1 },

    // Added additional booking for ClientID 6
  ];

  const attendees = [
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

      ClientEmail: "charlie.williams@example.com",
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

      ClientEmail: "charlie.williams@example.com",
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

  // Step 1: Filter bookings to get ClientIDs for the given ClassID
  const bookingForClass = bookings.filter(
    (booking) => booking.ClassID === classId
  );

  // Step 2: Extract the ClientIDs from the filtered bookings
  const clientIdsForClass = bookingForClass.map((booking) => booking.ClientID);

  // Step 3: Find attendees whose ClientID matches the filtered ClientIDs
  const filteredAttendees = attendees.filter((attendee) =>
    clientIdsForClass.includes(attendee.ClientID)
  );

  // Local state to track attendance for each attendee (true for Present, false for Absent)
  const [attendance, setAttendance] = useState({});

  // Function to toggle the attendance status
  const toggleAttendance = (clientId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [clientId]: !prevAttendance[clientId], // Toggle between present and absent
    }));
  };

  return (
    <div className="attendee-container">
      {filteredAttendees.length > 0 ? (
        filteredAttendees.map((attendee) => (
          <div className="card-container" key={attendee.ClientID}>
            <div className="card">
              <h3 className="card-title">
                {attendee.ClientFirstname} {attendee.ClientLastname}
              </h3>
              <p className="card-detail">Email: {attendee.ClientEmail}</p>
              <p className="card-detail">Phone: {attendee.ClientPhone}</p>
              <p className="card-detail">
                Joined on:{" "}
                {new Date(attendee.ClientDatejoined).toLocaleDateString()}
              </p>
              <p className="card-detail">Age: {attendee.ClientAge}</p>
              <p className="card-detail">Gender: {attendee.ClientGenderName}</p>

              {/* Button to toggle attendance */}
              <button onClick={() => toggleAttendance(attendee.ClientID)}>
                {attendance[attendee.ClientID] ? "Mark Absent" : "Mark Present"}
              </button>
              <p>Status:</p>
              <p
                className={attendance[attendee.ClientID] ? "present" : "absent"}
              >
                {attendance[attendee.ClientID] ? "Present" : "Absent"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="no-attendees">No attendees for this class yet.</p>
      )}
    </div>
  );
}

export default Attendee;
