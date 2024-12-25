import React from 'react'

const Ifstatement = () => {
    const Checkcondtion = ({ city, state }) => {
        // if (state === "Maharashtra") {
        //     return <div>{state} 👍</div>
        // } else {
        //     return <div>{state} ❌</div>
        // }
        return (state === "Gujarat") ? <div>{state} 👍</div> : <div>{state} ❌</div>
        
    }
    return (
        <div>
            <Checkcondtion city="Surat" state="Gujarat" />
            <Checkcondtion city="Pune" state="Maharashtra" />
            <Checkcondtion city="Banglore" state="Karnataka" />
            <Checkcondtion city="Navsari" state="Gujarat" />
            <Checkcondtion city="Amritsar" state="Panjab" />
        </div>
    )
}

export default Ifstatement
