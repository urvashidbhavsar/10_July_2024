import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Addproduct from './Addproduct'

const Showdata = () => {
    const [data, setData] = useState([])

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
                                <th>Image</th>
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
                                        <td>
                                            <img src={items.image} alt="" style={imgset} />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Showdata
