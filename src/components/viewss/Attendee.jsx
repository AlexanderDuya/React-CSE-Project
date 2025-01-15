import '../viewss/Attendee.scss';
import { Card, CardContainer } from '../UI/Card.jsx';


function Attendee(){

    const studentlist = [
        { "UserID": 275, "UserFirstname": "Sholeh", "UserLastname": "ABBAS", "UserEmail": "K2955214@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 276, "UserFirstname": "Hashim", "UserLastname": "ABDALLAH", "UserEmail": "K1083353@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 277, "UserFirstname": "Ahmad", "UserLastname": "ABDUL KABEER", "UserEmail": "K2990629@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/MisXC_ZEtY_OSQvatKbth6GyUEgjX9eS3hzX7J_9ODI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQxNDMyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 278, "UserFirstname": "Suheyb", "UserLastname": "ABDULQADIR", "UserEmail": "K8536850@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/O9bUHzlvamPOMiK9j-hLGhHEf9ywbB7FlKjK8yKGuaw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM4NzE0LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 279, "UserFirstname": "Ezubair", "UserLastname": "ABRAHAM", "UserEmail": "K5638915@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/BSqXpGXFt93GoCENwTf8D5y3N6o7rMSQ4w14z93bgkI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDcwNDk4LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 280, "UserFirstname": "Hisham", "UserLastname": "ABUBAKAR", "UserEmail": "K1035263@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/4fHOS2cD9Ykbz5pJ_0KQucwvzCMPQTR7-5rGAydjLGo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM0MjczLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 281, "UserFirstname": "Mahamud", "UserLastname": "ADEN", "UserEmail": "K2866646@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/tcd-7pVoSrwBAW5wxgoTdkSWLacfi6D8Km-EFdUcqSs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4OTk2LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 282, "UserFirstname": "Isaac", "UserLastname": "AFRAZEH", "UserEmail": "K7727337@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/FF4ulNLRGGsnEWCSK2hzxQ1kpTUXrQfb2_2BN4CbHj8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU4NjEzLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 283, "UserFirstname": "Danish", "UserLastname": "AHMAD", "UserEmail": "K3008749@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/-_-hyUefVoOz8qBBv31AeMbBMzZXLcCXiWAneZb0u2U/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg1NDE4LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
        { "UserID": 284, "UserFirstname": "Shuja", "UserLastname": "AHMAD", "UserEmail": "K8319360@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/vnopGiDivHG6UKp3AgGkY44U3nOfR3lLsWNKdA-KEyQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzMjQyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" }
      ];
    return(
<>
        <h1>Attendees</h1>
        <CardContainer>
        {
          studentlist.map((attendee)=>{
            return(
              <div className="attendeeCard" key={attendee.UserEmail}>
              <Card>
                 <p>{attendee.UserEmail.substring(0,8)}</p>
                 <p>{`${attendee.UserFirstname} ${attendee.UserLastname}`}</p>
                 <img src={attendee.UserImageURL}/>
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