import React from 'react'
// child function
const PassProp = (props) => {
    function hello(){
        let data = "i am child"
        props.name(data)
    }
  return (
    <>
      <button onClick={hello}>Child</button>
    </>
  )
}

export default PassProp
