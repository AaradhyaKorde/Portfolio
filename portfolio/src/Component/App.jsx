import React, { useState } from "react";
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

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>

    <div>
    {userIsLoggedIn === true && (<div className="secondaryWindow" >
              <Education />
            </div>)}
    </div>
    </div>
  );
}

export default App;