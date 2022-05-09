
import React, { useContext, useEffect } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";


function App() {
const {pomodoro, executing, setCurrentTimer, SettingButton, children, startAnimate, startTimer, pauseTimer, updateExecute} = useContext(SettingContext)

useEffect(() => updateExecute(executing), [executing, startAnimate])

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
         
          <Button title="Settings" callback={SettingButton}/>

          <div className="time-container">
          <div className="time-wrapper">
              <CountdownAnimation 
              key={pomodoro} 
              timer={pomodoro} 
              animate={startAnimate}
               >
                {children}
                </CountdownAnimation> 


                {/* find bugs */}     
              </div>
            </div>

          <div className="button-wrapper">
            <Button title="Start" className= {!startAnimate && 'active'} callback={startTimer} />
            <Button title="Pause" className= {startAnimate && 'active'} callback={pauseTimer} />
          
          </div>
        </div>
        }
    
     </div>
  );
}

export default App;
