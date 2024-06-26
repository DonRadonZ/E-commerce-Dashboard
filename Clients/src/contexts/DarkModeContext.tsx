
import { createContext, ReactNode, useEffect } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState';

type DarkModeCtxType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void
}

export const DarkModeContext = createContext<DarkModeCtxType>({
    isDarkMode: false,
    toggleDarkMode: () => {}
});

export default function DarkModeProvider({children}:{children: ReactNode}) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme: dark)").matches,"isDarkMode");

    useEffect(function(){
        if(isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else{
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode((isDark:boolean) => !isDark)
    }

  return (
    <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}

