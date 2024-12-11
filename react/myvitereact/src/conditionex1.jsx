import React from 'react'

// const CheckCondition = () => {
//     let user = "Abc"
//     // check only variable name 
//     if (user) {
//         return <h3>User Exist</h3>
//     }
//     return <h3>Not Exist</h3>
// }

// const CheckCondition = () => {
//     let a = 10, b = 10
//     if (a <= b && b < a) {
//         return <h3>True</h3>
//     }
//     return <h3>False</h3>
// }

const CheckCondition = () => {
    let a = 10, b = 10
    return (a < b) ? <p>True</p> : <p>False</p>

}

const conditionex1 = () => {
    return (
        <>
            <CheckCondition />
        </>
    )
}

export default conditionex1
