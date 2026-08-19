import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import "./Profile.css";

function Profile() {
  const { profile, setProfile } = useProfile();

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
  const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!profile.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!profile.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!profile.previousJobTitle.trim()) {
      newErrors.previousJobTitle = "Previous job title is required";
    }

    if (!profile.previousExperience.trim()) {
      newErrors.previousExperience = "Previous experience is required";
    }

    if (!profile.careerGap.trim()) {
      newErrors.careerGap = "Career gap is required";
    }

    if (!profile.technicalSkills.trim()) {
      newErrors.technicalSkills = "Technical skills are required";
    }

    if (!profile.targetRole.trim()) {
      newErrors.targetRole = "Target role is required";
    }

    if (!profile.workType) {
      newErrors.workType = "Please select a work type";
    }

    if (!profile.degree.trim()) {
      newErrors.degree = "Degree is required";
    }

    setErrors(newErrors);

      setSuccessMessage("");

    if (Object.keys(newErrors).length === 0) {
      console.log("Profile Data:", profile);
      setSuccessMessage("Profile saved successfully!");
    }
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <h1>Career Profile</h1>
        <p>
          Tell us about your experience, skills, and career goals.
        </p>
      </div>

      <section className="profile-section">
        <h2>Personal Information</h2>

        <div className="profile-field">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your fullName"
            value={profile.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <p className="error-message">{errors.fullName}</p>
          )}

        </div>

        <div className="profile-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={profile.email}
            onChange={handleChange}
          />

          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}

        </div>

        <div className="profile-field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter your location"
            value={profile.location}
            onChange={handleChange}
          />
          {errors.location && (
            <p className="error-message">{errors.location}</p>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2>Career Background</h2>

        <div className="profile-field">
          <label>Previous Job Title</label>
          <input
            type="text"
            name="previousJobTitle"
            placeholder="Ex. Software Developer"
            value={profile.previousJobTitle}
            onChange={handleChange}
          />
          {errors.previousJobTitle && (
            <p className="error-message">{errors.previousJobTitle}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Previous Experience</label>
          <input
            type="text"
            name="previousExperience"
            placeholder="Ex. 3.8yrs"
            value={profile.previousExperience}
            onChange={handleChange}
          />
          {errors.previousExperience && (
            <p className="error-message">{errors.previousExperience}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Career Gap</label>
          <input
            type="text"
            name="careerGap"
            placeholder="e.g 4yrs"
            value={profile.careerGap}
            onChange={handleChange}
          />
          {errors.careerGap && (
            <p className="error-message">{errors.careerGap}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Reason for Career Gap</label>
          <textarea
            name="gapReason"
            placeholder="Tell us briefly about your career break"
            value={profile.gapReason}
            onChange={handleChange}
          />
          {errors.gapReason && (
            <p className="error-message">{errors.gapReason}</p>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2>Skills</h2>

        <div className="profile-field">
          <label>Technical Skills</label>
          <input
            type="text"
            name="technicalSkills"
            placeholder="e.g. HTML, CSS, JavaScript, React"
            value={profile.technicalSkills}
            onChange={handleChange}
          />
          {errors.technicalSkills && (
            <p className="error-message">{errors.technicalSkills}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Other Skills</label>
          <input
            type="text"
            name="otherSkills"
            placeholder="e.g. Communication, Problem Solving"
            value={profile.otherSkills}
            onChange={handleChange}
          />
          {errors.otherSkills && (
            <p className="error-message">{errors.otherSkills}</p>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2>Career Goal</h2>

        <div className="profile-field">
          <label>Target Role</label>
          <input
            type="text"
            name="targetRole"
            placeholder="e.g. Frontend Developer"
            value={profile.targetRole}
            onChange={handleChange}
          />
          {errors.targetRole && (
            <p className="error-message">{errors.targetRole}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Preferred Work Type</label>

          <select
            name="workType"
            value={profile.workType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </select>
          {errors.workType && (
            <p className="error-message">{errors.workType}</p>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2>Education</h2>

        <div className="profile-field">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="e.g. B.E. Computer Science"
            value={profile.degree}
            onChange={handleChange}
          />
          {errors.degree && (
            <p className="error-message">{errors.degree}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Graduation Year</label>
          <input
            type="text"
            name="graduationYear"
            placeholder="e.g. 2019"
            value={profile.graduationYear}
            onChange={handleChange}
          />
          {errors.graduationYear && (
            <p className="error-message">{errors.graduationYear}</p>
          )}
        </div>
      </section>

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      <button
        type="button"
        className="save-profile-btn"
        onClick={handleSubmit}
      >
        Save Profile
      </button>

    </div>
  );
}

export default Profile;