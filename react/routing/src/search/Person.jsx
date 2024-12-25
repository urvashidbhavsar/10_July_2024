import React from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Person = () => {
    let Data = [{
        id: 1,
        name: "Priya",
        address: "Surat"
    },
    {
        id: 2,
        name: "Rohan",
        address: "Navsari"
    },
    {
        id: 3,
        name: "Geeta",
        address: "Surat"
    },
    {
        id: 4,
        name: "Dimpal",
        address: "Vapi"
    },
    {
        id: 5,
        name: "Hina",
        address: "Jamnagar"
    },
    {
        id: 6,
        name: "Vivek",
        address: "Surat"
    },
    {
        id: 7,
        name: "Pooja",
        address: "Surat"
    },
    ]
    var tabledata = Data.map((items, k) =>
        <tr key={k}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>{items.address}</td>
        </tr>
    )
    var total = tabledata.length
    let handleEvent = (e) => {
        let x = Data.filter((search) => search.address == e.target.value)
        console.log(x);
    }

    return (
        <>
            <h4>Total Data : </h4>
            <p>Search : <input type="text" name="" id="" onChange={handleEvent} /></p>
            <Button variant="danger">Click</Button>
            <Table border striped bordered hover variant='secondary'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <p>Total Table Data : {total}</p>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )
}

export default Person
