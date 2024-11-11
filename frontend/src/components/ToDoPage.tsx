import {ToDo} from "../models/ToDo.ts";
import '../styles/ToDoPage.css';
import ToDoColumn from "./ToDoColumn.tsx";
import {allStatuses} from "../models/ToDoStatus.ts"

type TodoProps = {
    todos: ToDo[]
    saveToDo: (newToDo: ToDo) => void
    onToDoChanged: () => void
}


export default function ToDoPage(props: TodoProps) {

    return (
        <>
            <h1>ToDos</h1>
            <div className="todo-container">
                {allStatuses.map(status => {
                    const filteredToDos = props.todos.filter(todo => todo.status === status);
                    return <ToDoColumn status={status} todos={filteredToDos}
                                       onToDoChanged={props.onToDoChanged}
                                       key={status}/>;
                })}
            </div>

        </>
    )
}