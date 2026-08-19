import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    location: "",
    previousJobTitle: "",
    previousExperience: "",
    careerGap: "",
    gapReason: "",
    technicalSkills: "",
    otherSkills: "",
    targetRole: "",
    workType: "",
    degree: "",
    graduationYear: "",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}