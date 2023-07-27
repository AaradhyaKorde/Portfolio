import React from "react";

function EducationEntry(props){
 return (
    <div className="educationEntry">
        <h2>{props.institute}</h2>
        <h2>{props.university}</h2>
        <h3>{props.course}</h3>
        <h3>{props.duration}</h3>
        <h3>{props.marks}</h3>
    </div>
 );
}

export default EducationEntry;