import React, { useState } from 'react'

const Updatedata = ({ inputUpdate, setinputupdate, changeData }) => {
    // const [inputUpdate, setinputupdate] = useState()
    const caterogies = ["Laptop", "Smart watch", "Head Phone", "Computer Accessories", "Gaming Laptop", "Cameras", "Tablets", "Soundbar Speakers", "Earbirds"]

    const handlechange = (e) => {
        const updateData = { ...inputUpdate, [e.target.name]: e.target.value }

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
        setinputupdate(updateData)
    }

    const handleUpdate = () => {
        fetch(`http://localhost:3000/products/${inputUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify(inputUpdate)
        })
            .then(res => res.json())
            .then(() => {
                changeData()
                setinputupdate({})
            })
    }
    // console.log(inputUpdate.brand)
    // console.log(inputUpdate.category)
    // console.log(inputUpdate.title)
    // console.log(inputUpdate.description)
    // console.log(inputUpdate.oldprice)
    // console.log(inputUpdate.newprice)
    // console.log(inputUpdate.rate)
    // console.log(inputUpdate.image)
    return (
        <>
            <div className="modal fade" id="updateproduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addproductLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addproductLabel">Update Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="number" name="id" placeholder='Brand' className='form-control' value={inputUpdate.id} readOnly />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="brand" placeholder='Brand' className='form-control' onChange={handlechange} value={inputUpdate.brand} />
                                    </div>
                                    <div className="col-12">
                                        <select name="category" value={inputUpdate.category} className='form-select' onChange={handlechange}>
                                            <option>--- select caterogies ---</option>
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
                                        <input type="text" name="title" placeholder='Title' className='form-control' onChange={handlechange} value={inputUpdate.title} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="description" placeholder='Description' className='form-control' onChange={handlechange} value={inputUpdate.description} />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="oldprice" placeholder='Old price' className='form-control' onChange={handlechange} value={inputUpdate.oldprice} />
                                    </div>
                                    <div className="col-2">
                                        <input type="number" name="rate" placeholder='Rate(%)' className='form-control' onChange={handlechange} value={inputUpdate.rate} />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" name="newprice" placeholder='New Price' readOnly className='form-control' onChange={handlechange} value={inputUpdate.newprice} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="image" placeholder='Image' className='form-control' onChange={handlechange} value={inputUpdate.image} />
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
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

export default Updatedata
