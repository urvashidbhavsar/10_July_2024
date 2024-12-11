import React from 'react'

const RanderingList = () => {
    const myarr = ["List 1", "List 2", "List 3", "List 4", "List 5", "List 6"]

    const product = [
        {
            id: 1,
            name: "vivo",
            price: 15000,
        },
        {
            id: 2,
            name: "oppo",
            price: 12000,
        }
    ]
    const fil = product.filter(product =>
        product.price === 15000
    )

    return (
        <>
            <ul>
                {
                    myarr.map((items, key) =>
                        <li key={key}>{items}</li>
                        // console.log(items)
                    )
                }
            </ul>
            <p>
                {fil.map(p =>
                    <h1>{p.price}</h1>
                )}
            </p>
        </>
    )
}

export default RanderingList
