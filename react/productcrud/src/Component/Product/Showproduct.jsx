import React, { useEffect, useState } from 'react'

const Showproduct = () => {
    const [getdata, setGetdata] = useState([])
    useEffect(() => {
        const getalldata = JSON.parse(localStorage.getItem("products"))
        setGetdata(getalldata)
    })
    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }
    return (
        <>
            <div className="container-fluid">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Categories</th>
                            <th>Brand</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Old Price</th>
                            <th>Rate</th>
                            <th>New Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.length > 0 ?
                                getdata.map(items =>
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.catg}</td>
                                        <td>{items.brand}</td>
                                        <td>{items.title}</td>
                                        <td>{items.des}</td>
                                        <td>{items.oldprice}</td>
                                        <td>{items.rate}</td>
                                        <td>{items.newprice}</td>
                                        <td><img src={items.img} style={setimg} /></td>
                                    </tr>
                                ) :
                                <tr>
                                    <td colSpan={9}>Data not found</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showproduct
