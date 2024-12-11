import React from 'react'

// const setimg = (props) => {
//     return (
//         <>
//             {/* <img src={Image} alt="" height={props.size} width={props.size} /> */}
//             <img src={props.url} alt="" width={props.size} height={props.size} />
//         </>
//     )
// }

const setimg = ({ url, size }) => {
    console.log(url);

    return (
        <>
            <img src={url} alt="" width={size} height={size} />
        </>
    )
}


export default setimg
