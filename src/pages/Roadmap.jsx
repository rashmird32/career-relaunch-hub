import "./Roadmap.css";
import { useState } from "react";

function Roadmap() {
  const [topics, setTopics] = useState([
    { id: 1, name: "HTML", completed: true },
    { id: 2, name: "CSS", completed: true },
    { id: 3, name: "JavaScript", completed: true },
    { id: 4, name: "Git", completed: false },
    { id: 5, name: "React", completed: false },
    { id: 6, name: "Projects", completed: false },
    { id: 7, name: "Interview Prep", completed: false },
  ]);

  const toggleTopic = (id) => {
    setTopics(
      topics.map((topic) =>
        topic.id === id
          ? { ...topic, completed: !topic.completed }
          : topic
      )
    );
  };

  const completedCount = topics.filter((topic) => topic.completed).length;
  const progressPercentage = (completedCount / topics.length) * 100;

  return (
    <div className="roadmap-container">
      <h1>Frontend Developer Roadmap</h1>

      <p>Your journey to becoming job-ready.</p>

      <p>
        Progress: {completedCount} / {topics.length} completed
      </p>
      <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>

      <div>
        {topics.map((topic) => (
          <div key={topic.id} className={`roadmap-item ${
                  topic.completed ? "completed" : "incomplete"
                }`}>
            <span>{topic.completed ? "✓" : "○"}</span>

            <span>{topic.name}</span>

            <button onClick={() => toggleTopic(topic.id)}>
              {topic.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;