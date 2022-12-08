import React, { useState } from "react";
import { useLocalStorage } from 'usehooks-ts'

const DataContext = React.createContext({});
const DataProvider = ({ children }) => {

    const [open, setOpen] = useState(true);
    const [user, setUser] = useLocalStorage("user", null)
    const [loggedUser, setLoggedUser] = useLocalStorage("loggedUser", false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <DataContext.Provider value={{ open, handleDrawerClose, handleDrawerOpen, user, setUser, loggedUser, setLoggedUser }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };