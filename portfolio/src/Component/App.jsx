import React, { useState, useEffect } from "react";
import Education from "./Education";
import EducationEntry from "./EducationEntry";
import axios from "axios";



function App() {

  //LoginStart
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setUserIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };
  //LoginEnd

  //RenderingEducationEntries
  const [educationEntries, setEducationEntries] = useState([]);

  function addEducationEntry(newEducationEntry) {
    setEducationEntries((prevEducationEntries) => [
      ...prevEducationEntries,
      newEducationEntry,
    ]);
  }

  useEffect(() => {
    axios
      .get("/api/getEducationEntries")
      .then((res) => {
        setEducationEntries(res.data);
      })
      .catch((error) => {
        console.error("Error fetching education entries:", error);
      });
  }, []);



  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>

    <div>
    {userIsLoggedIn === true && (<div className="secondaryWindow" >
              <Education onAddEducationEntry={addEducationEntry} />
            </div>)}
    </div>

    {educationEntries.map((educationEntry) => (
        <EducationEntry
          key={educationEntry._id} // Assuming you have a unique identifier (_id) for each entry
          institute={educationEntry.institute}
          university={educationEntry.university}
          course={educationEntry.course}
          duration={educationEntry.duration}
          marks={educationEntry.marks}
        />
      ))}

    </div>
  );
}

export default App;