import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import Todo from './Todo';

const Showtodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const qry = query(collection(db, "todos"));
        const unsub = onSnapshot(qry, (querySnapshot) => {
            let todoArray = [];
            querySnapshot.forEach((item) => {
                todoArray.push({ ...item.data(), id: item.id });
            });
            setTodos(todoArray);
        });
        return () => unsub();
    }, []);

    const handleEdit = async (todo, title) => {
        if (title.trim()) {
            await updateDoc(doc(db, "todos", todo.id), { title: title });
        }
    };

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed,
        });
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };

    return (
        <div className="container py-3">
            <div className="w-50">
                <div className="row g-2 align-items-center">
                    {todos.map((item) => (
                        <Todo
                            key={item.id}
                            todo={item}
                            toggleComplete={toggleComplete}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Showtodos;