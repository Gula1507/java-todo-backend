import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import ToDos from "./components/ToDos.tsx";
import AddToDo from "./components/AddToDo.tsx";
import Overview from "./Overview.tsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/"     element={<Overview/>}/>
                <Route path="/todo" element={<ToDos/>}/>
                {/*<Route path="/add" element={<AddToDo/>}/>*/}
            </Routes>
        </>
    )
}

export default App
