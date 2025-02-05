import React, { useEffect, useState } from 'react'
import EditData from './EditData'

const Showproduct = () => {
    const [getdata, setGetdata] = useState([])
    // state for store value for edit means fetch
    const [storedata, setStoredata] = useState(null)
    // edit data
    const [updatedata, setUpdatedata] = useState({})

    const caterogies = ["Laptop", "Smart watch", "Head Phone", "Computer Accessories", "Gaming Laptop", "Cameras", "Tablets", "Soundbar Speakers"]

    useEffect(() => {
        const getalldata = JSON.parse(localStorage.getItem("productsdata"))
        setGetdata(getalldata)
    }, [])
    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }
    // delete code
    const handleDelete = (id) => {
        let deletedata = getdata.filter(pro => pro.id !== id);
        localStorage.setItem("productsdata", JSON.stringify(deletedata))
        setGetdata(deletedata)
    }

    // edit data 
    const handleUpdate = (id) => {
        setStoredata(id)
        setUpdatedata(id)
    }

    const editproducts = () => {
        const updatedproduct = getdata.map(items =>
            items.id === storedata.id ? updatedata : items
        );
        localStorage.setItem("productsdata", JSON.stringify(updatedproduct))
        setGetdata(updatedproduct)
        setUpdatedata(null)
    }
    // for input field
    const handleChange = (e) => {
        const updateData = { ...updatedata, [e.target.name]: e.target.value }

        if (e.target.name === "oldprice" || e.target.name === "rate") {
            const price = parseFloat(updateData.oldprice) || 0;
            const rate = parseFloat(updateData.rate) || 0;
            if (price > 0 && rate > 0) {
                updateData.newprice = (price - (price * rate / 100)).toFixed(2)
            } else {
                updateData.newprice = ""
            }
        }
        setUpdatedata(updateData)
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
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (getdata.length > 0) ?
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
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#Editdata" onClick={() => handleUpdate(items)}>
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => handleDelete(items.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ) :
                                <tr>
                                    <td colSpan={9}>Data not found</td>
                                </tr>
                        }
                    </tbody>
                </table>

                {/* modal */}
                {/* <EditData modalid="Editdata" /> */}
                <div className="modal fade" id="Editdata" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addproductLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addproductLabel">Edit Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3"><div className="col-12">
                                    <select name="catg" className='form-select' value={updatedata.catg} onChange={handleChange} >
                                        <option value="">--- select caterogies ---</option>
                                        {
                                            caterogies.map(items =>
                                                <option value={items} key={items}>
                                                    {items}
                                                </option>
                                            )
                                        }
                                    </select>
                                </div>
                                    <div className="col-12">
                                        <input type="text" name="brand" placeholder='Brand' className='form-control' onChange={handleChange} value={updatedata.brand} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="title" placeholder='Title' className='form-control' onChange={handleChange} value={updatedata.title} />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="des" className='form-control' placeholder='Description' onChange={handleChange} value={updatedata.des}></textarea>
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="oldprice" placeholder='Original Price' className='form-control' onChange={handleChange} value={updatedata.oldprice} />
                                    </div>
                                    <div className="col-2">
                                        <input type="number" name="rate" placeholder='Rate' className='form-control' onChange={handleChange} value={updatedata.rate} />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="newprice" placeholder='New Price' className='form-control' value={updatedata.newprice} onChange={handleChange} readOnly />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="img" placeholder='Image' className='form-control' onChange={handleChange} value={updatedata.img} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary" onClick={editproducts}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showproduct
