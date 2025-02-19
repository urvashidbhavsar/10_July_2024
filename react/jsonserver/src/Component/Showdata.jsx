import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Addproduct from './Addproduct'
import Updatedata from './Updatedata'

const Showdata = () => {
    const [data, setData] = useState([])
    const [editdata, setEditdata] = useState({})

    const fetchdata = () => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const imgset = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    const deletedata = (id) => {
        if (confirm("Are you sure to want to delete this data?")) {
           fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(() => {
                    fetchdata()
                })
        }
    }

    const handleEdit = (items) => {
        setEditdata(items)
    }

    return (
        <>
            <div className="container-fluid">
                <Addproduct productadded={fetchdata} />
                <div className='py-3'>
                    <table border={1} className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Brand</th>
                                <th>Categories</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Rate</th>
                                <th>Image</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(items =>
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.brand}</td>
                                        <td>{items.category}</td>
                                        <td>{items.title}</td>
                                        <td>{items.description}</td>
                                        <td>
                                            <div><s>₹{items.oldprice}</s></div>
                                            <div>₹{items.newprice}</div>
                                        </td>
                                        <td>{items.rate}%</td>
                                        <td>
                                            <img src={items.image} alt="" style={imgset} />
                                        </td>
                                        <td>
                                            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#updateproduct" onClick={() => handleEdit(items)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deletedata(items.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Updatedata inputUpdate={editdata} setinputupdate={setEditdata} changeData={fetchdata} />
        </>
    )
}

export default Showdata
