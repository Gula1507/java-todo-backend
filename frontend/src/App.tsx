import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import ToDoPage from "./components/ToDoPage.tsx";
import {ToDo} from "./models/ToDo.ts";
import React, {useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute.tsx";

function App() {
    const [todos, setToDos] = useState<ToDo[]>([])
    const [user, setUser] = useState<string | null | undefined>(undefined)

    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = () => {
        axios.get('/api/auth/me')
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                setUser(null)
            })
    }


    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin
        window.open(host + '/oauth2/authorization/github', '_self')
    }

    const logout = () => {

        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080' : window.location.origin

        window.open(host + '/logout', '_self')
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
        setToDos([...todos, newToDo]);
    };
    return (
        <>
            {!user && <button onClick={login}>Login</button>}
            <p>{user}</p>
            {user && <button onClick={logout}>Logout</button>}
            <Header/>

            <Routes>
                <Route path="/todos" element={<ToDoPage todos={todos} saveToDo={saveToDo}
                                                        onToDoChanged={loadAllToDos}/>}/>
                <Route path="/" element={<p>Welcome</p>}/>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path={"/new"}
                           element={<p>Hello logged User</p>}/>
                    {/*element={<NewToDoCard onNewToDoItemSaved={loadAllToDos}/>}/>*/}
                </Route>
            </Routes>
        </>
    )
}

export default App
