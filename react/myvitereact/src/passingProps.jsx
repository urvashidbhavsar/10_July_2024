import React from 'react'
import Setimg from './setimg'
import Image from './assets/newimg.jpg'

const passingProps = () => {
    return (
        <div className='grid'>
            {/* <Setimg size={500} /> */}
            <Setimg url="https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg" size={400} />
            <Setimg url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ewSAVQA73sk9w6TYqTdv8kbFZ6K0ZbRD6g&s" size={400} />
            <Setimg url="https://picsum.photos/200" size={400} />
            <Setimg url="https://picsum.photos/200/300" size={400} />
            <Setimg url="https://picsum.photos/300" size={400} />
            <Setimg url="https://t4.ftcdn.net/jpg/06/22/69/19/360_F_622691912_UqnMQAWYxUGeXBmzg2CFUdCCx6MVyG0B.jpg" size={400} />
        </div>
    )
}

export default passingProps
