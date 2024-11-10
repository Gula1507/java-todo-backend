import {useState} from "react";
import axios from "axios";
import {ToDo} from "../models/ToDo.ts";

type Props = {
    onNewToDoItemSaved: () => void,
}

function NewToDoCard(props: Props) {

    const [text, setText] = useState("");

    function changeText(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

    function saveToDo() {
        setText("")
        axios.post("/api/todo",
            {
                description: text,
                status: "OPEN",
            } as ToDo)
            .then(props.onNewToDoItemSaved)
    }

    return (
        <div className={"todo-card.new-todo"}>
            <input type={"text"} value={text} onInput={changeText}/>
            <button onClick={saveToDo}>Save</button>
        </div>
    );
}

export default NewToDoCard;