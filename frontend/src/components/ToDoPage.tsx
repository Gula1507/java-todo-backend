import {ToDo} from "../models/ToDo.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import '../styles/ToDoPage.css';
import ToDoColumn from "./ToDoColumn.tsx";
import {allStatuses} from "../models/ToDoStatus.ts"

type TodoProps = {
    todos: ToDo[]
    saveToDo: (newToDo: ToDo) => void
}


export default function ToDoPage(props: TodoProps) {
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
            <h1>ToDos</h1>
            <div className="todo-container">
                {
                    allStatuses.map(status => {
                        const filteredToDos = props.todos.filter(
                            todo => todo.status === status);

                        return (<div className="todo-section" key="status">
                                <ToDoColumn status={status} todos={filteredToDos}/>
                            </div>
                        )
                    })
                }
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