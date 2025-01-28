import "../viewss/ClientClasses.scss";
import { useState } from "react";

function ClientClasses() {
  const classes = [
    {
      ClassTitle: "Foundations and Breathwork",
      ClassCourseID: 1,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 2,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 3,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 4,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 5,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 6,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 7,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 8,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 9,
      ClassCourseName: "Spring into Spring 2025",
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
      ClassCourseID: 10,
      ClassCourseName: "Spring into Spring 2025",
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

  const getEndTime = (hours, mins, duration) => {
    let incHour = 0;

    let addhour = Math.floor(duration / 60);

    hours = hours + addhour;

    let checkmins = mins + (duration - 60 * Math.floor(duration / 60));

    //Check if we are adding time less than an hour
    if (addhour == 0) {
      addhour = 1;

      checkmins = mins + duration;

      mins = mins + duration;
      //Check if time we add will go past 59
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

    const value = hours + ":" + mins;

    return value;
  };

  const [selectedClass, setSelectedClass] = useState();
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

  classes.sort((a, b) => a.ClassDay - b.ClassDay);
  //console.log(classes);

  return (
    <>
      <h1 id="firstTitle1">Hello User!</h1>
      <h2 id="secondTitle1">Upcoming classes</h2>
      <div className="cardContainer1">
        {classes.map((class1) => {
          let hour = parseInt(class1.ClassTime.substring(0, 2));

          let min = parseInt(class1.ClassTime.substring(3, 6));

          const value = getEndTime(hour, min, class1.ClassDuration);

          return (
            <div className="classesCard1" key={class1.ClassTitle}>
              <div className="card1">
                <div className="leftCard1">
                  <img src={class1.ClassImageURL}></img>
                </div>
                <div className="rightCard1">
                  <h1 className="title">{class1.ClassTitle}</h1>
                  <div className="text1">
                    <p>
                      on <b>{class1.ClassDay.toLocaleDateString()}</b>
                    </p>

                    <p>
                      {class1.ClassTime} - {value} | {class1.ClassDuration} mins
                    </p>
                    <p className="beforeExtra">
                      with {class1.ClassInstructorName}
                    </p>
                    {selectedClass === class1.ClassCourseID ? (
                      <div>
                        <div className="extraDiv">
                          <hr></hr>
                          <p className="extra">at {class1.ClassLocationName}</p>
                          <p className="lastExtra">
                            Max Capacity is {class1.ClassCapacity} People
                          </p>
                        </div>
                        <button
                          onClick={() => handleClassClick(class1.ClassCourseID)}
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleClassClick(class1.ClassCourseID)}
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ClientClasses;
