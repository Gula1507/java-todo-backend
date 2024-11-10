import {ToDo} from "../models/ToDo.ts";
import {useNavigate} from "react-router-dom";
import "../styles/ToDoCard.css";

type Props = {
    todo: ToDo;
}

export default function ToDoCard(props: Props) {
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate("/todos/" + props.todo.id)
    }

    return (
        <div className="todo-card" onClick={navigateToDetails}>

            <div className="todo-card-info">
                <h3>{props.todo.description}</h3>
                <p>Status: {props.todo.status}</p>
            </div>
        </div>
    );
}

