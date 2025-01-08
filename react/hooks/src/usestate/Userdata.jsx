import React, { useState } from 'react'

const Userdata = () => {
    var userdata = [
        {
            id: 1,
            name: "Sujal",
            city: "Surat"
        },
        {
            id: 2,
            name: "Harsh",
            city: "Bharuch"
        },
        {
            id: 3,
            name: "Priyank",
            city: "Surat"
        }
    ]
    let [data, userData] = useState(userdata)

    let [search, userSearch] = useState('');
    let [filterdata, filterSearch] = useState(data);

    let handleEvent = (e) => {
        let val = e.target.value;
        userSearch(val);
        if (val) {
            let filter_data = data.filter(items => items.city.toLowerCase().includes(val.toLowerCase()))
            // console.log(filter_data);
            filterSearch(filter_data)
        } else {
            filterSearch(data)
        }
    }
    return (
        <>
            <input type="text" onChange={handleEvent} value={search} />

            <div>Total data : {data.length}</div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata.map((items, key) =>
                            <tr key={key}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Userdata
