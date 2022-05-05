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

    }

    return(
        <SettingContext.Provider value={{}}>
            {props.children}
        </SettingContext.Provider>
    )
}