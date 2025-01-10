import React, { useEffect, useState } from 'react'

const Fetchdata = () => {
    const [user,setUser] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetch_data = async ()=>{
            try{
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                setUser(data)
            }
            catch(e){
                setError(e)
            }
            finally{
                setLoading(false)
            }
        }
        fetch_data();
    },[])

    if(loading){
        return <div>Loading ... </div>
    }
    if(error){
        return <div>Cant Load ...</div>
    }
  return (
    <>
        {
            user.map((users)=>
                <div key={users}>{users.category}</div>
            // console.log(users.title)
            )
        }
    </>
  )
}

export default Fetchdata
