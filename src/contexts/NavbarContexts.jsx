'use client';
const { createContext, useState, useContext } = require("react");



const NavbarContext = createContext();

export function NavbarProvider({children}){
    //active dropdowns object to store their states
    const activeState = {
        "sidebar": true,
        "profile": false,
        "notifications": false,
        "cart": false,
    }
    const [active, setActive] = useState(activeState);

    return (
        <NavbarContext.Provider value={[active, setActive]}>
            {children}
        </NavbarContext.Provider>
    );
}

export function useNavbarContext(){
    const context = useContext(NavbarContext);

    return context;
}
