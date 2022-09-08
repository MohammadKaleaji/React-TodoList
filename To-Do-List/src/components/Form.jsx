import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            // ...todos ( if I had some todos already just pass it )
            ...todos, {text: input, completed: false, id: Math.random() * 1000}
        ])
        setInput('');
    }

    return (
        <form>
            <input value={input} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add a Todo"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Add Todo
            </button>
        </form>
    );
}

export default Form;