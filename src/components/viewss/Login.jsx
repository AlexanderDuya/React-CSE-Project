import { useAuth } from "../UI/useAuth.jsx";
import Action from "../UI/Actions.jsx";
import { useNavigate } from "react-router-dom";
 
function Login()
{
    // Initialisation --------------------------------------------------
    const { login } = useAuth();
    const navigate = useNavigate();

    const client   = {
        UserID: 1,
        UserFirstname: "John",
        UserLastname: "Williams",
        UserEmail: "john.williams@example.com",
        UserPhone: "+44 7911 123456",
        UserDatejoined: "2023-02-15T00:00:00.000Z",
        UserDateofbirth: "1997-09-03T00:00:00.000Z",
        UserGenderID: 1,
        UserUsertypeID: 1,
        UserGenderName: "Male",
        UserUsertypeName: "Client"
    }

    const instructor = {
        UserID: 21,
        UserFirstname: "Pamela",
        UserLastname: "Wilson",
        UserEmail: "pam.wilson@btinternet.com",
        UserPhone: "+44 7911 123456",
        UserDatejoined: "2021-01-05T00:00:00.000Z",
        UserDateofbirth: "1981-11-22T00:00:00.000Z",
        UserGenderID: 2,
        UserUsertypeID: 2,
        UserGenderName: "Female",
        UserUsertypeName: "Instructor"
    }

    const provider = {
        UserID: 35,
        UserFirstname: "Bob",
        UserLastname: "Charles",
        UserEmail: "Bobbycharles@example.com",
        UserPhone: "07922 432156",
        UserDatejoined: "2025-02-25T00:00:00.000Z",
        UserDateofbirth: "2002-09-03T00:00:00.000Z",
        UserGenderID: 1,
        UserUsertypeID: 3,
        UserGenderName: "Male",
        UserUsertypeName: "Provider"
      }

    // State ----------------------------------------------------

    // Handlers --------------------------------------------------
    const handleClient = ()=>{
        login(client);
        navigate("/ClientClasses");
    }

    const handleInstructor = () =>{
        login(instructor);
        navigate("/InstructorsClasses");
    }

    const handleProvider = () =>{
        login(provider);
        navigate("/ProviderClasses");
    }

    // View ------------------------------------------------------
    return(
        <Action.Tray>
            <Action.Add showText buttonText="Login as Client" onClick={handleClient}/>

            <Action.Add showText buttonText="Login as Instructor" onClick={handleInstructor}/>

            <Action.Add showText buttonText="Login as Provider" onClick={handleProvider}/>
        </Action.Tray>
    );

}

export default Login;