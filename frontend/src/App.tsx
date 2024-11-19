import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import ToDoPage from "./components/ToDoPage.tsx";
import {ToDo} from "./models/ToDo.ts";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [todos, setToDos] = useState<ToDo[]>([])

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    function getUser() {
        axios.get("api/users/me")
            .then(response => {
                console.log(response.data)
            })
    }

    useEffect(() => {
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
            <button onClick={login}>Login</button>
            <button onClick={getUser}>Me</button>
            <Header/>
            {/*<ToDoPage todos={todos} saveToDo={saveToDo} onToDoChanged={loadAllToDos}/>*/}

            <Routes>
                <Route path="/todos" element={<ToDoPage todos={todos} saveToDo={saveToDo}
                                                        onToDoChanged={loadAllToDos}/>}/>
                <Route path="/" element={<p>Homepage</p>}/>
            </Routes>
        </>
    )
}

export default App
