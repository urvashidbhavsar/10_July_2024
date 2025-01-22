import React, { useMemo, useState } from 'react'

const ExpensiveCalc = () => {
    const [count, setCount] = useState(0)

    const result = useMemo(() => {
        return count * 2
    })

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count : {count}</p>
            <p>Multiply : {result}</p>
        </>
    )
}

export default ExpensiveCalc
