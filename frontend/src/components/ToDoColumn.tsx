import {ToDoStatus} from "../models/ToDoStatus.ts";
import {ToDo} from "../models/ToDo.ts";
import ToDoCard from "./ToDoCard.tsx";

type Props = {
    status: ToDoStatus,
    todos: ToDo[],
}

export default function ToDoColumn(props: Props) {
    return (
        <div>
            <h2>{props.status}</h2>
            {
                props.todos.map(todo => <ToDoCard todo={todo} key={todo.id}/>)

            }
        </div>
    );
}
