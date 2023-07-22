import React, { useState } from "react";
import ReactDOM from "react-dom";
import WorkExperience from "../Component/WorkExperience";
import Education from "./Education";
import EducationEntry from "./EducationEntry";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setUserIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const [educationEntries, setEducationEntries] = useState([]);
    
  function addEducationEntry(newEducationEntry) {
        setEducationEntries((prevEducationEntries) => {
          return [...prevEducationEntries, newEducationEntry];
        });
      }

  

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>

    <div>
    {userIsLoggedIn === true && (<div className="secondaryWindow" >
              <Education onAddEducationEntry={addEducationEntry} />
            </div>)}
    </div>

      {educationEntries.map((educationEntry, index) => (
        <EducationEntry
          key={index}
          institute={educationEntry.institute}
          marks={educationEntry.marks}
          university={educationEntry.university}
          course={educationEntry.course}
          duration={educationEntry.duration}
        />
      ))}
    </div>
  );
}

export default App;
