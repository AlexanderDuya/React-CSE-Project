import "../viewss/ClientClasses.scss";
import Action, { Collapse } from "../UI/Actions.jsx";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Confirm } from "../UI/Notifications.jsx";
import { useModal } from "../UI/Modal.jsx";
import { useAuth } from "../UI/useAuth.jsx";
import useLoad from "../Api/useLoad.jsx";
import API from "../Api/API.jsx";

function ClientClasses() {
  //Initialization ---------------------------------------------------------

  const { loggedInUser } = useAuth();
  const myClassesEndPoint = `/classes`;
  let myBookingsEndPoint = `/bookings`;
  const myEnrolledClassesEndPoint = `/classes/users/${loggedInUser.UserID}`;

  const [showConfirm, confirmContent, openConfirm, closeConfirm] =
    useModal(false);

  const bookings = {
    BookingUserID: null,
    BookingClassID: null,
    BookingBookingdate: null,
    BookingBookingstatusID: 1,
    BookingBookingstatusName: "Pending",
  };

  const URLs = [];
  URLs[0] =
    "https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-close-up_1163-4946.jpg?t=st=1737142687~exp=1737146287~hmac=7fc4c462b36dc745420a7cef87cb8a5848fb95b7f0d11c0e8ace05514017da06&w=1800";
  URLs[1] =
    "https://img.freepik.com/free-photo/high-angle-fit-people-training-outdoors_52683-136417.jpg?t=st=1737144422~exp=1737148022~hmac=d12b214e2d831837939f0a53faff9c5ff2d2d2f756e68b72eb1b5719650e2aca&w=1800";
  URLs[2] =
    "https://img.freepik.com/free-photo/senior-couple-doing-exercises-together_23-2148282900.jpg?t=st=1737145978~exp=1737149578~hmac=237870101bc5cab13fb6a609e3ce087ec9a26ee4aeebaccc390eba065c308f3c&w=1480";
  URLs[3] =
    "https://img.freepik.com/free-photo/trainer-helping-beginner-gym_23-2149561914.jpg?t=st=1737146306~exp=1737149906~hmac=bf4e69071690982dbb22ee28461f1a9e9ac4659b980cc9935287c894196a5775&w=1480";
  URLs[4] =
    "https://img.freepik.com/free-photo/people-taking-part-dance-therapy-class_23-2149346583.jpg?t=st=1737146639~exp=1737150239~hmac=b35ab939210f8abd64cf897dddbb653bd8532bab541db8aebe7f1a37fa042e23&w=1480";
  URLs[5] =
    "https://img.freepik.com/free-photo/controlling-exercise-performance_1098-19834.jpg?t=st=1737146778~exp=1737150378~hmac=0a4893813347a2e3eb8353b1aa8c24f7596e8647ff0b4a5066defcc7dc5e94fd&w=1480";
  URLs[6] =
    "https://img.freepik.com/free-photo/woman-helping-men-gym-full-shot_23-2149744687.jpg?t=st=1737146246~exp=1737149846~hmac=759c1033eeaa1b99bc09b544e678a06eca2054cc2bce0eb550d8a0c54c91ce24&w=1480";
  URLs[7] =
    "https://img.freepik.com/free-photo/fitness-exercise-with-jumping-rope_23-2148387873.jpg?t=st=1737146951~exp=1737150551~hmac=067859389c5c9705be1802a002ed1e50f0109deaf54d3d00a8d46fbc8b6a0a6d&w=1480";
  URLs[8] =
    "https://img.freepik.com/free-photo/group-sporty-people-donkey-pose_1163-4979.jpg?t=st=1737147084~exp=1737150684~hmac=3bb6dedc0539378ba2695a28e942a69b0199cc77815034ee98e239bb17d335e7&w=1480";
  URLs[9] =
    "https://img.freepik.com/free-photo/group-sporty-people-dead-body-exercise_1163-4995.jpg?t=st=1737147244~exp=1737150844~hmac=d6134f639f6ecab03b229d9ada9b26f4fa7a816c41fdb522954012c7f600c63e&w=1480";

  const getEndTime = (hours, mins, duration) => {
    let totalMins = hours * 60 + mins + duration; // Convert everything to minutes
    let endHours = Math.floor(totalMins / 60); // Get the new hours
    let endMins = totalMins % 60; // Get remaining minutes

    // Ensure hours wrap correctly (e.g., in a 24-hour system)
    endHours = endHours % 24;

    // Format minutes to always be two digits
    let formattedMins = endMins < 10 ? "0" + endMins : endMins.toString();

    return endHours + ":" + formattedMins;
  };

  // State ------------------------------------------------------------

  const [selectedClass, setSelectedClass] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [topbutton, setTopbutton] = useState(true);

  const [classess, setClassess, isClassesLoading, loadClassess] =
    useLoad(myClassesEndPoint);

  const [classid, setClassid] = useState(null);
  const [bookinglist, setBookinglist] = useState(null);
  const [
    enrolledClasses,
    setEnrolledClasses,
    isEnrolledClassesLoading,
    loadEnrolledClasses,
  ] = useLoad(myEnrolledClassesEndPoint);

  useEffect(() => {
    // Checks window width size when user first enters page as a small screen
    if (window.innerWidth <= 783) {
      setTopbutton(false);
    }
    // Checks window width size whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 783) {
        setTopbutton(false);
      } else {
        setTopbutton(true);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers ---------------------------------------------------

  function handleClassClick(classID) {
    // Check if the clicked class is already selected
    if (selectedClass === classID) {
      // If it is, deselect it by setting selectedClass to null
      setSelectedClass(null);
    } else {
      // Otherwise, select the clicked class
      setSelectedClass(classID);
    }
  }

  // Assigns an image url field to every field with values after 10 with same image
  let classes = null;
  if (classess != null) {
    var count = -1;
    classes = classess.map((person) => {
      count += 1;
      return {
        ...person, // Spread operator to copy the original attributes
        ClassImageURL: count > 9 ? URLs[0] : URLs[count], // Add the new attribute
      };
    });
  }

  const handleEnroll = (id) => {
    openConfirm("Are you sure");

    setClassid(id);
  };

  const checkEnroll = (classID) => {
    let valid = true;
    enrolledClasses.map((x) => {
      if (x.ClassID == classID) {
        valid = false;
      }
    });
    return valid;
  };

  const handleSubmit = async () => {
    bookings.BookingUserID = loggedInUser.UserID;
    bookings.BookingClassID = classid;

    const d = new Date();
    bookings.BookingBookingdate = d.toISOString();

    const result = await API.post(myBookingsEndPoint, bookings);
    if (result.isSuccess);
  };

  // View ---------------------------------------------#

  return (
    <>
      <h1 id="firstTitle1">Hello User!</h1>
      <h2 id="secondTitle1">Upcoming classes</h2>
      {!classes && !bookinglist ? (
        <p>Loading records</p>
      ) : (
        <>
          <Confirm
            show={showConfirm}
            message={confirmContent}
            onConfirm={handleSubmit}
            onDismiss={closeConfirm}
          />

          {/* Add Client Button */}
          <NavLink to="/AddClientForm" className="navLinkButton">
            Create an Account
          </NavLink>
          <div className="cardContainer1">
            {classes.map((class1) => {
              let hour = parseInt(class1.ClassTime.substring(0, 2));

              let min = parseInt(class1.ClassTime.substring(3, 6));

              const value = getEndTime(hour, min, class1.ClassDuration);

              return (
                <div className="classesCard1" key={class1.ClassID}>
                  <div className="card1">
                    <div className="leftCard1">
                      <img src={class1.ClassImageURL}></img>
                    </div>
                    <div className="rightCard1">
                      {topbutton == false && (
                        <h1 className="title">{class1.ClassTitle} </h1>
                      )}
                      {topbutton == true && (
                        <h1 className="title">
                          {class1.ClassTitle}{" "}
                          {selectedClass === class1.ClassID ? (
                            <button
                              onClick={() => handleClassClick(class1.ClassID)}
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/collapse-arrow.png"
                                alt="Collapse icon"
                              />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleClassClick(class1.ClassID)}
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/expand-arrow.png"
                                alt="Expand icon"
                              />
                            </button>
                          )}
                        </h1>
                      )}
                      <div className="text1">
                        <p>
                          on <b>{class1.ClassDay.substring(0, 10)}</b>
                        </p>

                        <p>
                          {class1.ClassTime.substring(0, 5)} - {value} |{" "}
                          {class1.ClassDuration} mins
                        </p>
                        <p className="beforeExtra">
                          with {class1.ClassInstructorName}
                        </p>
                        {checkEnroll(class1.ClassID) ? (
                          <button
                            id="enroll"
                            onClick={() => handleEnroll(class1.ClassID)}
                          >
                            Enroll here
                          </button>
                        ) : (
                          <p>Your are already enrolled</p>
                        )}
                        {selectedClass === class1.ClassID ? (
                          <div>
                            <div className="extraDiv">
                              <hr></hr>
                              <p className="extra">
                                at {class1.ClassLocationName}
                              </p>
                              <p className="lastExtra">
                                Max Capacity is {class1.ClassCapacity} People
                              </p>
                            </div>
                          </div>
                        ) : null}
                        {topbutton === false &&
                          (selectedClass === class1.ClassID ? (
                            <button
                              className="bottombutton"
                              onClick={() => handleClassClick(class1.ClassID)}
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/collapse-arrow.png"
                                alt="Collapse icon"
                              />
                            </button>
                          ) : (
                            <button
                              className="bottombutton"
                              onClick={() => handleClassClick(class1.ClassID)}
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/expand-arrow.png"
                                alt="Expand icon"
                              />
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default ClientClasses;
