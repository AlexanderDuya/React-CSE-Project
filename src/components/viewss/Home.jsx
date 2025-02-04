import "../viewss/Home.scss";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Homepage</h1>
      <p className="home-description">We have 3 views:</p>
      <ul className="views-list">
        <li>
          <strong>Client View:</strong> View available classes and sign up to
          create an account.
        </li>
        <li>
          <strong>Provider View:</strong> Add a new class to the system.
        </li>
        <li>
          <strong>Instructor View:</strong> See their classes and mark
          attendance.
        </li>
      </ul>
    </div>
  );
}

export default Home;
