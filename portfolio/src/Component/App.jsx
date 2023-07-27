import React, { useState } from "react";
import Education from "./Education";


function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setUserIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };


    
  

  

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
