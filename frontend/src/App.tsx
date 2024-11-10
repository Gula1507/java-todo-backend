import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import ToDoPage from "./components/ToDoPage.tsx";
import AddToDo from "./components/AddToDo.tsx";
import {ToDo} from "./types/ToDo.ts";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [todos, setToDos] = useState<ToDo[]>([])

    useEffect(() => {
        console.log("one time")
        loadAllToDos()
    }, [])

    const loadAllToDos = () => {
        axios.get("/api/todo").then((response) => {
            setToDos(response.data)
        })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveToDo = (newToDo: ToDo) => {
        setToDos([...todos, newToDo]); // Neues ToDo zu der Liste hinzufügen
    };
    return (
        <>
            <Header/>
            <ToDoPage todos={todos} saveToDo={saveToDo}/>

            <Routes>

                <Route path="/todo" element={<ToDoPage todos={todos} saveToDo={saveToDo}/>}/>
                <Route path="/add" element={<AddToDo/>}/>
            </Routes>
        </>
    )
}

export default App
