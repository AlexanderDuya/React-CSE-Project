import "../viewss/Attendee.scss";
import { useLocation } from "react-router-dom";
import useLoad from "../Api/useLoad";
import { useState, useEffect } from "react";

function Attendee() {
  // Initialization ---------------------------------------------------------
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classId = Number(queryParams.get("classId")); // Get classId from URL params

  const bookingsEndPoint = `/users/classes/${classId}`; // Dynamic API

  // State ------------------------------------------------------------------
  const [attendees, setAttendees, isLoading, loadAttendees] = useLoad([
    bookingsEndPoint,
  ]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {}, [bookingsEndPoint, classId]); // Fetch data when classId changes

  // Handlers --------------------------------------------------------------
  // Function to toggle the attendance status
  const toggleAttendance = (clientId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [clientId]: !prevAttendance[clientId],
    }));
  };

  // View ------------------------------------------------------------------
  return (
    <div>
      <h2 className="page-title">
        Here are your attendees for class {classId}
      </h2>

      <div className="attendee-container">
        {attendees.length > 0 ? (
          attendees.map((attendee) => (
            <div className="card-container" key={attendee.UserID}>
              <div className="card">
                <h3 className="card-title">
                  {attendee.UserFirstname} {attendee.UserLastname}
                </h3>
                <p className="card-detail">Email: {attendee.UserEmail}</p>
                <p className="card-detail">Phone: {attendee.UserPhone}</p>
                <p className="card-detail">
                  Joined on:{" "}
                  {new Date(attendee.UserDatejoined).toLocaleDateString()}
                </p>
                <p className="card-detail">Age: {attendee.UserAge}</p>
                <p className="card-detail">Gender: {attendee.UserGenderName}</p>

                <button onClick={() => toggleAttendance(attendee.UserID)}>
                  {attendance[attendee.UserID] ? "Mark Absent" : "Mark Present"}
                </button>
                <p>Status:</p>
                <p
                  className={attendance[attendee.UserID] ? "present" : "absent"}
                >
                  {attendance[attendee.UserID] ? "Present" : "Absent"}
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
