import React, { useState } from 'react'

const Addproduct = ({ productadded }) => {
    const caterogies = ["Laptop", "Smart watch", "Head Phone", "Computer Accessories", "Gaming Laptop", "Cameras", "Tablets", "Soundbar Speakers", "Earbirds"]

    const [input, setInput] = useState({
        id: "",
        brand: "",
        category: "",
        title: "",
        description: "",
        oldprice: "",
        rate: "",
        newprice: "",
        image: ""
    })

    const handlechange = (e) => {
        // setInput({ ...input, [e.target.name]: e.target.value })

        const updateData = { ...input, [e.target.name]: e.target.value }

        if (e.target.name === "oldprice" || e.target.name === "rate") {
            const price = parseFloat(updateData.oldprice) || 0;
            const rate = parseFloat(updateData.rate) || 0;
            if (price > 0 && rate > 0) {
                updateData.newprice = Math.round(price - (price * rate / 100))
                console.log(updateData.newprice);
            } else {
                updateData.newprice = ""
            }
        }
        setInput(updateData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/products", {
            method: "POST",
            body: JSON.stringify(input)
        })

        if (res.ok) {
            alert("Data added successfully")
            setInput({
                id: "",
                brand: "",
                category: "",
                title: "",
                description: "",
                oldprice: "",
                rate: "",
                newprice: "",
                image: ""
            })
            productadded();
        } else {
            alert("Data not added")
        }
    }
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addproduct">
                ↪ Add Product
            </button>

            <div className="modal fade" id="addproduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addproductLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addproductLabel">Add Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="number" name="id" placeholder='Enter ID' className='form-control' onChange={handlechange} value={input.id} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="brand" placeholder='Brand' className='form-control' onChange={handlechange} value={input.brand} />
                                    </div>
                                    <div className="col-12">
                                        <select name="category" value={input.category} className='form-select' onChange={handlechange}>
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
                                        <input type="text" name="title" placeholder='Title' className='form-control' onChange={handlechange} value={input.title} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="description" placeholder='Description' className='form-control' onChange={handlechange} value={input.description} />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="oldprice" placeholder='Old price' className='form-control' onChange={handlechange} value={input.oldprice} />
                                    </div>
                                    <div className="col-2">
                                        <input type="number" name="rate" placeholder='Rate(%)' className='form-control' onChange={handlechange} value={input.rate} />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="newprice" placeholder='New Price' className='form-control' onChange={handlechange} value={input.newprice} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="image" placeholder='Image' className='form-control' onChange={handlechange} value={input.image} />
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproduct
