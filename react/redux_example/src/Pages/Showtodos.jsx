import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../Feature/todoslice'

const Showtodos = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [editid, setEditid] = useState(null);
    const [edittext, setEdittext] = useState("")

    const handleEdit = (id, text) => {
        setEditid(id)
        setEdittext(text);
    }

    const updateData = (id) => {
        dispatch(updateTodo({ id, updatedtext: edittext }))
        setEditid(null);
        setEdittext("")
    }
    const removeData = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Todo List</th>
                            <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        {
                                            editid === item.id ?
                                                <input type='text' className='form-control' value={edittext} onChange={(e) => setEdittext(e.target.value)} />
                                                :
                                                item.text
                                        }
                                    </td>
                                    <td className='text-end'>
                                        {
                                            editid === item.id ?
                                                <button className='btn btn-primary' onClick={() => updateData(item.id)}>✔</button>
                                                :
                                                <>
                                                    <button className='btn btn-primary mx-1' onClick={() => handleEdit(item.id, item.text)}>🖊</button>

                                                    <button onClick={() => removeData(item.id)} className='btn btn-danger mx-1'>🧺</button>
                                                </>
                                        }


                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showtodos
