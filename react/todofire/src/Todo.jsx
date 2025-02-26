import React, { useState } from 'react';
import { faCircleCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
    const [newTitle, setNewTitle] = useState(todo.title);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSave = () => {
        handleEdit(todo, newTitle);
        setIsEditing(false);
    };

    return (
        <>
            <div className="col-7">
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={handleChange}
                        className="form-control"
                    />
                ) : (
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.title}
                    </span>
                )}
            </div>
            <div className="col-1">
                <button className="btn btn-success" onClick={() => toggleComplete(todo)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </button>
            </div>
            <div className="col-2">
                {isEditing ? (
                    <button className="btn btn-primary" onClick={handleSave}>
                        Save
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                )}
            </div>
            <div className="col-1">
                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </>
    );
};

export default Todo;