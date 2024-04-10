import useLocalStorage from "./useLocalStorage";
import './theme.css';
export default function LightDarkMode(){
    const[theme,setTheme]=useLocalStorage('theme','dark');
    const handleToggleTheme=()=>{
        setTheme(theme =="light"?"dark":"light");
        
    }
    return(
        <div className="light-dark-mode" data-theme={theme}>
           <div className="container">
           <p>hello World</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
           </div>
        </div>
    );
}