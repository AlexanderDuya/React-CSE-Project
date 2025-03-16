import "../viewss/InstructorsClasses.scss";
import ClassesView from "../entitites/ClasssesView.jsx";

function InstructorsClasses() {
  // Initialization ---------------------------------------------------------

  // State ------------------------------------------------------------------

  // Handlers --------------------------------------------------------------

  // View ------------------------------------------------------------------s
  return (
    <>
      <div className="instructors-classes">
        <h1 id="firstTitle1">Hello Instructor!</h1>
        <h2 id="secondTitle1">Upcoming Classes</h2>

        <ClassesView type="instructor" ></ClassesView>
      </div>
    </>
  );
}

export default InstructorsClasses;
