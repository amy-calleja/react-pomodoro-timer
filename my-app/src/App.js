
import { useContext } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";

function App() {
const {pomodoro} = useContext(SettingContext)

  return (
    <div className="App">
    <h1>Pomodoro App</h1>
    <p>Be productive the right way.</p>
    {pomodoro !== 0 ? 
    <SetPomodoro /> :
    <><h3>Testing if set is 0</h3></>
  }
   
   {/*<CountdownCircleTimer />*/}
    </div>
  );
}

export default App;
