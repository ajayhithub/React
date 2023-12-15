import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Btn from "./conponent/Btn";
import Card from "./conponent/Card";

function App() {
     
  const [themeMode,setThemeMode] = useState("light");
  const darkTheme = () =>{
     setThemeMode("dark");
  }
  const lighTheme = () =>{
    setThemeMode("light");
 }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkTheme,lighTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn/>
          </div>
             
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
