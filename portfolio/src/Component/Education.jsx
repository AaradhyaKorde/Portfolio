import React, { useState } from "react";
import EducationEntry from "./EducationEntry";

function Education(props){

    const [educationEntry, setEducationEntry] = useState({
        institute: "",
        marks: "",
        university: "",
        course: "",
        duration: ""
    })

    function handleEducationChange(event){
        const {name, value} = event.target;

        setEducationEntry(prevEducationEntry => {
            return {
                ...prevEducationEntry,
                [name]: value
            }
        })
    }

    function submitEducationEntry(event){

        props.onAddEducationEntry(educationEntry)

        event.preventDefault();
    }

    return(
        <div>
            <input name="institute" onChange={handleEducationChange} value={educationEntry.institute} placeholder="Institute" />
            <input name="marks" onChange={handleEducationChange} value={educationEntry.marks} placeholder="Marks" />
            <input name="university" onChange={handleEducationChange} value={educationEntry.university} placeholder="University" />
            <input name="course" onChange={handleEducationChange} value={educationEntry.course} placeholder="Course" />
            <input name="duration" onChange={handleEducationChange} value={educationEntry.duration} placeholder="Duration" />
            <button onClick={submitEducationEntry}>Add</button>
        </div>
    );
}

export default Education;