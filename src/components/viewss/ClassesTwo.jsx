import '../viewss/Classes.scss';
import '../layoutt/Navbar.scss';
import '../viewss/ClassesTwo.scss';
import React, { useState } from 'react';




function ClassesTwo(){
    const [selectedClass, setSelectedClass] = useState();

    const classes = [
        {
          ClassTitle: "Foundations and Breathwork",
          ClassCourseID: 1,
          ClassCourseName: "Spring into Spring 2025",
          ClassDay: new Date("2025-03-01"),
          ClassTime: "18:30",
          ClassDuration: 60,
          ClassLocationID: 1,
          ClassLocationName: "Surbiton Pilates Studio, Room A",
          ClassCapacity: 25,
          ClassInstructorID: 1,
          ClassInstructorName: "Pamela Wilson",
          ClassProviderID: 1,
          ClassProviderName: "Wellbeing and Fitness Partners",
          ClassImageURL: "https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-close-up_1163-4946.jpg?t=st=1737142687~exp=1737146287~hmac=7fc4c462b36dc745420a7cef87cb8a5848fb95b7f0d11c0e8ace05514017da06&w=1800",
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
          ClassImageURL: "https://img.freepik.com/free-photo/high-angle-fit-people-training-outdoors_52683-136417.jpg?t=st=1737144422~exp=1737148022~hmac=d12b214e2d831837939f0a53faff9c5ff2d2d2f756e68b72eb1b5719650e2aca&w=1800",
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
          ClassImageURL: "https://img.freepik.com/free-photo/senior-couple-doing-exercises-together_23-2148282900.jpg?t=st=1737145978~exp=1737149578~hmac=237870101bc5cab13fb6a609e3ce087ec9a26ee4aeebaccc390eba065c308f3c&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/trainer-helping-beginner-gym_23-2149561914.jpg?t=st=1737146306~exp=1737149906~hmac=bf4e69071690982dbb22ee28461f1a9e9ac4659b980cc9935287c894196a5775&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/people-taking-part-dance-therapy-class_23-2149346583.jpg?t=st=1737146639~exp=1737150239~hmac=b35ab939210f8abd64cf897dddbb653bd8532bab541db8aebe7f1a37fa042e23&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/controlling-exercise-performance_1098-19834.jpg?t=st=1737146778~exp=1737150378~hmac=0a4893813347a2e3eb8353b1aa8c24f7596e8647ff0b4a5066defcc7dc5e94fd&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/woman-helping-men-gym-full-shot_23-2149744687.jpg?t=st=1737146246~exp=1737149846~hmac=759c1033eeaa1b99bc09b544e678a06eca2054cc2bce0eb550d8a0c54c91ce24&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/fitness-exercise-with-jumping-rope_23-2148387873.jpg?t=st=1737146951~exp=1737150551~hmac=067859389c5c9705be1802a002ed1e50f0109deaf54d3d00a8d46fbc8b6a0a6d&w=1480",
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
          ClassImageURL: "https://img.freepik.com/free-photo/group-sporty-people-donkey-pose_1163-4979.jpg?t=st=1737147084~exp=1737150684~hmac=3bb6dedc0539378ba2695a28e942a69b0199cc77815034ee98e239bb17d335e7&w=1480",
        },
        {
          ClassTitle: "Relaxation and Recovery",
          ClassCourseID: 10,
          ClassCourseName: "Spring into Spring 2025",
          ClassDay: new Date("2025-05-03"),
          ClassTime: "18:30",
          ClassDuration: 60,
          ClassLocationID: 1,
          ClassLocationName: "Surbiton Pilates Studio, Room A",
          ClassCapacity: 25,
          ClassInstructorID: 1,
          ClassInstructorName: "Pamela Wilson",
          ClassProviderID: 1,
          ClassProviderName: "Wellbeing and Fitness Partners",
          ClassImageURL: "https://img.freepik.com/free-photo/group-sporty-people-dead-body-exercise_1163-4995.jpg?t=st=1737147244~exp=1737150844~hmac=d6134f639f6ecab03b229d9ada9b26f4fa7a816c41fdb522954012c7f600c63e&w=1480",
        }
      ];
    const attendees = [
        {
          ClientID: 1,
          ClientFirstname: "John",
          ClientLastname: "Doe",
          ClientEmail: "john.doe@example.com",
          ClientPhone: "+44 7911 123456",
          ClientDatejoined: new Date("2023-02-15"),
          ClientAge: 28,
          ClientGenderID: 1,
          ClientGenderName: "Male",
          ClassCourseID: 1,
        },
        {
          ClientID: 2,
          ClientFirstname: "Aisha",
          ClientLastname: "Ahmed",
          ClientEmail: "aisha.ahmed@example.com",
          ClientPhone: "+44 7911 567890",
          ClientDatejoined: new Date("2024-06-01"),
          ClientAge: 34,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 2,
        },
        {
          ClientID: 3,
          ClientFirstname: "Zara",
          ClientLastname: "Patel",
          ClientEmail: "zara.patel@example.com",
          ClientPhone: "+44 7911 876543",
          ClientDatejoined: new Date("2022-11-20"),
          ClientAge: 25,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 3,
        },
        {
          ClientID: 4,
          ClientFirstname: "Mia",
          ClientLastname: "Brown",
          ClientEmail: "mia.brown@example.com",
          ClientPhone: "+44 7911 234567",
          ClientDatejoined: new Date("2023-08-30"),
          ClientAge: 30,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 4,
        },
        {
          ClientID: 5,
          ClientFirstname: "Sarah",
          ClientLastname: "Lee",
          ClientEmail: "sarah.lee@example.com",
          ClientPhone: "+44 7911 345678",
          ClientDatejoined: new Date("2024-01-10"),
          ClientAge: 26,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 5,
        },
        {
          ClientID: 6,
          ClientFirstname: "David",
          ClientLastname: "Harris",
          ClientEmail: "david.harris@example.com",
          ClientPhone: "+44 7911 567987",
          ClientDatejoined: new Date("2023-05-22"),
          ClientAge: 29,
          ClientGenderID: 1,
          ClientGenderName: "Male",
          ClassCourseID: 6,
        },
        {
          ClientID: 7,
          ClientFirstname: "Olivia",
          ClientLastname: "Martinez",
          ClientEmail: "olivia.martinez@example.com",
          ClientPhone: "+44 7911 678012",
          ClientDatejoined: new Date("2024-07-12"),
          ClientAge: 32,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 7,
        },
        {
          ClientID: 8,
          ClientFirstname: "Sofia",
          ClientLastname: "Garcia",
          ClientEmail: "sofia.garcia@example.com",
          ClientPhone: "+44 7911 432109",
          ClientDatejoined: new Date("2022-12-15"),
          ClientAge: 24,
          ClientGender: "Female",
          ClassCourseID: 8,
        },
        {
          ClientID: 9,
          ClientFirstname: "Kai",
          ClientLastname: "Tanaka",
          ClientEmail: "kai.tanaka@example.com",
          ClientPhone: "+44 7911 654321",
          ClientDatejoined: new Date("2023-10-01"),
          ClientAge: 27,
          ClientGenderID: 3,
          ClientGenderName: "Rather not say",
          ClassCourseID: 9,
        },
        {
          ClientID: 10,
          ClientFirstname: "Daniel",
          ClientLastname: "Thompson",
          ClientEmail: "daniel.thompson@example.com",
          ClientPhone: "+44 7911 765432",
          ClientDatejoined: new Date("2024-03-10"),
          ClientAge: 33,
          ClientGenderID: 1,
          ClientGenderName: "Male",
          ClassCourseID: 10,
        },
        {
          ClientID: 11,
          ClientFirstname: "Isabella",
          ClientLastname: "Robinson",
          ClientEmail: "isabella.robinson@example.com",
          ClientPhone: "+44 7911 876210",
          ClientDatejoined: new Date("2023-07-18"),
          ClientAge: 31,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 1,
        },
        {
          ClientID: 12,
          ClientFirstname: "Jamal",
          ClientLastname: "Ali",
          ClientEmail: "jamal.ali@example.com",
          ClientPhone: "+44 7911 987654",
          ClientDatejoined: new Date("2024-09-01"),
          ClientAge: 28,
          ClientGenderID: 1,
          ClientGenderName: "Male",
          ClassCourseID: 2,
        },
        {
          ClientID: 13,
          ClientFirstname: "Mia",
          ClientLastname: "Lewis",
          ClientEmail: "mia.lewis@example.com",
          ClientPhone: "+44 7911 246810",
          ClientDatejoined: new Date("2023-01-12"),
          ClientAge: 26,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 3,
        },
        {
          ClientID: 14,
          ClientFirstname: "Ethan",
          ClientLastname: "Hall",
          ClientEmail: "ethan.hall@example.com",
          ClientPhone: "+44 7911 135790",
          ClientDatejoined: new Date("2024-02-22"),
          ClientAge: 35,
          ClientGenderID: 1,
          ClientGenderName: "Male",
          ClassCourseID: 4,
        },
        {
          ClientID: 15,
          ClientFirstname: "Ava",
          ClientLastname: "Young",
          ClientEmail: "ava.young@example.com",
          ClientPhone: "+44 7911 369852",
          ClientDatejoined: new Date("2023-11-05"),
          ClientAge: 22,
          ClientGenderID: 2,
          ClientGenderName: "Female",
          ClassCourseID: 5,
        },
      ];
    
    // Function to retrieve a list of attendees for a specific class based on its ID
function getAttendeesForClass(classCourseID) {
  // Use the 'filter' method to iterate over the 'attendees' array
  return attendees.filter(function(attendee) {
      // Check if the 'ClassCourseID' property of the current attendee matches the given 'classCourseID'
      return attendee.ClassCourseID === classCourseID;
  });
  // The function returns a new array containing only attendees whose 'ClassCourseID' matches the specified 'classCourseID'
}



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

    // main component rendering the list of classes and their attendees
      return (
        <>   
      
            <h1 id='firstTitle'>Hello Instructor!</h1>
            <h2 id='secondTitle'> Your classes</h2>
            <div className='cardContainer'>
            {   // Iterate through the list of classes, creates a card for each one
                classes.map((class1) => {
                  // uses getAttendees for Class function to retrieve the current attendees for the current class
                    const classAttendees = getAttendeesForClass(class1.ClassCourseID);

                    // Render the card for each of the classes
                    return(
                        <div className='classesCard' key={class1.ClassCourseID}>

                          {/* when clicked the handleClass fucntion is called and passes the*/}
                            <div className='card' onClick={() => handleClassClick(class1.ClassCourseID)}>
                                <div className='rightCard'>
                                    <img src={class1.ClassImageURL} alt={class1.ClassTitle} />
                                </div>
                                <div className='leftCard'>
                                    <h1>{class1.ClassTitle}</h1>
                                    <div className='text'>
                                        <p>on <b>{class1.ClassDay.toLocaleDateString()}</b></p>
                                        <p>{class1.ClassTime} | {class1.ClassDuration} mins</p>
                                        <p>with {class1.ClassInstructorName}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* When the class is selected, show its attendees*/}
                            {selectedClass === class1.ClassCourseID ? (  // Check if selectedClass matches the current class's ID
                            <div className='attendeesList'>
                               <h2>Attendees</h2>
                                  <ul>
                                      {classAttendees.map(attendee => (  // Map through the class attendees to render each one
                                         <li key={attendee.ClientID}>
                                            <p>{attendee.ClientFirstname} {attendee.ClientLastname}</p>  {/* Display attendee's name */}
                                            <p>Email: {attendee.ClientEmail}</p>  {/* Display attendee's email */}
                                            <p>Phone: {attendee.ClientPhone}</p>  {/* Display attendee's phone number */}
                                            <p>Gender: {attendee.ClientGenderName}</p>
                                         </li>
                                           ))}
                                  </ul>
                            </div>
                           ) : null}  {/* If selectedClass does not match, render nothing (null)*/}

                        </div>
                    );
                })
            }
            </div>
        </>
    );
}

export default ClassesTwo;
