import Body from "./components/Body"
import Header from "./components/Header"
import { useAppSelector } from "./utils/types"


function App() {
const showDarkMode = useAppSelector(store => store.darkMode.showDarkMode)

  return (
    <div className={ showDarkMode ? "bg-black" : "bg-white"}>
   
     <Header />
     <Body />
    
    </div>
  )
}

export default App
