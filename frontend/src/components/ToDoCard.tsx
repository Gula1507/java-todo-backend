import {ToDo} from "../models/ToDo.ts";
import {useNavigate} from "react-router-dom";
import "../styles/ToDoCard.css";
import axios from "axios";

type Props = {
    todo: ToDo;
    onToDoChanged: () => void
}

export default function ToDoCard(props: Props) {
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate("/todos/" + props.todo.id)
    }

    function deleteToDo() {
        axios.delete("api/todo/" + props.todo.id)
            .then(props.onToDoChanged)
    }

    return (
        <div className="todo-card" onClick={navigateToDetails}>

            <div className="todo-card-info">
                <h3>{props.todo.description}</h3>
                <button onClick={deleteToDo}>❌</button>
            </div>
        </div>
    );
}

