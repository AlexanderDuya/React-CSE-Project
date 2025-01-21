import '../viewss/Attendee.scss';
import { Card, CardContainer } from '../UI/Card.jsx';


function Attendee(){

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
  
    return(
<>
        <h1>Attendees</h1>
        <CardContainer>
        {
          attendees.map((attendee)=>{
            return(
              <div className="attendeeCard" key={attendee.ClientEmail}>
              <Card>
                 
                 <p>{`${attendee.ClientFirstname}  ${attendee.ClientLastname}`}</p>
                 
              </Card>
              </div>
            )

          })
        }
        </CardContainer>
        </>
    );
}

export default Attendee;