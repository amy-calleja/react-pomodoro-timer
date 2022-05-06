
import React, { useContext } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";


function App() {
const {pomodoro, executing, setCurrentTimer} = useContext(SettingContext)

  return (
    <div className="App">
    <h1>Pomodoro App</h1>
    <p>Be productive the right way.</p>

    {pomodoro !== 0 ? 
        <SetPomodoro /> :
        <div className="time-buttons">
          <ul>
            <li>
              <Button title="Work"
                  activeClass={executing.active === 'work'&& 'active-label'}
                  callback={() => setCurrentTimer("work")}/>
            </li>
            <li>
              <Button title="Short Break"
                  activeClass={executing.active === 'short'&& 'active-label'}
                  callback={() => setCurrentTimer("short")}/>
            </li>
            <li>
              <Button title="Long Break"
                  activeClass={executing.active === 'long'&& 'active-label'}
                  callback={() => setCurrentTimer("long")}/>
            </li>
          </ul>
        </div>
      }
   
   {/*<CountdownCircleTimer />*/}
    
    </div>
  );
}

export default App;
