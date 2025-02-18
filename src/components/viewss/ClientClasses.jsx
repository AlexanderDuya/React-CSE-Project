import "../viewss/ClientClasses.scss";
import Action, { Collapse } from "../UI/Actions.jsx";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { storedClasses } from "../viewss/storedClasses.jsx";

function ClientClasses() {
  //Initialization ---------------------------------------------------------

  const apiURL = "https://softwarehub.uk/unibase/events/api";
  const myClassesEndPoint = `${apiURL}/classes`;

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

  const [classes, setClasses] = useState(null);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setClasses(result);
  };

  useEffect(() => {
    apiGet(myClassesEndPoint);
  }, [myClassesEndPoint]);

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

  function handleClassClick(classCourseID) {
    // Check if the clicked class is already selected
    if (selectedClass === classCourseID) {
      // If it is, deselect it by setting selectedClass to null
      setSelectedClass(null);
    } else {
      // Otherwise, select the clicked class
      setSelectedClass(classCourseID);
    }
  }

  // View ---------------------------------------------#

  return (
    <>
      <h1 id="firstTitle1">Hello User!</h1>
      <h2 id="secondTitle1">Upcoming classes</h2>
      {!classes ? (
        <p>Loading records</p>
      ) : (
        <>
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
                      {topbutton == true && (
                        <h1 className="title">
                          {class1.ClassTitle}{" "}
                          {selectedClass === class1.ClassCourseID ? (
                            <button
                              onClick={() =>
                                handleClassClick(class1.ClassCourseID)
                              }
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/collapse-arrow.png"
                                alt="Collapse icon"
                              />
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleClassClick(class1.ClassCourseID)
                              }
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
                          on <b>{class1.ClassDay}</b>
                        </p>

                        <p>
                          {class1.ClassTime} - {value} | {class1.ClassDuration}{" "}
                          mins
                        </p>
                        <p className="beforeExtra">
                          with {class1.ClassInstructorName}
                        </p>
                        {selectedClass === class1.ClassCourseID ? (
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
                          (selectedClass === class1.ClassCourseID ? (
                            <button
                              className="bottombutton"
                              onClick={() =>
                                handleClassClick(class1.ClassCourseID)
                              }
                            >
                              <img
                                src="https://img.icons8.com/material-sharp/24/FFFFFF/collapse-arrow.png"
                                alt="Collapse icon"
                              />
                            </button>
                          ) : (
                            <button
                              className="bottombutton"
                              onClick={() =>
                                handleClassClick(class1.ClassCourseID)
                              }
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
