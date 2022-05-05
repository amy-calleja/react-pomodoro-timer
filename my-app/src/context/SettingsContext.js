import React, { createContext } from "react"

export const SettingContext =  createContext()

export default function SettingsContextProvider(props) {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function startTimer() {
        setStartAnimate(true)

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }
 
    function SettingButton() {
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })  
        setTimerTime(executing)
    }

    function setTimerTime(evaluate) {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                    break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
    
            default:
                setPomodoro(0)
                break;
        }
    }

    function children({remainingTime}) {
        const minutes= Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

     return `${minutes}:${seconds}`
    }

    return(
        <SettingContext.Provider value={{
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingButton,
            setCurrentTimer,
            updateExecute,
            children
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}