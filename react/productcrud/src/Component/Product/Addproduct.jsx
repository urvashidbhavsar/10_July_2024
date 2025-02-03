import React, { useState } from 'react'
import Navigation from '../Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Addproduct = () => {
    const caterogies = ["Laptop", "Smart watch", "Head Phone", "Computer Accessories", "Gaming Laptop", "Cameras", "Tablets", "Soundbar Speakers"]

    const [input, setInput] = useState({
        id: "",
        catg: "",
        brand: "",
        title: "",
        des: "",
        oldprice: "",
        rate: "",
        newprice: "",
        img: ""
    })
    const handleUpdate = (e) => {
        // setInput({ ...input, [e.target.name]: e.target.value })

        const updateData = { ...input, [e.target.name]: e.target.value }

        if (e.target.name === "oldprice" || e.target.name === "rate") {
            const price = parseFloat(updateData.oldprice) || 0;
            const rate = parseFloat(updateData.rate) || 0;
            if (price > 0 && rate > 0) {
                updateData.newprice = (price - (price * rate / 100)).toFixed(2)
                console.log(updateData.newprice);
            } else {
                updateData.newprice = ""
            }
        }

        setInput(updateData)

    }

    // console.log(input.id);
    // console.log(input.catg);

    const handleSubmit = (e) => {
        e.preventDefault();
        let getdata = JSON.parse(localStorage.getItem("products")) || []
        getdata.push(input);
        localStorage.setItem("products", JSON.stringify(getdata))
        alert("data store successfully");

        setInput({
            id: "",
            catg: "",
            brand: "",
            title: "",
            des: "",
            oldprice: "",
            rate: "",
            newprice: "",
            img: ""
        })
    }

    return (
        <>
            <Navigation />

            <div className="container">
                <h2 className='my-3'>Product Page</h2>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addproduct">
                    <FontAwesomeIcon icon={faPlus} /> Add Product
                </button>

                <div className="modal fade" id="addproduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addproductLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addproductLabel">Add Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    {/* id, categories, brand, title, description, oldprice, rate, newprice, image */}
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input type="number" name="id" placeholder='ID' className='form-control' value={input.id} onChange={handleUpdate} />
                                        </div>
                                        <div className="col-12">
                                            <select name="catg" value={input.catg} className='form-select' onChange={handleUpdate}>
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
                                            <input type="text" name="brand" value={input.brand} placeholder='Brand' className='form-control' onChange={handleUpdate} />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="title" value={input.title} placeholder='Title' className='form-control' onChange={handleUpdate} />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="des" value={input.des} className='form-control' placeholder='Description' onChange={handleUpdate}></textarea>
                                        </div>
                                        <div className="col-5">
                                            <input type="number" name="oldprice" value={input.oldprice} placeholder='Original Price' className='form-control' onChange={handleUpdate} />
                                        </div>
                                        <div className="col-2">
                                            <input type="number" name="rate" value={input.rate} placeholder='Rate' className='form-control' onChange={handleUpdate} />
                                        </div>
                                        <div className="col-5">
                                            <input type="number" name="newprice" value={input.newprice} placeholder='New Price' className='form-control' onChange={handleUpdate} readOnly />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="img" value={input.img} placeholder='Image' className='form-control' onChange={handleUpdate} />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct
