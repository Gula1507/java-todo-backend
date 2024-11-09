import {ToDo} from "../types/ToDo.ts";
import {ChangeEvent, FormEvent, useState} from "react";

import './Todos.css';

type TodoProps = {
    todos: ToDo[]
    saveToDo: (newToDo: ToDo) => void
}

export default function ToDos(props: TodoProps) {
    console.log(props);
    const [newToDo, setNewToDo] = useState<ToDo>({id: "", description: "", status: 'OPEN'});

    const onToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewToDo({...newToDo, [event.target.name]: event.target.value})
    }

    const onToDoSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newToDo);
        props.saveToDo(newToDo);
        setNewToDo({id: "", description: "", status: 'OPEN'});
    }

    return (
        <>

            <div className="todo-container">
                <section className="todo-section">
                    <h3>ToDo</h3>
                    <ul></ul>
                    {/* Todos mit Status 'Done' filtern und anzeigen */}
                    {props.todos.filter((todo) => todo.status === 'OPEN').map((todo) => (
                        <section key={todo.id} className="eachTodo">{todo.description}
                        </section>
                    ))}
                </section>
                <section className="todo-section">
                    <h3>Doing</h3>
                    {/* Todos mit Status 'Done' filtern und anzeigen */}
                    {props.todos.filter((todo) => todo.status === 'IN_PROGRESS').map((todo) => (
                        <div key={todo.id}>
                            <p>{todo.status}</p>
                            <p>{todo.description}</p>
                        </div>
                    ))}
                </section>
                <section className="todo-section">
                    <h3>Done</h3>
                    {/* Todos mit Status 'Done' filtern und anzeigen */}
                    {props.todos.filter((todo) => todo.status === 'DONE').map((todo) => (
                        <div key={todo.id}>
                            <p>{todo.status}</p>
                            <p>{todo.description}</p>
                        </div>
                    ))}
                </section>

            </div>
            <form onSubmit={onToDoSubmit}>
                <input type="text" onChange={onToDoChange} name="description" value={newToDo.description}
                       placeholder="ToDo description"
                />
                <button>
                    Save
                </button>
            </form>
        </>
    )
}