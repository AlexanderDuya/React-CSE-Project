import "../viewss/Attendee.scss";
import { useLocation } from "react-router-dom";
import { apiGet } from "../API/API.jsx";
import { useState, useEffect } from "react";

function Attendee() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classId = Number(queryParams.get("classId")); // Get classId from URL params

  const apiURL = "https://softwarehub.uk/unibase/events/api";
  const bookingsEndPoint = `${apiURL}/users/classes/${classId}`; // Dynamic API

  const [attendees, setAttendees] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    if (classId) {
      apiGet(bookingsEndPoint, setAttendees);
    }
  }, [bookingsEndPoint, classId]); // Fetch data when classId changes

  // Function to toggle the attendance status
  const toggleAttendance = (clientId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [clientId]: !prevAttendance[clientId],
    }));
  };

  return (
    <div>
      <h2 className="page-title">
        Here are your attendees for class {classId}
      </h2>

      <div className="attendee-container">
        {attendees.length > 0 ? (
          attendees.map((attendee) => (
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
                <p className="card-detail">
                  Gender: {attendee.ClientGenderName}
                </p>

                <button onClick={() => toggleAttendance(attendee.ClientID)}>
                  {attendance[attendee.ClientID]
                    ? "Mark Absent"
                    : "Mark Present"}
                </button>
                <p>Status:</p>
                <p
                  className={
                    attendance[attendee.ClientID] ? "present" : "absent"
                  }
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
    </div>
  );
}

export default Attendee;
