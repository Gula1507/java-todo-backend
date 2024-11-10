import {ToDo} from "../models/ToDo.ts";
import '../styles/ToDoPage.css';
import ToDoColumn from "./ToDoColumn.tsx";
import {allStatuses} from "../models/ToDoStatus.ts"

type TodoProps = {
    todos: ToDo[]
    saveToDo: (newToDo: ToDo) => void
    onNewToDoItemSaved: () => void
}


export default function ToDoPage(props: TodoProps) {

    return (
        <>
            <h1>ToDos</h1>
            <div className="todo-container">
                {
                    allStatuses.map(status => {
                        const filteredToDos = props.todos.filter(
                            todo => todo.status === status);

                        return (<div className="todo-section" key="status">
                                <ToDoColumn status={status} todos={filteredToDos}
                                            onNewTodoItemSaved={props.onNewToDoItemSaved}/>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}