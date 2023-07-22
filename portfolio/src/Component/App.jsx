import React, { useState } from "react";
import ReactDOM from "react-dom";
import WorkExperience from "../Component/WorkExperience";
import Education from "./Education";
import EducationEntry from "./EducationEntry";

function App(){
    const [educationEntries, setEducationEntries] = useState([]);
    function addEducationEntry(newEducationEntry){
        setEducationEntries(prevEducationEntries => {
           return [...prevEducationEntries, newEducationEntry ];
        })
    }
return(
    <div>
        <Education onAddEducationEntry={addEducationEntry} />
        {educationEntries.map((educationEntry) => {
            return <EducationEntry institute={educationEntry.institute} marks={educationEntry.marks} university={educationEntry.university} course={educationEntry.course} duration={educationEntry.duration}/>
        })}
    </div>
); 
}

export default App;