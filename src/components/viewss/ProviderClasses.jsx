import "../viewss/ClientClasses.scss";
import "../layoutt/Navbar.scss";
import "../viewss/ProviderClasses.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Actions from "../UI/Actions";
import { storedClasses } from "../viewss/storedClasses.jsx";

function ProviderClasses() {
  const [selectedClass] = useState();

  /*
  const classes = [
    {
      ClassTitle: "Foundations and Breathwork",
      classID: 1,
      ClassDay: new Date("2025-03-01"),
      ClassTime: "18:57",
      ClassDuration: 90,
      ClassLocationID: 1,
      ClassLocationName: "Surbiton Pilates Studio, Room A",
      ClassCapacity: 25,
      ClassInstructorID: 1,
      ClassInstructorName: "Pamela Wilson",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-close-up_1163-4946.jpg?t=st=1737142687~exp=1737146287~hmac=7fc4c462b36dc745420a7cef87cb8a5848fb95b7f0d11c0e8ace05514017da06&w=1800",
    },
    {
      ClassTitle: "Core Strength Basics",
      classID: 2,
      ClassDay: new Date("2025-03-08"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 2,
      ClassLocationName: "Community Fitness Centre, Esher, Studio 2",
      ClassCapacity: 25,
      ClassInstructorID: 2,
      ClassInstructorName: "James Yuen",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/high-angle-fit-people-training-outdoors_52683-136417.jpg?t=st=1737144422~exp=1737148022~hmac=d12b214e2d831837939f0a53faff9c5ff2d2d2f756e68b72eb1b5719650e2aca&w=1800",
    },
    {
      ClassTitle: "Flexibility and Spinal Mobility",
      classID: 3,
      ClassDay: new Date("2025-03-15"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 2,
      ClassLocationName: "Community Fitness Centre, Esher, Studio 2",
      ClassCapacity: 25,
      ClassInstructorID: 2,
      ClassInstructorName: "James Yuen",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/senior-couple-doing-exercises-together_23-2148282900.jpg?t=st=1737145978~exp=1737149578~hmac=237870101bc5cab13fb6a609e3ce087ec9a26ee4aeebaccc390eba065c308f3c&w=1480",
    },
    {
      ClassTitle: "Lower Body Focus",
      classID: 4,
      ClassDay: new Date("2025-03-22"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 1,
      ClassLocationName: "Surbiton Pilates Studio, Room A",
      ClassCapacity: 25,
      ClassInstructorID: 1,
      ClassInstructorName: "Pamela Wilson",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/trainer-helping-beginner-gym_23-2149561914.jpg?t=st=1737146306~exp=1737149906~hmac=bf4e69071690982dbb22ee28461f1a9e9ac4659b980cc9935287c894196a5775&w=1480",
    },
    {
      ClassTitle: "Upper Body and Posture",
      classID: 5,
      ClassDay: new Date("2025-03-29"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 2,
      ClassLocationName: "Community Fitness Centre, Esher, Studio 2",
      ClassCapacity: 25,
      ClassInstructorID: 2,
      ClassInstructorName: "James Yuen",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/people-taking-part-dance-therapy-class_23-2149346583.jpg?t=st=1737146639~exp=1737150239~hmac=b35ab939210f8abd64cf897dddbb653bd8532bab541db8aebe7f1a37fa042e23&w=1480",
    },
    {
      ClassTitle: "Balance and Coordination",
      classID: 6,

      ClassDay: new Date("2025-04-05"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 2,
      ClassLocationName: "Community Fitness Centre, Esher, Studio 2",
      ClassCapacity: 25,
      ClassInstructorID: 2,
      ClassInstructorName: "James Yuen",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/controlling-exercise-performance_1098-19834.jpg?t=st=1737146778~exp=1737150378~hmac=0a4893813347a2e3eb8353b1aa8c24f7596e8647ff0b4a5066defcc7dc5e94fd&w=1480",
    },
    {
      ClassTitle: "Core Power and Endurance",
      classID: 7,
      ClassDay: new Date("2025-04-12"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 1,
      ClassLocationName: "Surbiton Pilates Studio, Room A",
      ClassCapacity: 25,
      ClassInstructorID: 1,
      ClassInstructorName: "Pamela Wilson",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/woman-helping-men-gym-full-shot_23-2149744687.jpg?t=st=1737146246~exp=1737149846~hmac=759c1033eeaa1b99bc09b544e678a06eca2054cc2bce0eb550d8a0c54c91ce24&w=1480",
    },
    {
      ClassTitle: "Functional Movement Integration",
      classID: 8,
      ClassDay: new Date("2025-04-19"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 1,
      ClassLocationName: "Surbiton Pilates Studio, Room A",
      ClassCapacity: 25,
      ClassInstructorID: 1,
      ClassInstructorName: "Pamela Wilson",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/fitness-exercise-with-jumping-rope_23-2148387873.jpg?t=st=1737146951~exp=1737150551~hmac=067859389c5c9705be1802a002ed1e50f0109deaf54d3d00a8d46fbc8b6a0a6d&w=1480",
    },
    {
      ClassTitle: "Advanced Flow",
      classID: 9,
      ClassDay: new Date("2025-04-26"),
      ClassTime: "18:30",
      ClassDuration: 60,
      ClassLocationID: 2,
      ClassLocationName: "Community Fitness Centre, Esher, Studio 2",
      ClassCapacity: 25,
      ClassInstructorID: 2,
      ClassInstructorName: "James Yuen",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/group-sporty-people-donkey-pose_1163-4979.jpg?t=st=1737147084~exp=1737150684~hmac=3bb6dedc0539378ba2695a28e942a69b0199cc77815034ee98e239bb17d335e7&w=1480",
    },
    {
      ClassTitle: "Relaxation and Recovery",
      classID: 10,
      ClassDay: new Date("2025-05-03"),
      ClassTime: "18:00",
      ClassDuration: 60,
      ClassLocationID: 1,
      ClassLocationName: "Surbiton Pilates Studio, Room A",
      ClassCapacity: 25,
      ClassInstructorID: 1,
      ClassInstructorName: "Pamela Wilson",
      ClassProviderID: 1,
      ClassProviderName: "Wellbeing and Fitness Partners",
      ClassImageURL:
        "https://img.freepik.com/free-photo/group-sporty-people-dead-body-exercise_1163-4995.jpg?t=st=1737147244~exp=1737150844~hmac=d6134f639f6ecab03b229d9ada9b26f4fa7a816c41fdb522954012c7f600c63e&w=1480",
    },
  ];
  */

  const classes = storedClasses().classes;

  const getEndTime = (hours, mins, duration) => {
    let incHour = 0;
    let addhour = Math.floor(duration / 60);
    hours = hours + addhour;
    let checkmins = mins + (duration - 60 * Math.floor(duration / 60));

    if (addhour == 0) {
      addhour = 1;
      checkmins = mins + duration;
      mins = mins + duration;
      if (checkmins > 59) {
        incHour = 1;
        mins = checkmins - 60;
      }
    }

    if (addhour > 0 && checkmins > 59) {
      incHour = 1;
      mins = checkmins - 60;
    } else if (addhour > 0) {
      mins = mins + (duration - addhour * 60);
    }

    hours = hours + incHour;
    hours = hours.toString();
    mins = mins.toString();

    if (mins == 0) {
      mins = "00";
    } else if (mins > 0 && mins < 10) {
      mins = "0" + mins;
    }

    return hours + ":" + mins;
  };

  classes.sort((a, b) => a.ClassDay - b.ClassDay);

  return (
    <>
      <div className="instructors-classes">
        <h1 id="firstTitle1">Hello Provider !</h1>
        <h2 id="secondTitle1">Upcoming Classes</h2>
        <NavLink to="/AddClassForm">
          <Actions.Tray>
            {" "}
            <Actions.Add showText buttonText="Add new class">
              {" "}
            </Actions.Add>{" "}
          </Actions.Tray>
        </NavLink>
        <div className="cardContainer1">
          {classes.map((cls) => {
            let hour = parseInt(cls.ClassTime.substring(0, 2));
            let min = parseInt(cls.ClassTime.substring(3, 6));
            const value = getEndTime(hour, min, cls.ClassDuration);

            return (
              <div className="classesCard1" key={cls.ClassID}>
                <div className="card1">
                  <div className="leftCard1">
                    <img src={cls.ClassImageURL} alt={cls.ClassTitle} />
                  </div>
                  <div className="rightCard1">
                    <h1 className="title">{cls.ClassTitle}</h1>
                    <div className="text1">
                      <p>
                        on <b>{cls.ClassDay.toLocaleDateString()}</b>
                      </p>
                      <p>
                        {cls.ClassTime} - {value} | {cls.ClassDuration} mins
                      </p>
                      <p className="beforeExtra">
                        with {cls.ClassInstructorName}
                      </p>
                      {selectedClass === cls.classID ? (
                        <div>
                          <div className="extraDiv">
                            <hr />
                            <p className="extra">at {cls.ClassLocationName}</p>
                            <p className="lastExtra">
                              Max Capacity is {cls.ClassCapacity} People
                            </p>
                          </div>
                        </div>
                      ) : null}
                      <NavLink
                        to={`/Attendee?classId=${cls.ClassID}`}
                        className="view-attendees-link"
                      >
                        View Attendees
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProviderClasses;
