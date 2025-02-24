import React from 'react'
import { useState } from 'react'
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'

const Addtodo = () => {
    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: true,
            })
            alert("Data added Successfully!!!")
            setTitle("")
        }
    }

    return (
        <>
            <div className="container">
                <form className='w-50'>
                    <h2>Todo List</h2>
                    <div className='row'>
                        <div className="col-8">
                            <input type="text" name="" className='form-control' placeholder='add todos' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addtodo
