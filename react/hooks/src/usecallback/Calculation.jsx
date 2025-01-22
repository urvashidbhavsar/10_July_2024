import React, { useCallback, useState } from 'react'

const Calculation = () => {
    const [count, setCount] = useState(0)

    const handleEvent = useCallback(() => {
        setCount(count + 1)
    }, [count])
    return (
        <>
            <button onClick={handleEvent}>click</button>
            <p>{count}</p>
        </>
    )
}

export default Calculation
