import "../viewss/Attendee.scss";
import { Card, CardContainer } from "../UI/Card.jsx";
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
    { BookingID: 2, ClientID: 3, ClassID: 1 },
    { BookingID: 3, ClientID: 4, ClassID: 2 },
    { BookingID: 4, ClientID: 5, ClassID: 1 },
    { BookingID: 5, ClientID: 6, ClassID: 1 },
    { BookingID: 6, ClientID: 6, ClassID: 2 },
    { BookingID: 7, ClientID: 7, ClassID: 5 },
    // Added additional booking for ClientID 6
  ];

  const attendees = [
    {
      ClientID: 1,
      ClientFirstname: "Alice",
      ClientLastname: "Smith",

      ClientEmail: "alice.smith@example.com",
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
      ClientFirstname: "Alex",
      ClientLastname: "Duya",

      ClientEmail: "alexduya123@gmail.com",
      ClientPhone: "123-456-7894",
      ClientDatejoined: new Date("2023-05-01"),
      ClientAge: 22,
      ClientGenderName: "Male",
    },
    {
      ClientID: 7,
      ClientFirstname: "Alex",
      ClientLastname: "Duya",

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

  return (
    <div className="attendee-container">
      {filteredAttendees.length > 0 ? (
        filteredAttendees.map((attendee) => (
          <CardContainer key={attendee.ClientID}>
            <Card>
              <h3>
                {attendee.ClientFirstname} {attendee.ClientLastname}
              </h3>
              <p>Email: {attendee.ClientEmail}</p> {/* Removed the extra "a" */}
              <p>Phone: {attendee.ClientPhone}</p>
              <p>Joined on: {attendee.ClientDatejoined.toLocaleDateString()}</p>
              <p>Age: {attendee.ClientAge}</p>
              <p>Gender: {attendee.ClientGenderName}</p>
            </Card>
          </CardContainer>
        ))
      ) : (
        <p>No attendees for this class yet.</p>
      )}
    </div>
  );
}

export default Attendee;
