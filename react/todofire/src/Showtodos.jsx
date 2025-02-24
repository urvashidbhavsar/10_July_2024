import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';

const Showtodos = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        let qry = query(collection(db, "todos"));
        const fetchdata = onSnapshot(qry, (querysnapshot) => {
            let tododata = [];
            querysnapshot.forEach(items => {
                tododata.push({ ...items.data(), id: items.id })
            })
            setTodo(tododata)
        })
        return () => fetchdata();
    }, [])

    return (
        <>
            <div className="container">
                <div className='w-50'>
                    <div className="col-12">
                        {
                            todo.map((items) =>
                                <p key={items.id}>{items.title}</p>
                                // console.log(items)
                            )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showtodos
