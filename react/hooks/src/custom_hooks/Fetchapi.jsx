import React from 'react'
import useFetch from './useFetch'
const Fetchapi = () => {
    const [data] = useFetch("https://fakestoreapiserver.reactbd.com/products")

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Old Price</th>
                        <th>New Price</th>
                        <th>Description</th>
                        <th>Categories</th>
                        <th>Product Image</th>
                        <th>Ratting</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // console.log(data)
                        data && data.map(items =>
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{items.title}</td>
                                <td>{items.oldPrice}</td>
                                <td>{items.price}</td>
                                <td style={{ width: 300 }}>{items.description}</td>
                                <td>{items.category}</td>
                                <td><img src={items.image} alt="" height={100} width={100} /></td>
                                <td>{items.rating}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Fetchapi
