import {ToDoType} from "../ToDoType.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import './Todos.css';

function ToDos() {

    const [todos, setToDos] = useState<ToDoType[]>([])

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

    return (
        <div className="todo-container">
            <section>
                <h3>OPEN</h3>
                {/* Todos mit Status 'Done' filtern und anzeigen */}
                {todos.filter((todo) => todo.status === 'OPEN').map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.status}</p>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h3>Doing</h3>
                {/* Todos mit Status 'Done' filtern und anzeigen */}
                {todos.filter((todo) => todo.status === 'IN_PROGRESS').map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.status}</p>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h3>Done</h3>
                {/* Todos mit Status 'Done' filtern und anzeigen */}
                {todos.filter((todo) => todo.status === 'DONE').map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.status}</p>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ToDos;