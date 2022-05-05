import React, { createContext } from "react"

export const SettingContext =  createContext()

export default function SettingsContextProvider() {
    return(
        <SettingContext.Provider value={{}}>

        </SettingContext.Provider>
    )
}