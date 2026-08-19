import { useProfile } from "../context/ProfileContext";
import "./Dashboard.css";

function Dashboard() {
  const { profile } = useProfile();
  
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h1>
          Welcome back{profile.fullName ? `, ${profile.fullName}` : ""}! 👋
        </h1>
        <p>Here's an overview of your career relaunch journey.</p>
      </div>

      
      <section className="dashboard-section">
        <h2>Career Goal</h2>
        <p>{profile.targetRole || "Not set yet"}</p>
      </section>

      <section className="dashboard-section">
        <h2>Career Journey</h2>
        <p>
          Previous Experience:{" "}
          {profile.previousJobTitle || "Not set yet"}
        </p>

        <p>
          Career Gap:{" "}
          {profile.careerGap || "Not set yet"}
        </p>
      </section>

      <section className="dashboard-section">
        <h2>Skills</h2>
        <p>{profile.technicalSkills || "Not set yet"}</p>
      </section>

      <section className="dashboard-section">
        <h2>Work Preference</h2>
        <p>{profile.workType || "Not set yet"}</p>
      </section>

      <section className="dashboard-section">
        <h2>Roadmap Progress</h2>

        <p>40% Complete</p>

        <div className="roadmap-progress-bar">
          <div
            className="roadmap-progress-fill"
            style={{ width: "40%" }}
          ></div>
        </div>

        <p>Keep going! You're making progress in your career relaunch journey.</p>
      </section>

      <section className="dashboard-section">
        <h2>Next Step</h2>

        <h3>Complete JavaScript Fundamentals</h3>

        <p>
          Strengthen your JavaScript fundamentals before moving on to React.
        </p>

        <button>Continue Roadmap</button>
      </section>

    </div>
  );
}

export default Dashboard;