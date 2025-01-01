import { createContext, useState, useContext } from "react";

const ApplicationStateContext = createContext({
    display_sidebar: false,
    setDisplaySidebar: () => {},
});

export function ApplicationContext({ children }) {
    const [display_sidebar, setDisplaySidebar] = useState(false);

    return (
        <ApplicationStateContext.Provider value={{
            display_sidebar,
            setDisplaySidebar
        }}>
            {children}
        </ApplicationStateContext.Provider>
    );
}

export const useApplicationContext = () => {
    return useContext(ApplicationStateContext);
};
