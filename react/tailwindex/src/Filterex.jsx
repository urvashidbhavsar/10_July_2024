import React from 'react'

const Filterex = () => {
    const person = [
        {
            id: 1,
            name: "Raj",
            education: "Graduate"
        },
        {
            id: 2,
            name: "Priyank",
            education: "Post Graduate"
        },
        {
            id: 3,
            name: "Harsh",
            education: "Graduate"
        },
        {
            id: 4,
            name: "Sujal",
            education: "Post Graduate"
        },
    ]

    let res = person.filter(edu => edu.education === "Graduate")
    console.log(res)

    return (
        <>
            {
                res.map(item =>
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.education}</li>
                    </ul>
                )
            }
        </>
    )
}

export default Filterex
