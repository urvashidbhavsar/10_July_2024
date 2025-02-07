import React, { useState } from 'react'

const Addproduct = ({ productadded }) => {
    const [input, setInput] = useState({
        id: "",
        brand: "",
        category: "",
        title: "",
        description: "",
        oldprice: "",
        newprice: "",
        image: ""
    })

    const handlechange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addproduct">
                ↪ Add Product
            </button>

            <div class="modal fade" id="addproduct" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addproductLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="addproductLabel">Add Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="number" name="id" placeholder='Enter ID' className='form-control' onChange={handlechange} value={input.id} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="brand" placeholder='Brand' className='form-control' onChange={handlechange} value={input.brand} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="category" placeholder='Category' className='form-control' onChange={handlechange} value={input.category} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="title" placeholder='Title' className='form-control' onChange={handlechange} value={input.title} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="description" placeholder='Description' className='form-control' onChange={handlechange} value={input.description} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" name="oldprice" placeholder='Old price' className='form-control' onChange={handlechange} value={input.oldprice} />
                                    </div>
                                    <div className="col-12">
                                        <input type="number" name="newprice" placeholder='New Price' className='form-control' onChange={handlechange} value={input.newprice} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="image" placeholder='Image' className='form-control' onChange={handlechange} value={input.image} />
                                    </div>
                                    <div className="col-12">
                                        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add</button>
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
