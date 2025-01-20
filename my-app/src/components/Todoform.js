import { useState } from "react"; // Correctly capitalized useState

import {useDispatch} from "react-redux";

 import { addNewTodo } from "../redux/actions";


const Todoform = () => {
    const [text, setText] = useState(""); 
    
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on form submit
        console.log(text);  // For testing, log the input value

        dispatch(addNewTodo(text));
        setText('');
    };

    const onInputChange = (e) => {
        setText(e.target.value); // Update the state with the input value
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text} // Bind the input value to state
            />
        </form>
    );
};

export default Todoform;
