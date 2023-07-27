import React, { useState } from "react";
import axios from "axios";


function Education(props){

    const [educationEntry, setEducationEntry] = useState({
        institute: "",
        university: "",
        course: "",
        duration: "",
        marks: ""
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

        event.preventDefault();

        props.onAddEducationEntry(educationEntry);

        axios.post("http://localhost:3001/api/saveEducationPortfolio",educationEntry)
            .then((res) => {
                console.log('Data saved successfully:', res.data);
                setEducationEntry({
                institute: "",
                university: "",
                course: "",
                duration: "",
                marks: ""
            });
        })
        .catch((error) => {
            console.error('Error saving data:', error);
          });;
    };

    return(
        <div className="educationForm">
            <form action="" onSubmit={submitEducationEntry}>
            <input name="institute" onChange={handleEducationChange} value={educationEntry.institute} placeholder="Institute" />
            <input name="university" onChange={handleEducationChange} value={educationEntry.university} placeholder="University" />
            <input name="course" onChange={handleEducationChange} value={educationEntry.course} placeholder="Course" />
            <input name="duration" onChange={handleEducationChange} value={educationEntry.duration} placeholder="Duration" />
            <input name="marks" onChange={handleEducationChange} value={educationEntry.marks} placeholder="Marks" />
            <button  type="submit" >Add</button>
            </form>
        </div>
    );
}

export default Education;